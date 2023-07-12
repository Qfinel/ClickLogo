import styles from './navbar.module.css';
import Logo from '../../assets/ClickLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type MenuProps = {
	onClick: () => void;
}

type LinkProps = {
	href: string,
	children: React.ReactNode,
	className: string
}

const ScrollLink = ({href, children, className}: LinkProps) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		const targetId = e.currentTarget.getAttribute('href')
		const targetElement = document.querySelector(targetId || '') as HTMLElement
	
		if (href === '#home') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

			return
		}
		if (targetElement) {
		  const offset = targetElement.offsetTop;
		  const headerHeight = document.querySelector('nav')?.offsetHeight || 110 
	
		  window.scrollTo({
			top: offset - headerHeight,
			behavior: 'smooth',
			});
		}
	}

	return (
		<a href={href} className={className} onClick={handleClick}>
		  {children}
		</a>
	)
}

const Menu = (props: MenuProps) => {

	return (
		<div className={styles.MenuCont}>
			<FontAwesomeIcon className={styles.Xmark}
				icon={faCircleXmark} color='#7c90b3'
				size='2x' onClick={props.onClick}/>
			<nav className={styles.MenuNavPanel}>
				<ScrollLink href="#home" className={styles.Link}>Home</ScrollLink>
				<ScrollLink href="#services" className={styles.Link}>Services</ScrollLink>
				<ScrollLink href="#about" className={styles.Link}>About</ScrollLink>
				<ScrollLink href="#pricing" className={styles.Link}>Pricing</ScrollLink>
				<ScrollLink href="#contact" className={styles.ContactBtn}>Contact Us</ScrollLink>
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
				<ScrollLink href="#home" className={styles.Link}>Home</ScrollLink>
				<ScrollLink href="#services" className={styles.Link}>Services</ScrollLink>
				<ScrollLink href="#about" className={styles.Link}>About</ScrollLink>
				<ScrollLink href="#pricing" className={styles.Link}>Pricing</ScrollLink>
			</nav>
			<div className={styles.NavBtn}>
				<ScrollLink href="#contact" className={styles.ContactBtn} >Contact Us</ScrollLink>
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