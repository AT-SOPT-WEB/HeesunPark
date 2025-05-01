import { useState, useEffect } from "react";
import {
  makeAnswer,
  calcScore,
  isThreeDigit,
  hasDuplicate,
} from "../utils/baseballUtils";
import { setItem, getItem, clearStorage } from "../utils/storageUtils";
import { BASEBALL_KEY } from "../constant/storageKey";
export const useBaseballGame = () => {
  const [answer, setAnswer] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedData = getItem(BASEBALL_KEY);
    if (savedData) {
      setAnswer(savedData.answer);
      setGuesses(savedData.guesses);
    } else {
      const newAnswer = makeAnswer();
      setAnswer(newAnswer);
      setItem(BASEBALL_KEY, { answer: newAnswer, guesses: [] });
    }
  }, []);

  const resetGame = () => {
    setGuesses([]);
    setMessage("");
    setAnswer("");
    clearStorage(BASEBALL_KEY);
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

    const { strike, ball } = calcScore(answer.split(""), userInput.split(""));

    if (strike === 3) {
      setMessage("정답입니다! 🎉🥳 3초 뒤에 게임을 재시작 합니다.");
      setTimeout(resetGame, 3000);
    } else {
      const newGuesses = [...guesses, { value: userInput, strike, ball }];
      setMessage(`${strike}스트라이크 ${ball}볼`);
      setGuesses(newGuesses);
      setItem(BASEBALL_KEY, { answer, guesses: newGuesses });
    }
  };
  return { message, guesses, onGuess };
};
