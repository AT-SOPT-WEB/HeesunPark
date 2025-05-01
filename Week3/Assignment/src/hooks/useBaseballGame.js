import { useState, useEffect } from "react";
import {
  makeAnswer,
  calcScore,
  isThreeDigit,
  hasDuplicate,
} from "../utils/baseballUtils";
import { setItem, getItem } from "../utils/storageUtils";
import { BASEBALL_KEY } from "../constant/storageKey";
import { MAX_ATTEMPTS } from "../constant/maxValue";
export const useBaseballGame = () => {
  const [answer, setAnswer] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");
  const [attempt, setAttempt] = useState(0);

  // 게임 데이터 복구 또는 초기화
  useEffect(() => {
    const savedData = getItem(BASEBALL_KEY);
    if (savedData) {
      setAnswer(savedData.answer);
      setGuesses(savedData.guesses);
      setAttempt(savedData.attempt);
      setMessage(savedData.message || "");
    } else {
      const newAnswer = makeAnswer();
      setAnswer(newAnswer);
      setItem(BASEBALL_KEY, {
        answer: newAnswer,
        guesses: [],
        attempt: 0,
      });
    }
  }, []);

  // 상태 변화 시 저장
  useEffect(() => {
    if (answer) {
      setItem(BASEBALL_KEY, { answer, guesses, attempt, message });
    }
  }, [guesses, answer, attempt, message]);

  const resetGame = () => {
    const newAnswer = makeAnswer();
    setGuesses([]);
    setMessage("");
    setAttempt(0);
    setAnswer(newAnswer);
    setItem(BASEBALL_KEY, {
      answer: newAnswer,
      attempt: 0,
      guesses: [],
      message: "",
    });
  };

  const onGuess = (userInput) => {
    if (!isThreeDigit(userInput)) {
      setMessage("3자리 숫자를 입력해주세요 😀");
      return;
    }

    if (hasDuplicate(userInput)) {
      setMessage("중복되지 않는 세자리 숫자를 입력해주세요 🥹");
      return;
    }

    if (attempt >= MAX_ATTEMPTS) {
      setMessage(
        "시도 횟수가 10번을 넘었습니다 😭 5초 후 게임이 초기화됩니다.",
      );
      setTimeout(resetGame, 5000);
      return;
    }

    const { strike, ball } = calcScore(answer.split(""), userInput.split(""));

    const guessData = { value: userInput, strike, ball };

    if (strike === 3) {
      setMessage("정답입니다! 🎉🥳 3초 뒤에 게임을 재시작 합니다.");
      setGuesses((prev) => [...prev, guessData]);
      setTimeout(resetGame, 3000);
    } else {
      setMessage(`${strike}스트라이크 ${ball}볼`);
      setGuesses((prev) => [...prev, guessData]);
      setAttempt((prev) => prev + 1);
    }
  };
  return { message, guesses, onGuess };
};
