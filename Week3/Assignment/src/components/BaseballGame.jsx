import Input from "./Input";
import List from "./List";
import { useState } from "react";
import { useBaseballGame } from "../hooks/useBaseballGame";

const BaseballGame = () => {
  const [userInput, setUserInput] = useState("");
  const { message, guesses, onGuess } = useBaseballGame();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onGuess(userInput);
      setUserInput("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Input
        type="text"
        value={userInput}
        placeholder="3자리 숫자를 입력해주세요"
        maxLength={3}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p className="message">{message}</p>
      <ul className="flex flex-col gap-2">
        {guesses.map((item, idx) => (
          <List key={idx} className="w-100">
            {item.value} - {item.strike}S {item.ball}B
          </List>
        ))}
      </ul>
    </div>
  );
};

export default BaseballGame;
