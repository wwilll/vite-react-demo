import { useState } from 'react';
import { useModel } from '@/model/plugin-model/useModel';

function TestB() {
  const [count, setCount] = useState(0);
  const { mount, setMount } = useModel('useGlobalModel');

  return <div> TestB组件显示model：{mount}</div>;
}

export default TestB;
