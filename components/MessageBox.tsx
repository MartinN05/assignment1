import { useState } from "react";

type MessageBoxProps = {
  message: string;
};

export default function MessageBox({ message }: MessageBoxProps) {
  const [showMessage, setShowMessage] = useState(false);

  function changeMessage() {
    setShowMessage(!showMessage);
  }

  return (
    <div>
      <h2>Message</h2>

      <button onClick={changeMessage}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {showMessage && <p>{message}</p>}
    </div>
  );
}