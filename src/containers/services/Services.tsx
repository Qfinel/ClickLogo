import styles from './services.module.css'

const Services = () => {

	const scrollToPay = () => {
		window.scrollTo({
			top: 1500, // change to payment module
			behavior: 'smooth',
		});
	}

	return (
		<section className={styles.ServiceSection}>
			<h1>Wide <span style={{color: '#e43256'}}>variety</span> of services</h1>
			<section>
				<div className={`${styles.ServiceCard} ${styles.Wordmark}`} onClick={scrollToPay}><p>Wordmarks</p></div>
				<div className={`${styles.ServiceCard} ${styles.Letterform}`} onClick={scrollToPay}><p>Letterforms</p></div>
				<div className={`${styles.ServiceCard} ${styles.Lettermark}`} onClick={scrollToPay}><p>Lettermarks</p></div>
				<div className={`${styles.ServiceCard} ${styles.LogoSymb}`} onClick={scrollToPay}><p>Logo symbols</p></div>
				<div className={`${styles.ServiceCard} ${styles.AbstractLogo}`} onClick={scrollToPay}><p>Abstract logo</p></div>
				<div className={`${styles.ServiceCard} ${styles.Mascot}`} onClick={scrollToPay}><p>Mascots</p></div>
			</section>
		</section>
	);
}

export default Services;