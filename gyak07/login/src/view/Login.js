import { useEffect, useRef } from "react";

const Login = ({ login }) => {
  const userRef = useRef();
  const pwdRef = useRef();

  const handleSubmit = (event) => {
    console.log(userRef, pwdRef);
    event.preventDefault();

    if (userRef.current.value !== "user1" || pwdRef.current.value !== "pwd1") {
      alert("Hibás jelszó vagy felhasználónév!");
      return;
    }

    login(userRef.current.value);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">Felhasználónév:</label>
      <input ref={userRef} type="text" name="usr" id="usr" />
      <br />
      <label htmlFor="pwd">Jelszó:</label>
      <input ref={pwdRef} type="password" name="pwd" id="pwd" />
      <br />
      <button type="submit">Bejelentkezés</button>
    </form>
  );
};

export default Login;
