import pic from '../../assets/Letterform.jpg'
import pic2 from '../../assets/ClickLogo.png'
import pic3 from '../../assets/Lettermark.jpg'
import pic4 from '../../assets/LogoSymb.jpg'
import pic5 from '../../assets/Mascot.jpg'
import pic6 from '../../assets/AbstractLogo.jpg'
import pic7 from '../../assets/Man.jpg'
import pic8 from '../../assets/Woman.jpeg'
import pic9 from '../../assets/Wordmark.jpg'
import styles from './portfolio.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const Portfolio = () => {

	const [sliderData, setSliderData] = useState([{
		image: pic,
		company: 'Apple'
	},
	{
		image: pic2,
		company: 'ClickLogo'
	},
	{
		image: pic3,
		company: 'Tesla'
	},
	{
		image: pic4,
		company: 'Facebook'
	},
	{
		image: pic5,
		company: 'Instagram'
	},
	{
		image: pic6,
		company: 'Banana'
	},
	{
		image: pic7,
		company: 'Google'
	},
	{
		image: pic8,
		company: 'Something'
	},
	{
		image: pic9,
		company: 'Agency'
	}]);

	const rotateArray = (step: number) => {
		if (step > 0) {
			let rotatedArray = sliderData.slice(1).concat(sliderData[0]);
			for (let i = 1; i < step; i++) {
				rotatedArray = rotatedArray.slice(1).concat(rotatedArray[0]);
			}
			setSliderData(rotatedArray);
		}
		else if (step < 0) {
			let reverseRotatedArray = [sliderData[sliderData.length - 1], ...sliderData.slice(0, sliderData.length - 1)];
			for (let i = -1; step < i; step++) {
				reverseRotatedArray = [reverseRotatedArray[reverseRotatedArray.length - 1], ...reverseRotatedArray.slice(0, reverseRotatedArray.length - 1)];
			}
			setSliderData(reverseRotatedArray);
		}
	}

	return (
		<>
		<section className={styles.PortfolioSection}>
			<h1>Our <span style={{color: '#e43256'}}>distinctive</span> portfolio</h1>
			<div className={styles.PortfolioBook}>
			<FontAwesomeIcon className={styles.Arrow} size="3x" onClick={() => {rotateArray(-1)}} icon={faArrowLeft}/>
			{sliderData.map((slide, index) => {
				if (index > 4)
					return null;
				return (
				<div
					className={index === 2 ? `${styles.Slide} ${styles.ActiveSlide}` : styles.Slide}
					key={index}
					style={{backgroundImage: `url(${slide.image})`,}}
					onClick={() => {rotateArray(index - 2)}}
				>
					<p>Logo for</p>
					<p style={{fontWeight: 'bold'}}>{slide.company}</p>
				</div>
				);
			})}
			<FontAwesomeIcon className={styles.Arrow} size="3x" onClick={() => {rotateArray(+1)}} icon={faArrowRight}/>
			</div>
		</section>
		<section className={styles.ProsSection}>
			<div>
				<FontAwesomeIcon icon={faCircleCheck} size='2x' color='#451fc2'/>
				<p>Free consultation and brief preparation</p>
			</div>
			<div>
				<FontAwesomeIcon icon={faCircleCheck} size='2x' color='#451fc2' />
				<p>Personal offers and discounts for clients</p>
			</div>
			<div>
				<FontAwesomeIcon icon={faCircleCheck} size='2x' color='#451fc2'/>
				<p>We always complete the work on time</p>
			</div>
			<div>
				<FontAwesomeIcon icon={faCircleCheck} size='2x' color='#451fc2' />
				<p>We employ only highly qualified specialists</p>
			</div>
		</section>
		</>
	);
}

export default Portfolio;