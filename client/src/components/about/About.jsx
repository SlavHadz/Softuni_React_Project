import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.about__container}>
            <div className={styles.about__modal}>
                <section className={styles.about__heading}>
                <h1>About Us</h1>
                </section>

                <section>
                    <h2>Our Story</h2>
                    <p>Footbase is at the forefront of the football data market, developing innovative solutions for an exciting range of clients. Founded in 2023, and based in Sofia, our team has already assisted in launching an international brand which serves tens of thousands of users all across the globe. Our team is working on cutting-edge software which will break the sports data through the big time.</p>
                </section>

                <section>
                    <h2>Our Mission</h2>
                    <p>At Footbase, our mission is to provide high-quality products/services that meet the needs
                        and expectations of our customers. </p>
                </section>

                <section>
                    <p>Contact us at: <a href="marketing@footbase.com">marketing@footbase.com</a></p>
                </section>
            </div>
        </div>
    );
}