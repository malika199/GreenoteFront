import styles from "./MainLayout.module.scss";

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
              
            </header>
            <main>
                    {children}
            </main>
            <footer>
            </footer>
        </>
    );
}

export default Mainlayout;
