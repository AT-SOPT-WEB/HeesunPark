import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { useState } from 'react';
import FormSection from '@components/formSection/FormSection';

const Mypage = () => {
  const [nickname, setNickname] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <FormSection title='내 정보 수정하기'>
      <Input
        label='새 닉네임'
        id='nickname'
        type='text'
        placeholder='새 닉네임을 입력해주세요'
        value={nickname}
        onChange={handleChange}
      />
      <Button type='submit' disabled={nickname.trim() === ''}>
        저장
      </Button>
    </FormSection>
  );
};

export default Mypage;
