import React from "react";
import "./TestimonialsSection.css";

function TestimonialsSection() {
	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<section className='testimonials-section'>
			<h2 className='testimonials-heading'>
				Dlaczego warto wybrać Salerezerwacje?
			</h2>
			<div className='underline'></div>
			<p className='testimonials-description'>
				Służymy pomocą przy organizacji spotkań i eventów już od 2013 r.!
				<br />
				Możemy się pochwalić współpracą z wieloma firmami, m.in.:
			</p>

			<div className='partners-logos'>
				<img
					src='src/img/partners/antiga.jpg'
					alt='Partner 1 - Antiga'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/dasl.jpg'
					alt='Partner 2 - Dasl'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/edukey.jpg'
					alt='Partner 3 - Edukey'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/expander.jpg'
					alt='Partner 4 - Expander'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/hs.jpg'
					alt='Partner 5 - Higma Service'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/itw.jpg'
					alt='Partner 6 - Into the World'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/jsystems.jpg'
					alt='Partner 7 - JSystems'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/leadenhall.jpg'
					alt='Partner 8 - Leadenhall'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/music_more.png'
					alt='Partner 9 - Music&More'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/oirp.jpg'
					alt='Partner 10 - OIRP'
					className='partner-logo'
				/>
				<img
					src='src/img/partners/openeducationgroup.jpg'
					alt='Partner 11 - Open Education Group '
					className='partner-logo'
				/>
				<img
					src='src/img/partners/vistula.jpg'
					alt='Partner 11 - Vistula'
					className='partner-logo'
				/>
			</div>

			<a
				href='#join'
				className='testimonials-button'
				onClick={scrollToBottom}
			>
				CHCĘ DO NICH DOŁĄCZYĆ
			</a>
		</section>
	);
}

export default TestimonialsSection;
