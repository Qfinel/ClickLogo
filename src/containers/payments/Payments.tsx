import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './payments.module.css'
import { faSnowflake, faStar, faSun } from '@fortawesome/free-regular-svg-icons';
import PayPalIcon from './icons/paypal.svg';

const Payments = () => {

	return (
		<section className={styles.PaymentsSection}>
			<h1>Choose <span style={{color: "#e43256"}}>Your</span> Plan</h1>
			<section>
				<div className={styles.PlanCard}>
					<div className={styles.PlanCardFront}>
						<h1 style={{backgroundColor: '#7c90b3'}}>$99</h1>
						<FontAwesomeIcon icon={faSnowflake} color='#7c90b3' size='8x'/>
						<h3>Standard</h3>
					</div>
					<div className={styles.PlanCardBack}>
						<p>
							Logo Design (2 Concepts)<br />
							Sub Logo Design<br />
							Unlimited revisions<br />
							Full Copyright Ownership<br />
							All Formats
						</p>
						<button>
							<PayPalIcon />
							Buy Now
						</button>
					</div>
					</div>
				<div className={styles.PlanCard}>
					<div className={styles.PlanCardFront}>
						<h1>$149</h1>
						<FontAwesomeIcon icon={faStar} color='#e43256' size='8x'/>
						<h3 style={{ color: '#e43256'}}>Most Popular</h3>
					</div>
					<div className={styles.PlanCardBack}>
						<p>
							Logo Design (3 Concepts)<br />
							Sub Logo Design<br />
							All Formats<br />
							Business Card Design<br />
							Unlimited revisions<br />
							Full Copyright Ownership<br />
						</p>
						<button>
							<PayPalIcon />
							Buy Now
						</button>
					</div>
					</div>
				<div className={styles.PlanCard}>
					<div className={styles.PlanCardFront}>
						<h1 style={{backgroundColor: '#451fc2'}}>$249</h1>
						<FontAwesomeIcon icon={faSun} color='#451fc2' size='8x'/>
						<h3 style={{ color: '#451fc2'}}>Best Price</h3>
					</div>
					<div className={styles.PlanCardBack} >
						<p>
							Logo Design (5 Concepts)<br />
							Sub Logo Design<br />
							All Formats<br />
							Business Card Design<br />
							Social Media Banner<br />
							Unlimited revisions<br />
							Full Copyright Ownership<br />
							30 Day Money Back Guarantee<br />
						</p>
						<button>
							<PayPalIcon />
							Buy Now
						</button>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Payments;