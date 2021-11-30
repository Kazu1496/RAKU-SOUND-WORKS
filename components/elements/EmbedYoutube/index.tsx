import styled from '@emotion/styled';

import { mq } from '@/theme/mediaQuery';

const Wrapper = styled.div(() =>
  mq({
    width: '100%',
    paddingTop: '56.25%',
    position: 'relative',
  }),
);

const IFrame = styled.iframe(() =>
  mq({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  }),
);

const getYoutubeVideoId = (url: string) => {
  const queryParams = new URLSearchParams(new URL(url).search);
  return queryParams.get('v');
};

interface Props {
  url: string;
}

const EmbedYoutube: React.FC<Props> = ({ url }) => {
  return (
    <Wrapper>
      <IFrame
        src={`https://www.youtube.com/embed/${getYoutubeVideoId(url)}`}
        title='YouTube video player'
        allowFullScreen
      />
    </Wrapper>
  );
};
export default EmbedYoutube;
