import { useState } from "react";

const UsernameInput = ({ onJoin }) => {
  const [username, setUsername] = useState("");

  const handleJoin = () => {
    onJoin(username);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
};

export default UsernameInput;
