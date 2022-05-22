/**
 * 导航路由配置
 */
import React from 'react';

// 路由path（去除尾部斜杠）
const basePath = __APP_INFO__.basePath === '/' ? '/' : __APP_INFO__.basePath.slice(0, -1);

export const originMenus: IRouteMenu[] = [
  {
    path: basePath,
    component: React.lazy(() => import('@/layout')),
    redirect: __APP_INFO__.basePath + 'home/main',
    children: [
      {
        path: 'login',
        component: React.lazy(() => import('@/pages/login')),
      },
      {
        path: 'home',
        title: '首页',
        component: React.lazy(() => import('@/layout/home')),
        children: [
          {
            path: 'main',
            title: '主页',
            component: React.lazy(() => import('@/pages/home')),
          },
          {
            path: 'test',
            back: true,
            title: '测试',
            component: React.lazy(() => import('@/pages/home/test')),
          },
        ],
      },
    ],
  },
];
