import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<p>Meus Escritos</p>
			<p>&copy;2020 - {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;
