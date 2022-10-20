import styles from "./MainLayout.module.scss";

const Mainlayout = ({ children }) => {
  return (
    <>
      <header className={styles.header__main}></header>
      <main>
        <div className={styles.container}>{children}</div>
      </main>
      <footer></footer>
    </>
  );
};

export default Mainlayout;
