import { useState } from 'react';

export default function useGlobalModel() {
  const [mount, setMount] = useState(0);
  const [name, setName] = useState(0);
  const [name2, setName2] = useState(0);
  const [pageInfo, setPageInfo] = useState<{
    menu: IRouteMenu;
    menus: IRouteMenu[];
  }>();

  return {
    mount,
    setMount,
    name,
    setName,
    name2,
    setName2,
    pageInfo,
    setPageInfo,
  };
}
