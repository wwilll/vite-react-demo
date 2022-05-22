import { getNavigate } from '@/layout';

export const goBack = () => {
  if (history.state?.idx !== 0) {
    getNavigate()?.(-1);
  } else {
    getNavigate()?.(__APP_INFO__.basePath + 'home/main');
  }
};
