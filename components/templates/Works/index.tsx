import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

const WorkModal = dynamic(() => import('@/components/layouts/Modal/Work'), {
  ssr: false,
});

import HeadLine from '@/components/elements/HeadLine';
import Spinner from '@/components/elements/Spinner';
import WorkItem from '@/components/layouts/WorkItem';
import { useIntersection } from '@/hooks/useIntersection';
import { client } from '@/lib/microcms';
import { Work } from '@/lib/microcms/model';
import { FETCH_WORKS_LIMIT } from '@/pages/works';

import { List, LoadingWrapper, WorkList, Wrapper } from './style';

interface Props {
  works: Work[];
}

const WorksTemplate: React.VFC<Props> = ({ works }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetWork, setTargetWork] = useState<Work | null>(null);
  const [_works, setWorks] = useState<Work[]>(works);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const intersection = useIntersection(ref);

  const getWorks = () => {
    setFetching(true);

    client
      .getContents('works', {
        limit: FETCH_WORKS_LIMIT,
        offset: FETCH_WORKS_LIMIT * page,
      })
      .then((res) => {
        setWorks(_works.concat(res));
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

  return (
    <>
      <WorkModal
        isOpen={isOpen}
        handleClose={() => handleClose()}
        work={targetWork}
      />
      <Wrapper>
        <HeadLine>WORKS</HeadLine>
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
