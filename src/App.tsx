import Header from './Header/Header';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Home from './Home/Home';
import { useState, useEffect } from 'react';
import styles from './App.module.css'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Payments from './Payments/Payments';
import Contact from './Contact/Contact';

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollTop, setScrollTop] = useState(document.documentElement.scrollTop);

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop);
		setIsVisible(scrollTop > 200);
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
	});

  return (
	<>
      <Header />
        <Home />
        <Services />
        <About />
		<Portfolio />
		<Payments />
		<Contact />
      <Footer />
      <button
				className={`${styles.scrollBtn} ${isVisible ? '' : styles.invisible}`}
				onClick={scrollToTop}>
				<FontAwesomeIcon icon={faArrowUp} color="#0e0d17"/>
			</button>
	</>
  );
}

export default App;
