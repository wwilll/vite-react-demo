import styles from './index.module.less';
import LoginForm from './loginform';

function Login() {
  return (
    <div className={styles.login}>
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
