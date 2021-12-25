import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

const WorkModal = dynamic(() => import('@/components/layouts/Modal/Work'), {
  ssr: false,
});

import HeadLine from '@/components/elements/HeadLine';
import Select, { Option } from '@/components/elements/Select';
import Spinner from '@/components/elements/Spinner';
import WorkItem from '@/components/layouts/WorkItem';
import { useIntersection } from '@/hooks/useIntersection';
import { client } from '@/lib/microcms';
import { Tag, Work } from '@/lib/microcms/model';
import { FETCH_WORKS_LIMIT } from '@/pages/works';

import {
  EmptyText,
  List,
  LoadingWrapper,
  TagSelector,
  WorkList,
  Wrapper,
} from './style';

interface Props {
  works: Work[];
  tags: Tag[];
}

const WorksTemplate: React.VFC<Props> = ({ works, tags }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetWork, setTargetWork] = useState<Work | null>(null);
  const [_works, setWorks] = useState<Work[]>(works);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<Option['value']>('');
  const ref = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(ref);

  const _tags = [
    {
      value: 'all',
      text: 'すべて',
    },
    ...tags.map((tag) => ({ value: tag.id, text: tag.name })),
  ];

  const getWorks = (opts?: { filters?: string; initialize?: boolean }) => {
    setFetching(true);

    let offset = FETCH_WORKS_LIMIT * page;

    if (opts?.initialize) {
      offset = 0;
      setPage(0);
    }

    client
      .getContents('works', {
        limit: FETCH_WORKS_LIMIT,
        offset,
        filters: opts?.filters || '',
      })
      .then((res) => {
        setWorks(opts?.initialize ? res : _works.concat(res));
        setPage((prev) => prev + 1);
      })
      .catch((err) => {
        alert(`予期せぬエラーが発生しました: ${err}`);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  useEffect(() => {
    if (
      intersection &&
      !fetching &&
      _works.length === FETCH_WORKS_LIMIT * page
    ) {
      getWorks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection]);

  const handleClose = () => {
    setIsOpen(false);
    setTargetWork(null);
  };

  const handleClick = (work: Work) => {
    setIsOpen(true);
    setTargetWork(work);
  };

  const filterTags = (id: string) => {
    const tag = _tags.find((tag) => tag.value === id);

    if (!tag) {
      alert('予期せぬエラーが発生しました');
      return;
    }

    getWorks({
      filters: id !== 'all' ? `tags[contains]${id}` : '',
      initialize: true,
    });
    setSelectedTag(tag.text);
  };

  return (
    <>
      <WorkModal
        isOpen={isOpen}
        handleClose={() => handleClose()}
        work={targetWork}
        onClickTag={filterTags}
      />
      <Wrapper>
        <HeadLine>WORKS</HeadLine>
        <TagSelector>
          <Select
            value={selectedTag}
            options={_tags}
            onSelect={(val) => filterTags(val)}
          />
        </TagSelector>
        {_works.length > 0 ? (
          <WorkList>
            {_works.map((w) => (
              <List key={w.id}>
                <WorkItem work={w} onClick={() => handleClick(w)} />
              </List>
            ))}
          </WorkList>
        ) : (
          <EmptyText>
            {!fetching && `${selectedTag}に関連した担当作品はございません`}
          </EmptyText>
        )}
      </Wrapper>
      {fetching && (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      )}
      <div ref={ref} />
    </>
  );
};

export default WorksTemplate;
