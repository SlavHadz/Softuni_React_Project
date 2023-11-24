import { Link } from 'react-router-dom';

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
                        <Link to={'/'}>Home</Link>                       
                    </li>
                    <li className={styles['nav-item']}>
                        <Link to={'/teams'}>Teams</Link>                        
                    </li>
                    <li className={styles['nav-item']}>                        
                        <Link to={'/create-team'}>Create Team</Link>
                    </li>
                    <li className={styles['nav-item']}>                        
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className={styles['nav-item']}>                        
                        <Link to={'/register'}>Register</Link>
                    </li>
                    <li className={styles['nav-item']}>                        
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li className={styles['nav-item']}>               
                        <Link to={'/logout'}>Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}