import "./Private.css";
import styles from "./Private.module.css";

console.log({ styles });

const Private = ({ loggedInUser, logout }) => {
  return (
    <div className={styles.root}>
      <h1
        className={styles.header}
        style={{ color: "#f00", backgroundColor: "blue" }}
      >
        Szia, {loggedInUser}!
      </h1>
      <button className="button" onClick={logout}>
        Kijelentkezés
      </button>
    </div>
  );
};

export default Private;
