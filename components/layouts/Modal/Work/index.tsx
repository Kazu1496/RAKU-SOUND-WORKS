import Image from 'next/image';
import React from 'react';

import { Work } from '@/lib/microcms/model';

import BaseModal, { ModalBasicProps } from '../Base';
import { Description, Info, Tag, TagList, Title, Wrapper } from './style';

interface Props extends ModalBasicProps {
  work: Work | null;
}

const WorkModalContent: React.FC<Props> = ({ work }) => {
  if (work === null) {
    return <></>;
  }

  return (
    <Wrapper>
      <Image
        src={work.image.url}
        alt={work.title}
        width={460}
        height={460 * 0.5625}
        layout='responsive'
      />
      <Info>
        <Title>{work.title}</Title>
        <Description>{work.description}</Description>
        <TagList>
          {work.tags.map((tag, i) => (
            <Tag key={`${tag.name}-${i}`}>{tag.name}</Tag>
          ))}
        </TagList>
      </Info>
    </Wrapper>
  );
};

const WorkModal: React.VFC<Props> = (props) => {
  const { isOpen, handleClose } = props;

  return (
    <BaseModal isOpen={isOpen} handleClose={() => handleClose()}>
      <WorkModalContent {...props} />
    </BaseModal>
  );
};

export default WorkModal;
