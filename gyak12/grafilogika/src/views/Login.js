import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {
  useLoginMutation,
  useRegisterMutation,
} from "../state/nonogramApiSlice";

export const Login = () => {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

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
    login({ email, password: pwd })
      .unwrap()
      .then((data) => {
        console.log("Sikeres bejelentkezés");
        console.log(data);
      })
      .catch(() => console.log("Sikertelen bejelentkezés"));
  };

  const handleRegister = () => {
    console.log("register");
    register({ email, password: pwd })
      .unwrap()
      .then((data) => {
        console.log("Sikeres regisztráció");
        console.log(data);
      })
      .catch(() => console.log("Sikertelen regisztráció"));
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
