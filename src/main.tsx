import React from 'react';
import ReactDOM from 'react-dom/client';
import { rootContainer } from '@/model/plugin-model/runtime';
import Root from '@/router';
import './index.less';

ReactDOM.createRoot(document.getElementById('root')!).render(
  __APP_RUN_AT_STRICT_MODE__ ? <React.StrictMode>{rootContainer(<Root />)}</React.StrictMode> : rootContainer(<Root />),
);
