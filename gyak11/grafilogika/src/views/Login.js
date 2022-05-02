import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Login = () => {
  const emailRef = useRef();

  const [values, setValues] = useState({ email: "", pwd: "" });
  const { email, pwd } = values;
  const handleChange = (event) =>
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    console.log("login");
  };

  const handleRegister = () => {
    console.log("register");
  };

  return (
    <form>
      <TextField
        ref={emailRef}
        id="email"
        name="email"
        label="Email cím"
        variant="outlined"
        value={email}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="pwd"
        name="pwd"
        label="Jelszó"
        variant="outlined"
        value={pwd}
        onChange={handleChange}
        type="password"
      />
      <br />
      <Button onClick={handleLogin}>Bejelentkezés</Button>
      <Button variant="contained" onClick={handleRegister}>
        Regisztráció
      </Button>
    </form>
  );
};
