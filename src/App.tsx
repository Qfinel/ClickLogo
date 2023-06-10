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
    <div className={styles.HomeCont}>
      <Header />
        <Home />
        <Services />
        <About />
		<Portfolio />
      <Footer />
      <button
				className={`${styles.scrollBtn} ${isVisible ? '' : styles.invisible}`}
				onClick={scrollToTop}>
				<FontAwesomeIcon icon={faArrowUp} color="#0e0d17"/>
			</button>
		</div>
  );
}

export default App;
