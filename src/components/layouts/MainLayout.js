import styles from "./MainLayout.module.scss";

const Mainlayout = ({children}) => {
    return (
        <>
            <header>
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
