const Private = ({ loggedInUser, logout }) => {
  return (
    <div>
      <h1>Szia, {loggedInUser}!</h1>
      <button onClick={logout}>Kijelentkezés</button>
    </div>
  );
};

export default Private;
