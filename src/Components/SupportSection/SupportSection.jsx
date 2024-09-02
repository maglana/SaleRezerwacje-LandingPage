import React, { useState, useEffect, useRef } from "react";
import "./SupportSection.css";

function SupportSection() {
	const [visibleSteps, setVisibleSteps] = useState([
		false,
		false,
		false,
		false,
	]);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					const timeouts = [];

					visibleSteps.forEach((step, index) => {
						const timeout = setTimeout(() => {
							setVisibleSteps((prev) => {
								const newSteps = [...prev];
								newSteps[index] = true;
								return newSteps;
							});
						}, index * 500);
						timeouts.push(timeout);
					});

					return () => {
						timeouts.forEach((timeout) => clearTimeout(timeout));
					};
				}
			},
			{
				threshold: 0.7,
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [visibleSteps]);

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<section
			className='support-section'
			ref={sectionRef}
		>
			<h2 className='support-heading'>
				Nie wiesz, którą salę wybrać? Zgłoś się do nas!
			</h2>
			<div className='underline'></div>
			<p className='support-instructions'>
				Aby pomóc Ci w wyborze odpowiedniej sali, wykonaj następujące kroki:
			</p>
			<div className='support-steps'>
				<div className={`support-step ${visibleSteps[0] ? "visible" : ""}`}>
					<p className='step-number'>Krok 1</p>
					<img
						src='/src/img/support/calendar-days-regular.svg'
						alt='Ikona kalendarza'
						className='support-icon'
					/>
					<p className='step-text'>Określ termin konferencji</p>
				</div>
				<div className={`support-step ${visibleSteps[1] ? "visible" : ""}`}>
					<p className='step-number'>Krok 2</p>
					<img
						src='/src/img/support/champagne-glasses-solid.svg'
						alt='Ikona kieliszki'
						className='support-icon'
					/>
					<p className='step-text'>
						Określ, jakiego rodzaju będzie organizowany przez Ciebie event
					</p>
				</div>
				<div className={`support-step ${visibleSteps[2] ? "visible" : ""}`}>
					<p className='step-number'>Krok 3</p>
					<img
						src='/src/img/support/people-group-solid.svg'
						alt='Ikona z ludzmi'
						className='support-icon'
					/>
					<p className='step-text'>Oszacuj liczbę uczestników</p>
				</div>
				<div className={`support-step ${visibleSteps[3] ? "visible" : ""}`}>
					<p className='step-number'>Krok 4</p>
					<img
						src='/src/img/support/envelope-solid.svg'
						alt='Ikona kontaktu'
						className='support-icon'
					/>
					<p>Napisz do nas!</p>
				</div>
			</div>
			<a
				href='#contact'
				className='support-button'
				onClick={scrollToBottom}
			>
				CHCĘ DO WAS NAPISAĆ
			</a>
		</section>
	);
}

export default SupportSection;
