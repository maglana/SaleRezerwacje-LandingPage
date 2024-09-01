import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
	return (
		<section className='services-section'>
			<h2 className='services-heading'>
				Sale konferencyjne w całej Polsce stają przed Tobą otworem
			</h2>
			<div className='underline'></div>
			<p className='services-description'>
				Przejrzyj nasza ofertę i wybierz salę konferencyjną odpowiadającą Twoim
				potrzebom w kilka minut!
				<br />
				W naszej bazie znajdują się miejsca z każdego zakątka Polski.
				<br />
				Wszystkie umożliwiają Ci zorganizowanie profesjonalnego wydarzenia
				dzięki odpowiedniemu wyposażeniu.
				<br />
				Nasze usługi obejmują także profesjonalne i bardzo wszechstronne
				przygotowanie konferencji.
			</p>
			<a
				href='#search'
				className='services-button'
			>
				WYSZUKAJ SALĘ SWOICH MARZEŃ
			</a>
		</section>
	);
}

export default ServicesSection;
