import styles from './About.module.css'
import pic2 from '../assets/Woman.jpeg'

interface ComponentProps {
	scrollTop: number;
}

const About = (props:ComponentProps) => {

	const scrollTop = props.scrollTop;

	return (
		<section className={styles.QualitiesSection}>
			<h1>About <span style={{color: '#451fc2'}}>us</span></h1>
			<p>
				Over the years, we have worked with Fortune 500s 
				and brand-new startups. We help ambitious businesses 
				like yours generate more profits by building awareness, 
				driving web traffic, connecting with customers, 
				and growing overall sales. A logo is an essential component 
				of branding because it serves as a visual representation 
				of your brand's identity. A well-designed logo 
				can help your brand stand out from competitors. 
				Don't hesitate and let us bring your business to the next level!
			</p>
			<img src={pic2} alt="Logo designer"></img>
		</section>
	);
}

export default About;