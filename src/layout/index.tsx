import { useModel } from '@/model/plugin-model/useModel';
import { findPathListByPathName } from '@/router/maproutes';
import { useEffect } from 'react';
import { NavigateFunction, Outlet, useLocation, useNavigate } from 'react-router-dom';

let firstPath: string | null = null;
let currNavigate: NavigateFunction | null = null;
export const getNavigate = () => currNavigate;

const Layout = ({ menuInfo }: { menuInfo: IRouteMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setPageInfo } = useModel('useGlobalModel');

  // console.log('mainLayout=============>', __APP_ENV__, menuInfo, location.pathname);

  const initPath = () => {
    firstPath = firstPath == null ? location.pathname : firstPath;
    console.log('====>', location, findPathListByPathName(location.pathname), 'firstpath======>', firstPath);
    const targets = findPathListByPathName(location.pathname);
    const target = targets?.slice(-1)[0];
    setPageInfo({
      menu: target,
      menus: targets,
    });
    if (target?.redirect) {
      navigate(target.redirect);
    }
  };
  useEffect(() => {
    currNavigate = navigate;
    // window.onpopstate = function (event) {
    //   console.log(event, event.state);
    // };
    // window.onbeforeunload = function (e) {};
    return () => {
      currNavigate = null;
    };
  }, []);

  useEffect(() => {
    initPath();
  }, [location.pathname]);

  return <Outlet />;
};

export default Layout;
