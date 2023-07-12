import styles from './services.module.css'

const Services = () => {

	return (
		<section className={`${styles.ServiceContainer} section__padding`} id="services">
			<h1>Wide <span style={{color: '#e43256'}}>variety</span> of services</h1>
			<div>
				<a href="#pricing" className={`${styles.ServiceCard} ${styles.Wordmark}`}><p>Wordmarks</p></a>
				<a href="#pricing" className={`${styles.ServiceCard} ${styles.Letterform}`}><p>Letterforms</p></a>
				<a href="#pricing" className={`${styles.ServiceCard} ${styles.Lettermark}`}><p>Lettermarks</p></a>
				<a href="#pricing" className={`${styles.ServiceCard} ${styles.LogoSymb}`}><p>Logo symbols</p></a>
				<a href="#pricing" className={`${styles.ServiceCard} ${styles.AbstractLogo}`}><p>Abstract logo</p></a>
				<a href="#pricing" className={`${styles.ServiceCard} ${styles.Mascot}`}><p>Mascots</p></a>
			</div>
		</section>
	);
}

export default Services;