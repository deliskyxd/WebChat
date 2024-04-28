import { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom.jsx";
import UsernameInput from "./UsernameInput.jsx";

const App = () => {
  const [username, setUsername] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const handleJoin = (username) => {
    setUsername(username);
  };

  // Simulate online users count
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(Math.floor(Math.random() * 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>P2P Chat</p>
      <p>Currently online users: {onlineUsers}</p>
      <div>
        {username ? (
          <ChatRoom username={username} />
        ) : (
          <UsernameInput onJoin={handleJoin} />
        )}
      </div>
    </>
  );
};

export default App;
