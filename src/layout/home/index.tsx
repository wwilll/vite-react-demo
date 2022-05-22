import Footer from '@/components/footer';
import Header from '@/components/header';
import { DotLoading } from 'antd-mobile';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';

function HomeLayout() {
  return (
    <div className={styles.layout}>
      <Suspense fallback={<DotLoading color="primary" />}>
        <Header></Header>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default HomeLayout;
