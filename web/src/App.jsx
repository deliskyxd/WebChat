import { useEffect, useState } from "react";
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
    <>
      <p>P2P Chat</p>
      <p>Currently online users: {onlineUsers.length}</p>
      <div>
        {username ? (
          <ChatRoom username={username} handleLeave={handleLeave} />
        ) : (
          <UsernameInput onJoin={handleJoin} />
        )}
      </div>
      <div>
        <ul>
          {onlineUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
