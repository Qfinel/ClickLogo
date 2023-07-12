import styles from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic from '../../assets/Man.jpg'

const Header = () => {
	return (
		<section className={`${styles.Container} section__padding`} id="home">
			<div className={styles.Text}>
				<h1>Bringing <span style={{color: '#e43256'}}>brands</span> to life</h1>
				<p>ClickLogo is a design company 
				specializing in logo design, 
				branding and marketing. We combine creativity, 
				strategy, and design to deliver you a 
				winning logo that reflects your vision. 
				A well-designed logo can help your 
				brand stand out from competitors.</p>
				<a className={styles.ContactBtn} href='#contact'>
					Contact Us
					<FontAwesomeIcon icon={faArrowRight} />
				</a>
			</div>
			<div className={styles.Pic}>
				<img src={pic} alt=""/>		
			</div>
		</section>
	);
}

export default Header;