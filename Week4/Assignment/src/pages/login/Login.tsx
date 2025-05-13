import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import * as styles from '@pages/login/Login.css';
import { useNavigate } from 'react-router';
import { ROUTES_CONFIG } from '@router/routesConfig';
import { postLogIn } from '@api/auth';
import type { LoginRequestType } from '@type/authType';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const loginData: LoginRequestType = { loginId, password };
      const { data } = await postLogIn(loginData);

      localStorage.setItem('userId', data.userId);

      navigate(ROUTES_CONFIG.mypage.path);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const handleSignUpClick = () => {
    navigate(ROUTES_CONFIG.signup.path);
  };

  return (
    <div className={styles.container}>
      <FormSection title='로그인'>
        <Input
          type='text'
          placeholder='아이디'
          id='loginId'
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <Input
          type='password'
          placeholder='비밀번호'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='button' onClick={handleLogin}>
          로그인
        </Button>
      </FormSection>
      <p className={styles.signup} onClick={handleSignUpClick}>
        회원가입
      </p>
    </div>
  );
};

export default Login;
