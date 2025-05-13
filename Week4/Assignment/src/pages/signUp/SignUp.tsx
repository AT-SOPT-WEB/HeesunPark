import { useState } from 'react';
import { useNavigate } from 'react-router';
import FormSection from '@components/formSection/FormSection';
import IdInputStep from '@pages/signUp/components/idInputStep/IdInputStep';
import PasswordInputStep from '@pages/signUp/components/passwordInputStep/PasswordInputStep';
import NicknameInputStep from '@pages/signUp/components/nicknameInputStep/NicknameInputStep';

const SignUp = () => {
  const [step, setStep] = useState<
    'idStep' | 'passwordStep' | 'nicknameStep' | 'completeStep'
  >('idStep');

  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const navigate = useNavigate();

  const goToNextStep = () => {
    setStep((prev) => {
      switch (prev) {
        case 'idStep':
          return 'passwordStep';
        case 'passwordStep':
          return 'nicknameStep';
        case 'nicknameStep':
          return 'completeStep';
        default:
          return prev;
      }
    });
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FormSection title='회원가입'>
      {step === 'idStep' && (
        <IdInputStep
          value={formData.id}
          onNext={(id) => {
            updateFormData({ id });
            goToNextStep();
          }}
        />
      )}

      {step === 'passwordStep' && (
        <PasswordInputStep
          value={formData.password}
          onNext={(password) => {
            updateFormData({ password });
            goToNextStep();
          }}
        />
      )}

      {step === 'nicknameStep' && (
        <NicknameInputStep
          value={formData.nickname}
          onNext={(nickname) => {
            updateFormData({ nickname });
            goToNextStep();
          }}
        />
      )}

      {step === 'completeStep' && (
        <div>
          <h2>회원가입 완료</h2>
          <p>{formData.nickname}님, 환영합니다!</p>
        </div>
      )}
    </FormSection>
  );
};

export default SignUp;
