import * as styles from '@components/header/Header.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.nav}>
          <li>🥳 내 정보</li>
          <li>🔍 SOPT 회원 조회하기</li>
          <li>🤚 로그아웃</li>
        </ul>
      </nav>
      <p>닉네임</p>
    </header>
  );
};

export default Header;
