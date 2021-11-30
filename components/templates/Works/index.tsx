import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const WorkModal = dynamic(() => import('@/components/layouts/Modal/Work'), {
  ssr: false,
});
import dayjs from 'dayjs';

import HeadLine from '@/components/elements/HeadLine';
import WorkItem from '@/components/layouts/WorkItem';
import { Work } from '@/lib/microcms/model';

import { List, WorkList, Wrapper } from './style';

interface Props {
  works: Work[];
}

const WorksTemplate: React.VFC<Props> = ({ works }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetWork, setTargetWork] = useState<Work | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setTargetWork(null);
  };

  const handleClick = (work: Work) => {
    setIsOpen(true);
    setTargetWork(work);
  };

  const pickupWorks = works.filter((w) => w.isPickedUp);
  const otherWorks = works
    .filter((w) => !w.isPickedUp)
    .sort((a, b) => dayjs(b.releasedAt).diff(a.releasedAt));

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
          {[...pickupWorks, ...otherWorks].map((w) => (
            <List key={w.id}>
              <WorkItem work={w} onClick={() => handleClick(w)} />
            </List>
          ))}
        </WorkList>
      </Wrapper>
    </>
  );
};

export default WorksTemplate;
