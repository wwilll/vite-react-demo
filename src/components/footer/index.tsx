import { useEffect, useState } from 'react';
import { Badge, TabBar } from 'antd-mobile';
import styles from './index.module.less';

import { AppOutline, UserOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
import { useModel } from '@/model/plugin-model/useModel';

const tabs = [
  {
    key: `${__APP_INFO__.basePath}home/main`,
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: `${__APP_INFO__.basePath}home/test`,
    title: '个人中心',
    icon: <UserOutline />,
  },
];

const Footer = () => {
  const { pageInfo } = useModel('useGlobalModel');
  const [activeKey, setActiveKey] = useState('');
  const navigate = useNavigate();

  const menus = pageInfo?.menus;
  useEffect(() => {
    const pathList = menus?.map((i) => i.key);
    let targetKey = '';
    for (let i of tabs) {
      if (pathList?.includes(i.key)) {
        targetKey = i.key;
        break;
      }
    }
    setActiveKey(targetKey);
  }, [menus]);

  const onChange = (key: string) => {
    if (key === activeKey) return;
    navigate(key, { replace: true });
  };

  return (
    <TabBar safeArea className={styles.footer} activeKey={activeKey} onChange={onChange}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Footer;
