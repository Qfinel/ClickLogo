import styles from './contact.module.css'

const Contact = () => {

	return (
		<div className={styles.ContactContainer}>
			<h1>Contact us</h1>
			<section>
				<form>
					<input type='text' placeholder='Your name' />
					<input type='email' placeholder='Your email' />
					<input type='text' placeholder='Header' />
					<input type='text' style={{height: '10rem'}} placeholder='Body' />
					<button type='submit'>Send</button>
				</form>
				<p>
				</p>	
			</section>
		</div>
	);
}

export default Contact;