import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <img src='./img/Logo.png' />
            </div>
            <nav className={styles.nav}>
                <ul className={styles['nav-list']}>
                    <li className={styles['nav-item']}>
                        Home
                    </li>
                    <li className={styles['nav-item']}>
                        Teams
                    </li>
                    <li className={styles['nav-item']}>
                        Create Team
                    </li>
                    <li className={styles['nav-item']}>
                        About
                    </li>
                    <li className={styles['nav-item']}>
                        Register
                    </li>
                    <li className={styles['nav-item']}>
                        Login
                    </li>
                    <li className={styles['nav-item']}>
                        Logout
                    </li>
                </ul>
            </nav>
        </header>
    );
}