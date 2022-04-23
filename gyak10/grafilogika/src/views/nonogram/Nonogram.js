import styles from "./Nonogram.module.css";

export const Nonogram = () => {
  const upperNumbersDOM = (
    <table className={styles.upperNumbers}>
      <tbody>
        <tr>
          <td>
            <span>1</span>
            <span>2</span>
          </td>
          <td>
            <span>1</span>
          </td>
          <td>
            <span>1</span>
          </td>
        </tr>
      </tbody>
    </table>
  );

  const leftNumbersDOM = (
    <table className={styles.leftNumbers}>
      <tbody>
        <tr>
          <td>
            <span>1</span>
            <span>1</span>
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>
            <span>1</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>
      </tbody>
    </table>
  );

  const tableDOM = (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.white}></td>
          <td className={styles.gray}></td>
          <td className={styles.black}></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <table className={styles.root}>
      <tbody>
        <tr>
          <td></td>
          <td>{upperNumbersDOM}</td>
        </tr>
        <tr>
          <td>{leftNumbersDOM}</td>
          <td>{tableDOM}</td>
        </tr>
      </tbody>
    </table>
  );
};
