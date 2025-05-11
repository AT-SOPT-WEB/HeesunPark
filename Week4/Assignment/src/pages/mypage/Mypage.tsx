import Input from '@components/input/Input';
const Mypage = () => {
  return (
    <div>
      <Input
        label='새 닉네임'
        id='nickname'
        type='text'
        placeholder='새 닉네임을 입력해주세요'
      />
    </div>
  );
};

export default Mypage;
