import React from "react";
import "./ContactSection.css";

function ContactSection() {
	return (
		<section class='contact-section'>
			<h2 class='contact-heading'>Skontaktuj się z nami</h2>
			<div class='underline'></div>
			<form
				class='contact-form'
				action='#'
				method='post'
			>
				<div class='form-group'>
					<label for='name'>Imię i Nazwisko</label>
					<input
						type='text'
						id='name'
						name='name'
						required
					/>
				</div>
				<div class='form-group'>
					<label for='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						required
					/>
				</div>
				<div class='form-group'>
					<label for='phone'>Telefon</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						required
					/>
				</div>
				<div class='form-group'>
					<label for='message'>Wiadomość</label>
					<textarea
						id='message'
						name='message'
						rows='5'
						required
					></textarea>
				</div>
				<button
					type='submit'
					class='contact-button'
				>
					WYŚLIJ WIADOMOŚĆ
				</button>
			</form>
		</section>
	);
}

export default ContactSection;
