import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = ({ login }) => {
  const userRef = useRef();
  const pwdRef = useRef();

  // const [user, setUser] = useState("Tamás");
  // const [pwd, setPwd] = useState("");
  // const handleUsrChange = (event) => setUser(event.target.value);
  // const handlePwdChange = (event) => setPwd(event.target.value);
  // console.log({ user });

  const [values, setValues] = useState({ user: "", pwd: "" });
  const { user, pwd } = values;
  const handleChange = (event) =>
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event) => {
    console.log(userRef, pwdRef);
    event.preventDefault();

    // if (userRef.current.value !== "user1" || pwdRef.current.value !== "pwd1") {
    // if (user !== "user1" || pwd !== "pwd1") {
    if (pwd !== "pwd1") {
      alert("Hibás jelszó vagy felhasználónév!");
      return;
    }

    login(user);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        ref={userRef}
        id="user"
        name="user"
        label="Felhasználónév"
        variant="outlined"
        value={user}
        onChange={handleChange}
      />
      {/* <label htmlFor="user">Felhasználónév:</label>
      <input
        ref={userRef}
        type="text"
        name="user"
        id="user"
        value={user}
        onChange={handleChange}
      /> */}
      <br />
      <TextField
        id="pwd"
        name="pwd"
        label="Jelszó"
        variant="outlined"
        value={pwd}
        onChange={handleChange}
      />
      {/* <label htmlFor="pwd">Jelszó:</label>
      <input
        ref={pwdRef}
        type="password"
        name="pwd"
        id="pwd"
        value={pwd}
        onChange={handleChange}
      /> */}
      <br />
      <Button type="submit">Bejelentkezés</Button>
      {/* <button type="submit">Bejelentkezés</button> */}
    </form>
  );
};

export default Login;
