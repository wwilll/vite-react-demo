import { useModel } from '@/model/plugin-model/useModel';

function Test() {
  const { mount, setMount } = useModel('useGlobalModel');

  return (
    <div>
      <button
        onClick={() => {
          setMount((n) => n + 1);
        }}
      >
        测试点击，刷新model{mount}
      </button>
    </div>
  );
}

export default Test;
