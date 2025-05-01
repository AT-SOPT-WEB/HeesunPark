import "./styles/index.css";
import Header from "./components/Header";
import { useState } from "react";
import GitHubUserSearch from "./components/GitHubUserSearch";
import BaseballGame from "./components/BaseballGame";
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
