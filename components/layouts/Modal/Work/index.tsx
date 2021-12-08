import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import Button from '@/components/elements/Button';
import EmbedYoutube from '@/components/elements/EmbedYoutube';
import { Work } from '@/lib/microcms/model';

import BaseModal, { ModalBasicProps } from '../Base';
import { ReleaseDate, SubInfo, TagList, Title, Wrapper } from './style';
interface Props extends ModalBasicProps {
  work: Work | null;
  onClickTag: (_id: string) => void;
}

const WorkModalContent: React.FC<Props> = ({
  work,
  onClickTag,
  handleClose,
}) => {
  if (work === null) {
    return <></>;
  }

  return (
    <Wrapper>
      {work.youtubeUrl ? (
        <EmbedYoutube url={work.youtubeUrl} />
      ) : (
        <Image
          src={`${work.image.url}?w=700&h=${700 * 0.5625}&dpr=2`}
          alt={work.title}
          width={700}
          height={700 * 0.5625}
          layout='responsive'
        />
      )}
      <Title>
        {work.title}
        <span>{work.artistName}</span>
      </Title>
      <SubInfo>
        <TagList>
          {work.tags.map((tag, i) => (
            <li key={`${tag.name}-${i}`}>
              <Button
                bgColor='primary'
                fontSize='xs'
                spacing='s'
                radius='s'
                onClick={() => {
                  onClickTag(tag.id);
                  handleClose();
                }}
              >
                {tag.name}
              </Button>
            </li>
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
