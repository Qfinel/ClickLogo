import styles from './Header.module.css';
import Logo from '../assets/ClickLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Header = () => {

	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [scrollTop, setScrollTop] = useState<number>(document.documentElement.scrollTop);

	const scrollTo = (pixels:number) => {
		window.scrollTo({
		top: pixels,
		behavior: 'smooth',
		});
	};

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop);
	}

	const linkStyle = {
		color: '#e43256',
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
		window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<>
		<header className={styles.HeaderCont}>
			<img src={Logo} alt="Logo" className={styles.Logo} onClick={() => scrollTo(0)}/>
			<nav className={styles.NavPanel}>
				<button style={scrollTop < 550 ? linkStyle : undefined}
					className={styles.Link}
					onClick={() => scrollTo(0)}>
						Home
				</button>
				<button style={(scrollTop >= 550 && scrollTop < 1200) ? linkStyle : undefined}
					className={styles.Link}
					onClick={() => scrollTo(720)}>
						Services
				</button>
				<button style={(scrollTop >= 1200 && scrollTop < 2000)  ? linkStyle : undefined}
					className={styles.Link}
					onClick={() => scrollTo(1480)}>
						About
				</button>
				<button style={(scrollTop >= 2000 && scrollTop < 2400) ? linkStyle : undefined}
					className={styles.Link}
					onClick={() => scrollTo(2380)}>
						Portfolio
				</button>
				<button className={styles.ContactBtn} onClick={() => scrollTo(2400)}>Contact Us</button>
			</nav>
			<div className={styles.MenuBtn}>
				<FontAwesomeIcon icon={faBars} color='white' onClick={() => setOpenMenu(true)}/>
			</div>
			{openMenu && (
				<div className={styles.MenuCont}>
					<FontAwesomeIcon className={styles.Xmark} icon={faCircleXmark} color='#7c90b3' size='2x' onClick={() => setOpenMenu(false)}/>
					<nav className={styles.MenuNavPanel}>
						<button style={scrollTop < 550 ? linkStyle : undefined}
							className={styles.Link}
							onClick={() => scrollTo(0)}>
								Home
						</button>
						<button style={(scrollTop >= 550 && scrollTop < 1200) ? linkStyle : undefined}
							className={styles.Link}
							onClick={() => scrollTo(720)}>
								Services
						</button>
						<button style={(scrollTop >= 1200 && scrollTop < 2000) ? linkStyle : undefined}
							className={styles.Link}
							onClick={() => scrollTo(1480)}>
								About
						</button>
						<button style={(scrollTop >= 2000 && scrollTop < 2400) ? linkStyle : undefined}
							className={styles.Link}
							onClick={() => scrollTo(2380)}>
								Portfolio
						</button>
						<button className={styles.ContactBtn} onClick={() => scrollTo(2400)}>Contact Us</button>
					</nav>
				</div>
			)}
		</header>
		</>
	);
}

export default Header;