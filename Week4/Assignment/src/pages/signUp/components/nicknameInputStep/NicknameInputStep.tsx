import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { useState } from 'react';

const NicknameInputStep = () => {
  const [nickname, setNickname] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <FormSection title='회원가입'>
      <Input
        id='nickname'
        placeholder='닉네임을 입력해주세요'
        type='nickname'
        value={nickname}
        onChange={handleChange}
      />
      <Button type='button' disabled={nickname.trim() === ''}>
        다음
      </Button>
    </FormSection>
  );
};

export default NicknameInputStep;
