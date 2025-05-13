import { useState } from 'react';
import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { PLACEHOLDERS } from '@pages/signUp/constants/placeholder';

const PasswordInputStep = ({
  value,
  onNext,
}: {
  value: string;
  onNext: (password: string) => void;
}) => {
  const [input, setInput] = useState(value);
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError('');
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
    setError('');
  };

  const handleNext = () => {
    if (input !== checkPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    onNext(input);
  };

  return (
    <FormSection>
      <Input
        id='password'
        placeholder={PLACEHOLDERS.password}
        type='text'
        value={input}
        onChange={handleChange}
      />
      <Input
        id='checkpassword'
        placeholder={PLACEHOLDERS.checkPassword}
        type='text'
        value={checkPassword}
        onChange={handlePwdChange}
      />

      <Button type='button' disabled={input.trim() === ''} onClick={handleNext}>
        다음
      </Button>
      {error && <p>{error}</p>}
    </FormSection>
  );
};

export default PasswordInputStep;
