import { goBack } from '@/utils';
import { Button, ErrorBlock } from 'antd-mobile';
import { memo } from 'react';
import styles from './index.module.less';

function NotFound() {
  return (
    <div className={styles['not-found']}>
      <ErrorBlock status="empty" />
      <Button block color="primary" onClick={goBack}>
        返回
      </Button>
    </div>
  );
}

export default memo(NotFound);
