import { useModel } from '@/model/plugin-model/useModel';
import { goBack } from '@/utils';
import { NavBar } from 'antd-mobile';

import styles from './index.module.less';

const Header = () => {
  const { pageInfo } = useModel('useGlobalModel');

  return (
    <NavBar className={styles.header} backArrow={!!pageInfo?.menu.back} onBack={goBack}>
      {pageInfo?.menu?.title || ''}
    </NavBar>
  );
};

export default Header;
