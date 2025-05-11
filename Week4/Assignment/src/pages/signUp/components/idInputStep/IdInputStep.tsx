import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { useState } from 'react';

const IdInputStep = () => {
  const [id, setId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <FormSection title='회원가입'>
      <Input
        id='id'
        placeholder='아이디를 입력해주세요'
        type='text'
        value={id}
        onChange={handleChange}
      />
      <Button type='button' disabled={id.trim() === ''}>
        다음
      </Button>
    </FormSection>
  );
};

export default IdInputStep;
