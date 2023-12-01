import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext.jsx';

export default function Header() {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <img src='./img/Logo.png' />
            </div>
            <nav className={styles.nav}>
                <ul className={styles['nav-list']}>
                    <li className={styles['nav-item']}>
                        <Link to={'/'} className={styles['nav-link']}>Home</Link>                       
                    </li>
                    <li className={styles['nav-item']}>
                        <Link to={'/teams'} className={styles['nav-link']}>Teams</Link>                        
                    </li>
                    <li className={styles['nav-item']}>                        
                        <Link to={'/about'} className={styles['nav-link']}>About</Link>
                    </li>
                    {
                        isAuthenticated &&
                        (
                        <>
                            <li className={styles['nav-item']}>                        
                                <Link to={'/teams/create'} className={styles['nav-link']}>Create Team</Link>
                            </li>
                            <li className={styles['nav-item']}>               
                                <Link to={'/logout'} className={styles['nav-link']}>Logout</Link>
                            </li>
                        </>
                        )
                    }
                    {
                        !isAuthenticated &&
                        (
                        <>
                            <li className={styles['nav-item']}>                        
                                <Link to={'/register'} className={styles['nav-link']}>Register</Link>
                            </li>
                            <li className={styles['nav-item']}>                        
                                <Link to={'/login'} className={styles['nav-link']}>Login</Link>
                            </li>
                        </>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}