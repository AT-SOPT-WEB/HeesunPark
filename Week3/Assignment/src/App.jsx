import "./styles/index.css";
import Header from "./shared/Header";
import { useState } from "react";
import BaseballGame from "./components/baseballGame/BaseballGame";
import GitHubUserSearch from "./components/GithubUserSearch/GitHubUserSearch";
function App() {
  const [selected, setSelected] = useState("github");

  const handleTabChange = (tab) => {
    setSelected(tab);
  };
  return (
    <>
      <Header selected={selected} onTabChange={handleTabChange} />
      <main className="flex flex-col items-center p-4">
        {selected === "github" ? <GitHubUserSearch /> : <BaseballGame />}
      </main>
    </>
  );
}

export default App;
