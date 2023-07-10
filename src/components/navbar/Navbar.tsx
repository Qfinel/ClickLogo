import styles from './navbar.module.css';
import Logo from '../../assets/ClickLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type Props = {
	onClick: () => void;
}

const Menu = (props: Props) => {

	return (
		<div className={styles.MenuCont}>
			<FontAwesomeIcon className={styles.Xmark}
				icon={faCircleXmark} color='#7c90b3'
				size='2x' onClick={props.onClick}/>
			<nav className={styles.MenuNavPanel}>
				<a href="#home" className={styles.Link}>Home</a>
				<a href="#services" className={styles.Link}>Services</a>
				<a href="#about" className={styles.Link}>About</a>
				<a href="#pricing" className={styles.Link}>Pricing</a>
				<a href="#contact" className={styles.ContactBtn}>Contact Us</a>
			</nav>
		</div>
	);
}

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const scrollTo = (pixels:number) => {
		window.scrollTo({
		top: pixels,
		behavior: 'smooth',
		});
	};

	return (
		<nav className={styles.NavContainer}>
			<div className={styles.Logo}>
				<img src={Logo} alt="Logo" onClick={() => scrollTo(0)}/>
			</div>
			<nav className={styles.NavLinks}>
				<a href="#home" className={styles.Link}>Home</a>
				<a href="#services" className={styles.Link}>Services</a>
				<a href="#about" className={styles.Link}>About</a>
				<a href="#pricing" className={styles.Link}>Pricing</a>
			</nav>
			<div className={styles.NavBtn}>
				<a href="#contact" className={styles.ContactBtn} >Contact Us</a>
			</div>
			<div className={styles.MenuBtn}>
				<FontAwesomeIcon style={{cursor: 'pointer'}}
					icon={faBars} color='white'
					onClick={() => setOpenMenu(true)}/>
			</div>
			{openMenu && (
				<Menu onClick={() => setOpenMenu(false)} />
			)}
		</nav>
	);
}

export default Navbar;