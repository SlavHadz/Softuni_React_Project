import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext.jsx';

export default function Header() {
    const {isAuthenticated, username} = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div>
                <h3 className={styles.text__logo}>FootBase</h3>
                <Link className={styles.nav__link} to={'/'}>Home</Link>
                <Link className={styles.nav__link} to={'/teams'}>Teams</Link>
                <Link className={styles.nav__link} to={'/about'}>About</Link>
                {
                    isAuthenticated &&
                    <Link className={styles.nav__link} as={Link} to={'/teams/create'}>Create Team</Link>
                }
            </div>
            <div>
                {
                    isAuthenticated &&
                    (
                    <>
                        <Link className={styles.nav__link} as={Link} to={'/logout'}>Logout</Link>
                        <p className={styles.nav__text}>Hello, {username}</p>
                    </>
                    )
                }
                {
                    !isAuthenticated &&
                    (
                    <>
                        <Link className={styles.nav__link} as={Link} to={'/register'}>Register</Link>
                        <Link className={styles.nav__link} as={Link} to={'/login'}>Login</Link>
                    </>
                    )
                }
            </div>
            {/* <Navbar expand={true} variant="dark" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home">FootBase</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/teams'}>Teams</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    {
                        isAuthenticated &&
                        (
                        <>
                            <Nav.Link as={Link} to={'/teams/create'}>Create Team</Nav.Link>
                            <Nav.Link as={Link} to={'/logout'}>Logout</Nav.Link>
                            <Navbar.Text>Hello, {username}</Navbar.Text>
                        </>
                        )
                    }
                    {
                        !isAuthenticated &&
                        (
                        <>
                            <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        </>
                        )
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}
        </header>
    );
}