import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

const WorkModal = dynamic(() => import('@/components/layouts/Modal/Work'), {
  ssr: false,
});

import Button from '@/components/elements/Button';
import HeadLine from '@/components/elements/HeadLine';
import Spinner from '@/components/elements/Spinner';
import WorkItem from '@/components/layouts/WorkItem';
import { useIntersection } from '@/hooks/useIntersection';
import { client } from '@/lib/microcms';
import { Tag, Work } from '@/lib/microcms/model';
import { FETCH_WORKS_LIMIT } from '@/pages/works';

import { List, LoadingWrapper, TagList, WorkList, Wrapper } from './style';

interface Props {
  works: Work[];
  tags: Tag[];
}

type SearchTags = {
  id: string;
  name: string;
  clicked: boolean;
};

const WorksTemplate: React.VFC<Props> = ({ works, tags }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetWork, setTargetWork] = useState<Work | null>(null);
  const [_works, setWorks] = useState<Work[]>(works);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(false);
  const [_tags, setTags] = useState<SearchTags[]>([
    {
      id: 'all',
      name: 'すべて',
      clicked: true,
    },
    ...tags.map((tag) => ({ id: tag.id, name: tag.name, clicked: false })),
  ]);
  const ref = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(ref);

  const getWorks = (opts?: { filters?: string; initialize?: boolean }) => {
    setFetching(true);

    const offset = opts?.initialize ? 0 : FETCH_WORKS_LIMIT * page;

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
    getWorks({
      filters: id !== 'all' ? `tags[contains]${id}` : '',
      initialize: true,
    });
    setTags((prev) => {
      const newTags = [...prev];
      newTags.forEach((tag) => {
        tag.clicked = tag.id === id;
      });
      return newTags;
    });
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
        <TagList>
          {_tags.map((tag) => (
            <li key={tag.name}>
              <Button
                bgColor='primary'
                fontSize='s'
                spacing='s'
                radius='s'
                outline={!tag.clicked}
                onClick={() => filterTags(tag.id)}
              >
                {tag.name}
              </Button>
            </li>
          ))}
        </TagList>
        <WorkList>
          {_works.map((w) => (
            <List key={w.id}>
              <WorkItem work={w} onClick={() => handleClick(w)} />
            </List>
          ))}
        </WorkList>
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
