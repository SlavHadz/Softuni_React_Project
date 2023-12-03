import styles from './Footer.module.css';

export default function Footer() {
    return (
    <footer className={styles.footer}>
        <h3 className={styles['footer__text-logo']}>FootBase</h3>
        
        <div className={styles.socials}>
            <p>Follow us on</p>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
        </div>
    </footer>
    );
}