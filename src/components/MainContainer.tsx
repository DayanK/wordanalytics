import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

const MainContainer = () => {
  const [text, setText] = useState<string>("");
  const numberOfWords = text.split(/\s/).filter((word)=> word !== "").length
  const numberOfCharacters = text.length;
  const instagramCharacters = 280 - text.length;
  const facebookCharacters = 2200 - text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
        instagramCharacters={instagramCharacters}
        facebookCharacters={facebookCharacters}
      />
    </main>
  );
}

export default MainContainer;