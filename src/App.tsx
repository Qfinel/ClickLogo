import styles from './app.module.css'
import { useState, useEffect } from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { About, Footer, Header, Payments, Portfolio, Services, Contact } from './containers';
import { Navbar } from './components';

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
      	<Navbar />
    	<Header />
        {/* <Services />
        <About />
		<Portfolio />
		<Payments />
		<Contact />
      	<Footer />
		<button
			className={`${styles.scrollBtn} ${isVisible ? '' : styles.invisible}`}
			onClick={scrollToTop}>
				<FontAwesomeIcon icon={faArrowUp} color="#0e0d17"/>
		</button> */}
	</>
  );
}

export default App;
