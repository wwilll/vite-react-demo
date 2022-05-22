import styles from './index.module.less';
import { Link } from 'react-router-dom';
import TestA from '@/components/Test';
import TestB from '@/components/TestB';
import TestC from '@/components/TestC';

function Test() {
  return (
    <div className={styles.home}>
      <TestA></TestA>
      <TestB></TestB>
      <TestC></TestC>
      <Link to={`${__APP_INFO__.basePath}login`}>进入登录页</Link>
    </div>
  );
}

export default Test;
