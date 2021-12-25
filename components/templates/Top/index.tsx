import Image from 'next/image';

import { Wrapper } from './style';

const TopTemplate: React.VFC = () => {
  return (
    <Wrapper>
      <Image
        src='/Logo_HP_Green.png'
        width={450}
        height={450}
        quality={100}
        objectFit='contain'
        alt='Raku Sound Works'
      />
    </Wrapper>
  );
};

export default TopTemplate;
