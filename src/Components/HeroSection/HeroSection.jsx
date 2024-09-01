import React from "react";
import "./HeroSection.css";

function HeroSection() {
	return (
		<section className='hero-section'>
			<div className='hero-content'>
				<h1 className='hero-title'>
					Chcesz zorganizować niezapomniane przedsięwzięcie, ale nie wiesz, jak
					zacząć?
				</h1>
				<p className='hero-subtitle'>
					Zgłoś się do nas - wspólnie wybierzemy odpowiednią salę i zaplanujemy
					wszystko krok po kroku!
				</p>
			</div>
			<div className='hero-image'></div>
		</section>
	);
}

export default HeroSection;
