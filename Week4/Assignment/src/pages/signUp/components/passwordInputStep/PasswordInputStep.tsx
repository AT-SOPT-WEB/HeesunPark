import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { useState } from 'react';

const PasswordInputStep = () => {
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <FormSection title='회원가입'>
      <Input
        id='password'
        placeholder='비밀번호를 입력해주세요'
        type='password'
        value={password}
        onChange={handleChange}
      />
      <Button type='button' disabled={password.trim() === ''}>
        다음
      </Button>
    </FormSection>
  );
};

export default PasswordInputStep;
