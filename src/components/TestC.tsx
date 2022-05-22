import { memo, useState } from 'react';
import { useModel } from '@/model/plugin-model/useModel';

function TestC() {
  const { mount } = useModel('useGlobalModel', (model) => ({
    mount: model.mount,
  }));
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <header>
      <p>TestC</p>
      <p>
        <button type="button" onClick={onClick}>
          count is: {count}
        </button>
        {mount}
      </p>
    </header>
  );
}

export default memo(TestC);
