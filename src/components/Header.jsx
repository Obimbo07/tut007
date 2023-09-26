import styles from '../styles/Header.css';
const Header = () => {
    return (
        <header  className={styles.header}>
            <h1>To-do's</h1>
            <p>Items will persist in browser local storage.</p>
        </header>
    )
}

export default Header;