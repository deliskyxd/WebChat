import { useState } from "react";
import ChatRoom from "./ChatRoom.jsx";
import UsernameInput from "./UsernameInput.jsx";

const App = () => {
  const [username, setUsername] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const handleJoin = (username) => {
    if (username) {
      setUsername(username);
      setOnlineUsers((prevUsers) => [...prevUsers, username]);
    }
  };

  const handleLeave = () => {
    if (username) {
      setUsername(null);
      setOnlineUsers((prevUsers) =>
        prevUsers.filter((user) => user !== username)
      );
    }
  };

  return (
    <div className="main-area">
      <h1>P2P Chat</h1>
      <p>Currently online users: {onlineUsers.length}</p>
      <div className="chat-room">
        {username ? (
          <ChatRoom username={username} handleLeave={handleLeave} />
        ) : (
          <UsernameInput onJoin={handleJoin} />
        )}
      </div>
    </div>
  );
};

export default App;
