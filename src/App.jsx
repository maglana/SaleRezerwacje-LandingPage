import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import SupportSection from "./Components/SupportSection/SupportSection";
import TestimonialsSection from "./Components/TestimonialsSection/TestimonialsSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import CookieConsent from "./Components/CookieConsent/CookieConsent";

function App() {
	return (
		<div className='App'>
			<Header />
			<HeroSection />
			<ServicesSection />
			<FeaturesSection />
			<SupportSection />
			<TestimonialsSection />
			<ContactSection />
			<CookieConsent />
		</div>
	);
}

export default App;
