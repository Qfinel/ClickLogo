import styles from './Header.module.css';
import Logo from '../assets/ClickLogo.png'
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {

	const navigate = useNavigate();
	const location = useLocation();

	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const linkStyle = {
		color: '#e43256',
		fontWeight: 'bold',
	}

	const btnStyle = {
		backgroundColor: '#451fc2',
	}

	return (
		<>
		<header className={styles.HeaderCont}>
			<img src={Logo} alt="Logo" className={styles.Logo} onClick={() => {navigate('/');}}/>
			<nav className={styles.NavPanel}>
				<Link to="/" style={location.pathname === '/' ? linkStyle : undefined} className={styles.Link}>Home</Link>
				<Link to="/services" style={location.pathname === '/services' ? linkStyle : undefined} className={styles.Link}>Services</Link>
				<Link to="/about" style={location.pathname === '/about' ? linkStyle : undefined} className={styles.Link}>About</Link>
				<Link to="/contact-us" style={location.pathname === '/contact-us' ? btnStyle : undefined} className={styles.ContactBtn}>Contact Us</Link>
			</nav>
			<div className={styles.MenuBtn}>
				<FontAwesomeIcon icon={faBars} color='white' onClick={() => setOpenMenu(true)}/>
			</div>
			{openMenu && (
				<div className={styles.MenuCont}>
					<FontAwesomeIcon className={styles.Xmark} icon={faCircleXmark} color='#7c90b3' size='2x' onClick={() => setOpenMenu(false)}/>
					<nav className={styles.MenuNavPanel}>
						<Link to="/" style={location.pathname === '/' ? linkStyle : undefined} className={styles.Link}>Home</Link>
						<Link to="/services" style={location.pathname === '/services' ? linkStyle : undefined} className={styles.Link}>Services</Link>
						<Link to="/about" style={location.pathname === '/about' ? linkStyle : undefined} className={styles.Link}>About</Link>
						<Link to="/contact-us" style={location.pathname === '/contact-us' ? btnStyle : undefined} className={styles.ContactBtn}>Contact Us</Link>
					</nav>
				</div>
			)}
		</header>
		</>
	);
}

export default Header;