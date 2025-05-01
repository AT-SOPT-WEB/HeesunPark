/**
 * 랜덤으로 3자리 숫자를 만들어주는 함수
 * @returns 0~9 사이의 숫자로 이루어진 중복 없는 3자리 문자열
 */

export const makeAnswer = () => {
  const answer = [];
  while (answer.length < 3) {
    const rand = Math.floor(Math.random() * 10);
    if (!answer.includes(rand)) {
      answer.push(rand);
    }
  }

  return answer.join("");
};

export const isThreeDigit = (str) => /^\d{3}$/.test(str);
export const hasDuplicate = (str) => new Set(str).size !== str.length;

/**
 * @param {string[]} answerArr  정답 배열, ex) ['1','2','3']
 * @param {string[]} guessArr   입력 배열, ex) ['1','3','2']
 * @returns {{ strike: number, ball: number }}
 */
export const calcScore = (answerArr, guessArr) => {
  let strike = 0;
  let ball = 0;
  guessArr.forEach((num, idx) => {
    if (num === answerArr[idx]) strike += 1;
    else if (answerArr.includes(num)) ball += 1;
  });
  return { strike, ball };
};
