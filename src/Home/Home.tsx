import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic from '../assets/Man.jpg'

const Home = () => {
	return (
		<div className={styles.HomeCont}>
			<Header />
			<section className={styles.Section}>
			<section className={styles.TextSection}>
				<h1>Bringing <span style={{color: '#e43256'}}>brands</span> to life</h1>
				<p>Clicklogo is an award-winning logo 
				design company specializing in logo design, 
				branding and marketing. We combine creativity, 
				strategy, and design to deliver you a 
				winning logo that reflects your vision.</p>
				<Link to="/contact-us" className={styles.ContactBtn}>
					Contact Us
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</section>
					<img src={pic} className={styles.pic} alt=""/>
			</section>
			<Footer />
		</div>
	);
}

export default Home;