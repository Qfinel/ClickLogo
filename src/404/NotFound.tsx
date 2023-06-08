import { Link } from "react-router-dom";
import styles from './NotFound.module.css'

const NotFound = () => {

	return (
		<div className={styles.Cont}>
			<h2>This page doesn't exist.</h2>
			<Link to="/" className={styles.Link}>Go to homepage</Link>
		</div>
	);
};

export default NotFound;