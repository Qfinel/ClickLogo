import styles from './About.module.css'
import pic2 from '../assets/Woman.jpeg'

const About = () => {

	return (
		<>
		<section className={styles.QualitiesSection}>
			<h1>About us</h1>
			<p>
				Over the years, we have worked with Fortune 500s 
				and brand-new startups. We help ambitious businesses 
				like yours generate more profits by building awareness, 
				driving web traffic, connecting with customers, 
				and growing overall sales. A logo is an essential component 
				of branding because it serves as a visual representation 
				of your brand's identity. Don't hesitate and let us 
				bring your business to the next level!
			</p>
			<img src={pic2} alt="Logo designer"></img>
		</section>
		<section className={styles.StatsSection}>
			<div>
				<h1>10</h1>
				<p>YEARS OF EXPERIENCE</p>
			</div>
			<div>
				<h1>521</h1>
				<p>HAPPY CUSTOMERS</p>
			</div>
			<div>
				<h1>115</h1>
				<p>DONE PROJECTS</p>
			</div>
		</section>
		</>
	);
}

export default About;