import styles from './contact.module.css'

const Contact = () => {

	return (
		<div className={`${styles.ContactContainer} section__padding`}
			id="contact">
			<h1>Choose the <span style={{color: '#451fc2'}}>right thing</span> for your business.</h1>
			<form>
				<input type='text' placeholder='Your name' />
				<input type='email' placeholder='Your email' />
				<input type='text' placeholder='Header' />
				<input type='text' style={{height: '250px'}} placeholder='Body' />
				<button type='submit'>Send</button>
			</form>	
		</div>
	);
}

export default Contact;