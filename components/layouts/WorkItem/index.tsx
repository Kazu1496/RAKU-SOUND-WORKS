import Image from 'next/image';

import { Work } from '@/lib/microcms/model';

import { Title, WorkAbout, Wrapper } from './style';

interface Props {
  work: Work;
  onClick: () => void;
}

const WorkItem: React.FC<Props> = ({ work, onClick }) => {
  return (
    <Wrapper onClick={() => onClick()}>
      <Image
        src={`${work.image.url}?w=400&h=${400 * 0.5625}&dpr=2`}
        alt={work.title}
        width={400}
        height={400 * 0.5625}
        objectFit='cover'
      />
      <WorkAbout>
        <Title>
          {work.title}
          <span>{work.artistName}</span>
        </Title>
      </WorkAbout>
    </Wrapper>
  );
};

export default WorkItem;
