import styles from './Page404.module.css';

export default function Page404() {
    return (
        <div className={styles.page__container}>
            <h2 className={styles.page__title}>404</h2>
            <h4>Page doesn&apos;t exist ;(</h4>
        </div>
    );
}