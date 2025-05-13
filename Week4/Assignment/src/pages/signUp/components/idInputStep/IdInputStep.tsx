import { useState } from 'react';
import FormSection from '@components/formSection/FormSection';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { PLACEHOLDERS } from '@pages/signUp/constants/placeholder';

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
    </FormSection>
  );
};

export default IdInputStep;
