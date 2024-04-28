import { useState } from "react";

const ChatRoom = ({ username, handleLeave }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, timestamp, username },
    ]);
    setMessage("");
  };

  return (
    <>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <span>
                [{message.timestamp}] {message.username}:{" "}
              </span>
              <span>{message.text}</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button onClick={() => handleSend(message)}>Send</button>
      </div>
      <div>
        <button onClick={handleLeave}>Leave</button>
      </div>
    </>
  );
};

export default ChatRoom;
