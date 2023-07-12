import styles from './footer.module.css'

const Footer = () => {
	return (
		<>
			<footer className={`${styles.FooterCont} section__padding`}>
				<h3>© 2023 ClickLogo. All rights reserved.</h3>
			</footer>
		</>
	);
}

export default Footer;