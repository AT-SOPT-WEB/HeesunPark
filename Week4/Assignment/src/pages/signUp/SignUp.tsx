import { useState } from 'react';
import { useNavigate } from 'react-router';
import FormSection from '@components/formSection/FormSection';
import IdInputStep from '@pages/signUp/components/idInputStep/IdInputStep';
import PasswordInputStep from '@pages/signUp/components/passwordInputStep/PasswordInputStep';
import NicknameInputStep from '@pages/signUp/components/nicknameInputStep/NicknameInputStep';
import { postSignUp } from '@api/auth';
import { SUCCESS_MESSAGE } from '@constants/messages';
import { ROUTES_CONFIG } from '@router/routesConfig';

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

  const handleSignUp = async (nickname: string) => {
    try {
      const data = await postSignUp({
        loginId: formData.id,
        password: formData.password,
        nickname,
      });

      localStorage.setItem('userId', data.loginId);

      alert(SUCCESS_MESSAGE.SIGNUP_SUCCESS);

      navigate(ROUTES_CONFIG.login.path);
    } catch (error) {
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

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
            handleSignUp(nickname);
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
