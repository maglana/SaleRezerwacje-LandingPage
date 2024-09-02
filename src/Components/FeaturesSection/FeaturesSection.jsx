import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
	return (
		<section className='features-section'>
			<h2 className='features-heading'>
				Kompleksowa obsługa konferencji od A do Z
			</h2>
			<div className='underline'></div>
			<div className='features-grid'>
				<div className='feature-item'>
					<h3 className='feature-title'>Usługi gastronomiczne</h3>
					<hr />
					<p className='feature-description'>
						Catering lub organizacja przerwy kawowej.
					</p>
				</div>
				<div className='feature-item'>
					<h3 className='feature-title'>Wyposażenie specjalistyczne</h3>
					<hr />
					<p className='feature-description'>
						Umożliwiamy dostęp również do sprzętu takiego jak pracownie
						komputerowe, kosmetyczne czy stomatologiczne.
					</p>
				</div>
				<div className='feature-item'>
					<h3 className='feature-title'>Rozrywki</h3>
					<hr />
					<p className='feature-description'>
						Organizujemy również nietypowe atrakcje i umożliwiamy dostęp do sal
						sportowych, miejsc prób artystycznych, ścianek spinaczkowych,
						przestrzeni przygotowanych pod warsztaty kulinarne.
					</p>
				</div>
			</div>
		</section>
	);
}

export default FeaturesSection;
