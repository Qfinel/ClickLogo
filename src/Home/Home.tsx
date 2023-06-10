import styles from './Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic from '../assets/Man.jpg'


const Home = () => {

	return (

			<section className={styles.Section}>
			<section className={styles.TextSection}>
				<h1>Bringing <span style={{color: '#e43256'}}>brands</span> to life</h1>
				<p>ClickLogo is an award-winning logo 
				design company specializing in logo design, 
				branding and marketing. We combine creativity, 
				strategy, and design to deliver you a 
				winning logo that reflects your vision.</p>
				<button className={styles.ContactBtn}>
					Contact Us
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</section>
					<img src={pic} className={styles.pic} alt=""/>
			</section>

	);
}

export default Home;