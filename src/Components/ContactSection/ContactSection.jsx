import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { id, value } = e.target;

		switch (id) {
			case "name":
				setName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "phone":
				setPhone(value);
				break;
			case "message":
				setMessage(value);
				break;
			default:
				break;
		}

		validateField(id, value);
	};

	const validateField = (field, value) => {
		let formErrors = { ...errors };

		switch (field) {
			case "name":
				if (value.trim().split(" ").length < 2) {
					formErrors.name = "Podaj poprawne imię i nazwisko.";
				} else {
					delete formErrors.name;
				}
				break;
			case "email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) {
					formErrors.email = "Podaj poprawny adres email.";
				} else {
					delete formErrors.email;
				}
				break;
			case "phone":
				const cleanedPhone = value.split(" ").join("");
				if (cleanedPhone.length !== 9 || isNaN(cleanedPhone)) {
					formErrors.phone = "Podaj poprawny numer telefonu (9 cyfr).";
				} else {
					delete formErrors.phone;
				}
				break;
			case "message":
				if (value.length > 500) {
					formErrors.message =
						"Wiadomość może zawierać maksymalnie 500 znaków.";
				} else {
					delete formErrors.message;
				}
				break;
			default:
				break;
		}

		setErrors(formErrors);
	};

	const validateForm = () => {
		let formErrors = {};
		let valid = true;
		console.log(name);
		if (name.trim().split(" ").length < 2) {
			formErrors.name = "Podaj poprawne imię i nazwisko.";
			valid = false;
		}

		if (
			!(
				email.includes("@") &&
				email.includes(".") &&
				email.indexOf("@") < email.lastIndexOf(".")
			)
		) {
			formErrors.email = "Podaj poprawny adres email.";
			valid = false;
		}

		const cleanedPhone = phone.split(" ").join("");
		if (cleanedPhone.length !== 9 || isNaN(cleanedPhone)) {
			formErrors.phone = "Podaj poprawny numer telefonu (9 cyfr).";
			valid = false;
		}

		if (message.length > 500) {
			formErrors.message = "Wiadomość może zawierać maksymalnie 500 znaków.";
			valid = false;
		}

		setErrors(formErrors);
		return valid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Formularz wysłany:", { name, email, phone, message });
		}
	};

	return (
		<section className='contact-section'>
			<h2 className='contact-heading'>Skontaktuj się z nami</h2>
			<div className='underline'></div>
			<form
				className='contact-form'
				onSubmit={handleSubmit}
			>
				<div className='form-group'>
					<label htmlFor='name'>Imię i Nazwisko *</label>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Wpisz swoje imię i nazwisko'
						value={name}
						onChange={handleChange}
					/>
					{errors.name && <span className='error'>{errors.name}</span>}
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email *</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Wpisz swój adres email'
						value={email}
						onChange={handleChange}
					/>
					{errors.email && <span className='error'>{errors.email}</span>}
				</div>
				<div className='form-group'>
					<label htmlFor='phone'>Telefon *</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						placeholder='Wpisz swój numer telefonu'
						value={phone}
						onChange={handleChange}
					/>
					{errors.phone && <span className='error'>{errors.phone}</span>}
				</div>
				<div className='form-group'>
					<label htmlFor='message'>Wiadomość</label>
					<textarea
						id='message'
						name='message'
						placeholder='Wpisz swoją wiadomość'
						rows='5'
						value={message}
						onChange={handleChange}
					></textarea>
					{errors.message && <span className='error'>{errors.message}</span>}
				</div>
				<button
					type='submit'
					className='contact-button'
				>
					WYŚLIJ WIADOMOŚĆ
				</button>
			</form>
		</section>
	);
}

export default ContactSection;
