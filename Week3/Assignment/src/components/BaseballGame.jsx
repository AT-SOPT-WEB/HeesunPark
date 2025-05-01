import Input from "./Input";
import { useState } from "react";
import List from "./List";
const BaseballGame = () => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key = "Enter")) {
      console.log(e.target.value);
      setValue("");
    }
  };

  const handleNumberChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Input
        type="text"
        placeholder="3자리 숫자를 입력해주세요"
        value={value}
        onChange={handleNumberChange}
        onKeyDown={handleKeyDown}
      />
      <p className="message">2 스트라이크 0 볼</p>
      <ul>
        <List />
      </ul>
    </div>
  );
};

export default BaseballGame;
