import React from "react";
import "./SupportSection.css";

function SupportSection() {
	return (
		<section class='support-section'>
			<h2 class='support-heading'>
				Nie wiesz, którą salę wybrać? Zgłoś się do nas!
			</h2>
			<div class='underline'></div>
			<p class='support-instructions'>
				Aby pomóc Ci w wyborze odpowiedniej sali, wykonaj następujące kroki:
			</p>
			<div class='support-steps'>
				<div class='support-step'>
					<p class='step-number'>Krok 1</p>
					<img
						src='/src/img/support/calendar-days-regular.svg'
						alt='Ikona kalendarza'
						class='support-icon'
					/>
					<p class='step-text'>Określ termin konferencji</p>
				</div>
				<div class='support-step'>
					<p class='step-number'>Krok 2</p>
					<img
						src='/src/img/support/champagne-glasses-solid.svg'
						alt='Ikona kieliszki'
						class='support-icon'
					/>
					<p class='step-text'>
						Określ, jakiego rodzaju będzie organizowany przez Ciebie event
					</p>
				</div>
				<div class='support-step'>
					<p class='step-number'>Krok 3</p>
					<img
						src='/src/img/support/people-group-solid.svg'
						alt='Ikona z ludzmi'
						class='support-icon'
					/>
					<p class='step-text'>Oszacuj liczbę uczestników</p>
				</div>
				<div class='support-step'>
					<p class='step-number'>Krok 4</p>
					<img
						src='/src/img/support/envelope-solid.svg'
						alt='Ikona kontaktu'
						class='support-icon'
					/>
					<p>Napisz do nas!</p>
				</div>
			</div>
			<a
				href='#contact'
				class='support-button'
			>
				CHCĘ DO WAS NAPISAĆ
			</a>
		</section>
	);
}

export default SupportSection;
