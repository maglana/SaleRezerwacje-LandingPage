import React from "react";
import "./TestimonialsSection.css";

function TestimonialsSection() {
	return (
		<section class='testimonials-section'>
			<h2 class='testimonials-heading'>
				Dlaczego warto wybrać Salerezerwacje?
			</h2>
			<div class='underline'></div>
			<p class='testimonials-description'>
				Służymy pomocą przy organizacji spotkań i eventów już od 2013 r.!
				<br />
				Możemy się pochwalić współpracą z wieloma firmami, m.in.:
			</p>

			<div class='partners-logos'>
				<img
					src='src/img/partners/antiga.jpg'
					alt='Partner 1 - Antiga'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/dasl.jpg'
					alt='Partner 2 - Dasl'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/edukey.jpg'
					alt='Partner 3 - Edukey'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/expander.jpg'
					alt='Partner 4 - Expander'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/hs.jpg'
					alt='Partner 5 - Higma Service'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/itw.jpg'
					alt='Partner 6 - Into the World'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/jsystems.jpg'
					alt='Partner 7 - JSystems'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/leadenhall.jpg'
					alt='Partner 8 - Leadenhall'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/music_more.png'
					alt='Partner 9 - Music&More'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/oirp.jpg'
					alt='Partner 10 - OIRP'
					class='partner-logo'
				/>
				<img
					src='src/img/partners/openeducationgroup.jpg'
					alt='Partner 11 - Open Education Group '
					class='partner-logo'
				/>
				<img
					src='src/img/partners/vistula.jpg'
					alt='Partner 11 - Vistula'
					class='partner-logo'
				/>
			</div>

			<a
				href='#join'
				class='testimonials-button'
			>
				CHCĘ DO NICH DOŁĄCZYĆ
			</a>
		</section>
	);
}

export default TestimonialsSection;
