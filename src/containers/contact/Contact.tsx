import { useRef } from 'react'
import styles from './contact.module.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

	const form = useRef<HTMLFormElement>(null)
	const input1 = useRef<HTMLInputElement>(null)
	const input2 = useRef<HTMLInputElement>(null)
	const input3 = useRef<HTMLInputElement>(null)

	const user_id = process.env.REACT_APP_USER_ID
	const service_id = process.env.REACT_APP_SERVICE_ID
	const template_id = process.env.REACT_APP_TEMPLATE_ID

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!form || !form.current || !service_id
			|| !template_id || !user_id) {
			return
		}

		try {
			const response = await emailjs.sendForm(service_id,
					template_id,
					form.current, user_id)

			if (response.status === 200) {
				if (input1.current)
					input1.current.value = ""
				if (input2.current)
					input2.current.value = ""
				if (input3.current)
					input3.current.value = ""
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={`${styles.ContactContainer} section__padding`}
			id="contact">
			<h1>Choose the <span style={{color: '#451fc2'}}>right thing</span> for your business.</h1>
			<form ref={form} onSubmit={sendEmail}>
				<input ref={input1} type='text' placeholder='Your name' name="user_name"/>
				<input ref={input2} type='email' placeholder='Your email'name="user_email" />
				<input ref={input3} type='text' style={{height: '250px'}} placeholder='Body' name="message"/>
				<button type='submit'>Send</button>
			</form>	
		</div>
	);
}

export default Contact;