import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react';

const WorkModal = dynamic(() => import('@/components/layouts/Modal/Work'), {
  ssr: false,
});
import { Work } from '@/lib/microcms/model';

import {
  ContentList,
  ImageWrapper,
  Item,
  Title,
  WorkAbout,
  Wrapper,
} from './style';

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

  return (
    <>
      <WorkModal
        isOpen={isOpen}
        handleClose={() => handleClose()}
        work={targetWork}
      />
      <Wrapper>
        <h1>WORKS</h1>
        <ContentList>
          {works.map((work) => (
            <Item key={work.id}>
              <ImageWrapper
                onClick={() => {
                  setIsOpen(true);
                  setTargetWork(work);
                }}
              >
                <Image
                  src={work.image.url}
                  alt={work.title}
                  width={320}
                  height={320 * 0.5625}
                  objectFit='cover'
                />
                <WorkAbout>
                  <Title>{work.title}</Title>
                </WorkAbout>
              </ImageWrapper>
            </Item>
          ))}
        </ContentList>
      </Wrapper>
    </>
  );
};

export default WorksTemplate;
