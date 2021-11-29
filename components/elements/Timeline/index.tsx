import Script from 'next/script';

const TwitterTimeline = () => {
  return (
    <>
      <a
        className='twitter-timeline'
        data-width='300'
        data-height='500'
        href='https://twitter.com/raku_guitar?ref_src=twsrc%5Etfw'
      >
        Tweets by raku_guitar
      </a>
      <Script async src='https://platform.twitter.com/widgets.js' />
    </>
  );
};

export default TwitterTimeline;
