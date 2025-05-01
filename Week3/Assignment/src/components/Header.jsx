import Button from "./Button";

const Header = ({ selected, onTabChange }) => {
  return (
    <div className="flex h-32 flex-col items-center justify-center gap-2 bg-primary">
      <h1 className="text-title-1 text-white">⚾ 숫자야구 & 깃허브 검색 🔍</h1>
      <div className="flex gap-2">
        <Button
          selected={selected === "github"}
          onClick={() => onTabChange("github")}
        >
          깃허브 검색 🔍
        </Button>
        <Button
          selected={selected === "baseball"}
          onClick={() => onTabChange("baseball")}
        >
          숫자야구 ⚾
        </Button>
      </div>
    </div>
  );
};

export default Header;
