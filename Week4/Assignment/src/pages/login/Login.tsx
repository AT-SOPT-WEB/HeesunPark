import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import * as styles from '@pages/login/Login.css';
import { useNavigate } from 'react-router';
import { ROUTES_CONFIG } from '@router/routesConfig';
const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate(ROUTES_CONFIG.signup.path);
  };
  return (
    <div className={styles.container}>
      <FormSection title='로그인'>
        <Input type='text' placeholder='아이디' id='id' />
        <Input type='password' placeholder='비밀번호' id='password' />
        <Button type='submit'>로그인</Button>
      </FormSection>
      <p className={styles.signup} onClick={handleSignUpClick}>
        회원가입
      </p>
    </div>
  );
};

export default Login;
