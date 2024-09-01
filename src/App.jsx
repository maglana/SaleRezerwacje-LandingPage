import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";

function App() {
	return (
		<div className='App'>
			<Header />
			<HeroSection />
			<ServicesSection />
		</div>
	);
}

export default App;
