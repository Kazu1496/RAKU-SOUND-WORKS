import { useRef } from 'react';

import { useScript } from '@/hooks/useScript';

const TwitterTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScript('https://platform.twitter.com/widgets.js', ref);

  return (
    <div ref={ref}>
      <a
        className='twitter-timeline'
        data-width='300'
        data-height='500'
        href='https://twitter.com/raku_guitar?ref_src=twsrc%5Etfw'
      />
    </div>
  );
};
export default TwitterTimeline;
