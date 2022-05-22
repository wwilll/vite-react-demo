import logo from '@/assets/imgs/logo.svg';
import styles from './index.module.less';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.home}>
      <img className="App-logo" src={logo} alt="" />
      <Link to={`${__APP_INFO__.basePath}login`}>表单页</Link>
    </div>
  );
}

export default Home;
