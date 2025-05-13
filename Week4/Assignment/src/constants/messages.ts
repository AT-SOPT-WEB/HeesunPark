export const ERROR_MESSAGE = {
  DEFAULT: '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  INVALID_REQUEST: '잘못된 요청입니다. 요청 형식을 확인해주세요.',
  NO_TOKEN: '로그인 정보가 없습니다. 다시 로그인해주세요.',
  INVALID_TOKEN: '유효하지 않은 토큰입니다. 다시 로그인해주세요.',
  INVALID_PATH: '잘못된 경로입니다. 다시 시도해주세요.',
  DUPLICATED_USERNAME:
    '이미 사용 중인 아이디입니다. 다른 아이디를 선택해주세요.',
};

export const SUCCESS_MESSAGE = {
  SIGNUP_SUCCESS: (nickname: string) =>
    `${nickname}님, 환영합니다! 회원가입이 성공적으로 완료되었습니다.`,
  LOGIN_SUCCESS: '로그인에 성공했습니다. 반갑습니다!',
  DATA_FETCH_SUCCESS: '데이터를 성공적으로 불러왔습니다.',
};
