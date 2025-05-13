import { useState } from 'react';
import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { PLACEHOLDERS } from '@pages/signUp/constants/placeholder';
import { Link } from 'react-router';

const IdInputStep = ({
  value,
  onNext,
}: {
  value: string;
  onNext: (id: string) => void;
}) => {
  const [input, setInput] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <FormSection>
      <Input
        id='id'
        placeholder={PLACEHOLDERS.id}
        type='text'
        value={input}
        onChange={handleChange}
      />
      <Button
        type='button'
        disabled={input.trim() === ''}
        onClick={() => onNext(input)}
      >
        다음
      </Button>
      <div>
        <p>이미 회원이신가요?</p> <Link to='/login'>로그인</Link>
      </div>
    </FormSection>
  );
};

export default IdInputStep;
