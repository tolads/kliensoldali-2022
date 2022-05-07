import { useDispatch, useSelector } from "react-redux";

import { logout, selectCurrentUser } from "../state/authSlice";

export const User = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectCurrentUser);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <br />
      {`Bejelentkezve, mint ${email} `}
      <button onClick={handleClick}>Kijelentkezés</button>
    </div>
  );
};
