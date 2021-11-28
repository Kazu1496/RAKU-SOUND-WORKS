import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import { Work } from '@/lib/microcms/model';

import BaseModal, { ModalBasicProps } from '../Base';
import { ReleaseDate, SubInfo, Tag, TagList, Title, Wrapper } from './style';
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
        src={`${work.image.url}?w=700&h=${700 * 0.5625}&dpr=2`}
        alt={work.title}
        width={700}
        height={700 * 0.5625}
        layout='responsive'
      />
      <Title>
        {work.title}
        <span>{work.artistName}</span>
      </Title>
      <SubInfo>
        <TagList>
          {work.tags.map((tag, i) => (
            <Tag key={`${tag.name}-${i}`}>{tag.name}</Tag>
          ))}
        </TagList>
        <ReleaseDate>{dayjs(work.releasedAt).format('YYYY-MM-DD')}</ReleaseDate>
      </SubInfo>
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
