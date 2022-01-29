/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const WorkModal = dynamic(() => import('@/components/layouts/Modal/Work'), {
  ssr: false,
});

import dayjs from 'dayjs';

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
  pickupWorks: Work[];
  works: Work[];
  tags: Tag[];
}

const sortedWorks = (works: Work[]) => {
  return works.sort((a, b) => dayjs(b.releasedAt).diff(a.releasedAt));
};

const WorksTemplate: React.VFC<Props> = ({ pickupWorks, works, tags }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetWork, setTargetWork] = useState<Work | null>(null);
  const [_works, setWorks] = useState<Work[]>(sortedWorks(works));
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<Option['value']>('all');
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

  const filteredPickupWorks = useMemo(
    () =>
      pickupWorks.filter(
        (w) =>
          selectedTag === 'all' ||
          w.tags.map((t) => t.id).includes(selectedTag),
      ),
    [pickupWorks, selectedTag],
  );

  const getWorks = (opts?: { filters?: string; initialize?: boolean }) => {
    setFetching(true);

    let offset = FETCH_WORKS_LIMIT * page;

    if (opts?.initialize) {
      offset = 0;
    }

    client
      .getContents('works', {
        limit: FETCH_WORKS_LIMIT,
        offset,
        orders: '-releasedAt',
        filters: `isPickedUp[equals]false${
          opts?.filters ? `[and]${opts?.filters}` : ''
        }`,
      })
      .then((res) => {
        setWorks(sortedWorks(opts?.initialize ? res : [..._works, ...res]));
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
      getWorks({
        filters: selectedTag === 'all' ? '' : `tags[contains]${selectedTag}`,
      });
    }
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
      filters: id === 'all' ? '' : `tags[contains]${id}`,
      initialize: true,
    });
    setPage(0);
    setSelectedTag(id);
  };

  return (
    <>
      <WorkModal
        isOpen={isOpen}
        handleClose={() => handleClose()}
        work={targetWork}
        onClickTag={(id) => filterTags(id)}
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
        {page > 0 && (
          <>
            {[...filteredPickupWorks, ..._works].length > 0 ? (
              <WorkList>
                {[...filteredPickupWorks, ..._works].map((w) => (
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
          </>
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
