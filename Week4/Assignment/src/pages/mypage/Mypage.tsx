import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { useState } from 'react';
import * as styles from '@pages/mypage/Mypage.css';
const Mypage = () => {
  const [nickname, setNickname] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Mypage;
