import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic from '../assets/Man.jpg'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

	const navigate = useNavigate();

	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		setIsVisible(scrollTop > 100); // Show the button when scrolled 100 pixels down
	};

	const scrollToTop = () => {
		window.scrollTo({
		top: 0,
		behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
		window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
			<section className={styles.ServiceSection}>
				<h1>Wide <span style={{color: '#e43256'}}>variety</span> of services</h1>
				<section>
					<div className={`${styles.ServiceCard} ${styles.Wordmark}`} onClick={() => {navigate('/services')}}><p>Wordmarks</p></div>
					<div className={`${styles.ServiceCard} ${styles.Letterform}`} onClick={() => {navigate('/services')}}><p>Letterforms</p></div>
					<div className={`${styles.ServiceCard} ${styles.Lettermark}`} onClick={() => {navigate('/services')}}><p>Lettermarks</p></div>
					<div className={`${styles.ServiceCard} ${styles.LogoSymb}`} onClick={() => {navigate('/services')}}><p>Logo symbols</p></div>
					<div className={`${styles.ServiceCard} ${styles.AbstractLogo}`} onClick={() => {navigate('/services')}}><p>Abstract logo</p></div>
					<div className={`${styles.ServiceCard} ${styles.Mascot}`} onClick={() => {navigate('/services')}}><p>Mascots</p></div>
				</section>
			</section>
			<Footer />
			<button
				className={`${styles.scrollBtn} ${isVisible ? '' : styles.invisible}`}
				onClick={scrollToTop}>
				<FontAwesomeIcon icon={faArrowUp} color="#0e0d17"/>
			</button>
		</div>
	);
}

export default Home;