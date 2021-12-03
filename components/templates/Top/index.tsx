import { SITE_NAME } from '@/constant/meta';
import styles from '@/styles/Font.module.css';

import { H1, Wrapper } from './style';

const TopTemplate: React.VFC = () => {
  return (
    <Wrapper>
      <H1 className={styles.headline}>{SITE_NAME}</H1>
    </Wrapper>
  );
};

export default TopTemplate;
