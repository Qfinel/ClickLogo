import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './payments.module.css'
import { faSnowflake, faStar, faSun } from '@fortawesome/free-regular-svg-icons';
import PayPalIcon from './icons/paypal.svg';
import type { IconDefinition } from '@fortawesome/free-regular-svg-icons';

type CardProps = {
	price: string,
	header: string,
	text: string[],
	link: string,
	color: string,
	icon: IconDefinition,
}

const PlanCard = ({price, header, text, link, color, icon}: CardProps) => {
	return (
		<div className={styles.PlanCard}>
			<div className={styles.PlanCardFront}>
				<h1 style={{backgroundColor: color}}>{price}</h1>
				<FontAwesomeIcon icon={icon} color={color} size='8x'/>
				<h3>{header}</h3>
			</div>
			<div className={styles.PlanCardBack}>
				<div>
					{text.map((line, index) => (
						<p key={index}>
							{line}
						</p>
					))}
				</div>
				<a href={link}>
					<img src={PayPalIcon} alt="paypal" />
					Buy Now
				</a>
			</div>
		</div>
	)
}

const Payments = () => {
	return (
		<section className={`${styles.PaymentsContainer} section__padding`}
			id='pricing'>
			<h1>Choose <span style={{color: "#e43256"}}>Your</span> Plan</h1>
			<section>
				<PlanCard price='$99' header='Standard' 
					text={['Logo Design (2 Concepts)',
					'Sub Logo Design',
					'Unlimited revisions',
					'Full Copyright Ownership',
					'All Formats']}
					link='/' 
					color='#7c90b3'
					icon={faSnowflake} />
				<PlanCard price='$149' header='Most Popular' 
					text={['Logo Design (3 Concepts)',
					'Sub Logo Design',
					'Unlimited revisions',
					'Full Copyright Ownership',
					'Business Card Design',
					'All Formats']}
					link='/'
					color='#e43256' 
					icon={faStar}/>
				<PlanCard price='$249' header='Best Price' 
					text={['Logo Design (5 Concepts)',
					'Sub Logo Design',
					'Unlimited revisions',
					'Full Copyright Ownership',
					'Business Card Design',
					'Social Media Banner',
					'30 Day Money Back Guarantee',
					'All Formats']}
					link='/'
					color='#451fc2' 
					icon={faSun} />
			</section>
		</section>
	);
};

export default Payments;