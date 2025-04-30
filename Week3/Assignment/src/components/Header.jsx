import Button from "./Button";
import { useState } from "react";
const Header = () => {
  const [selected, setSelected] = useState("github");

  return (
    <div className="flex h-24 flex-col items-center justify-center gap-2 bg-primary">
      <h1 className="text-title-1 text-white">⚾ 숫자야구 & 깃허브 검색 🔍</h1>
      <div className="flex gap-2">
        <Button
          selected={selected === "github"}
          onClick={() => setSelected("github")}
        >
          깃허브 검색 🔍
        </Button>
        <Button
          selected={selected === "baseball"}
          onClick={() => setSelected("baseball")}
        >
          숫자야구 ⚾
        </Button>
      </div>
    </div>
  );
};

export default Header;
