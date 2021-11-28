import styles from '@/styles/Font.module.css';

import { H1, Wrapper } from './style';

const TopTemplate: React.VFC = () => {
  return (
    <Wrapper>
      <H1 className={styles.headline}>Raku Official Website</H1>
    </Wrapper>
  );
};

export default TopTemplate;
