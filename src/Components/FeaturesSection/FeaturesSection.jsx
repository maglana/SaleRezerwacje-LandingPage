import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
	return (
		<section class='features-section'>
			<h2 class='features-heading'>
				Kompleksowa obsługa konferencji od A do Z
			</h2>
			<div class='underline'></div>
			<div class='features-grid'>
				<div class='feature-item'>
					<h3 class='feature-title'>Usługi gastronomiczne</h3>
					<hr />
					<p class='feature-description'>
						Catering lub organizacja przerwy kawowej.
					</p>
				</div>
				<div class='feature-item'>
					<h3 class='feature-title'>Wyposażenie specjalistyczne</h3>
					<hr />
					<p class='feature-description'>
						Umożliwiamy dostęp również do sprzętu takiego jak pracownie
						komputerowe, kosmetyczne czy stomatologiczne.
					</p>
				</div>
				<div class='feature-item'>
					<h3 class='feature-title'>Rozrywki</h3>
					<hr />
					<p class='feature-description'>
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
