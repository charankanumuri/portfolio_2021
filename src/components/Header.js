import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div id="home" className="header-wraper">
			<div className="main-info">
				<h1>Mern Stack developer and Java Developer </h1>
				<Typed
					className="typed-text"
					strings={[ 'Web Development', 'Spring Boot', 'MERN Stack', 'AWS Certified-SAA-C02' ]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<a href="#" className="btn-main-offer">
					Contact me
				</a>
			</div>
		</div>
	);
};

export default Header;
