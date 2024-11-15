import React, { ChangeEvent, useState } from "react";
import { Warning } from "./Warning";


type ITextArea = {
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>
}


const Textarea: React.FC<ITextArea> = ({ text, setText }) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      setWarningMessage("No script tag allowed");
      setShowWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningMessage("No @ symbol allowed");
      setShowWarning(true);
      newText = newText.replace("@", "");
    } else {
      setWarningMessage("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
        onChange={handleChange}
      />
      {showWarning ? <Warning warningMessage={warningMessage} /> : null}
    </div>
  );
}; 

export default Textarea