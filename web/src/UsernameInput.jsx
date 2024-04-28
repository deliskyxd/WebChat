import { useState } from "react";

const UsernameInput = ({ onJoin }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === "") {
      setError("Username cannot be empty");
    } else {
      setError(null);
      onJoin(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="submit">Join</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UsernameInput;
