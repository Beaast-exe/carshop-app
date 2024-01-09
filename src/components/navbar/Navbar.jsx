import './navbar.css';
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="nav-content">
				<h1>CarShop</h1>

				<ul>
					<li>Home</li>
					<li>Buy</li>
					<li>Sell</li>
					<li>Stock</li>
					<li>Contact</li>
				</ul>

				<div className="nav-contact">
					<FaWhatsapp />
					<span>919 999 999</span>
				</div>

				<div className="nav-social">
					<FaInstagram />
					<FaYoutube />
					<FaFacebook />
				</div>
			</div>
		</div>
	)
}

export default Navbar;