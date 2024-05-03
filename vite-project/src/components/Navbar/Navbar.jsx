import React from "react";
import "./Navbar.css"
import Logo from "../../assets/unnamed.png"

const Navbar = () => {
	return (
		<React.Fragment>
			<nav>
				<div className="container">
					<div className="nav__left">
						<img src={Logo} alt="" />
						</div>
					<div>
						<ul className="nav__menu">
							<li><a href="#">HOME</a></li>
							<li><a href="#">ABOUT US</a></li>
							<li><a href="#">SERVICES</a></li>
							<li><a href="#">PROJECTS</a></li>
							<li><a href="#">BLOG</a></li>
							<li><a href="#">CONTACT</a></li>
						</ul>
					</div>

					<div className="nav__right">
						<i class="fa-solid fa-bars"></i>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
