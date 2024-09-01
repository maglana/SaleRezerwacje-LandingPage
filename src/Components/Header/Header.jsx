import React from "react";
import "./Header.css";

function Header() {
	return (
		<header className='site-header'>
			<div className='logo-container'>
				<img
					src='\src\img\sale_rezerwacje.png'
					alt='logo salerezerwacje.pl'
					className='logo'
				/>
			</div>
		</header>
	);
}

export default Header;
