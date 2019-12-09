import React from 'react';
import imageOne from '../sbscImages/EC2CB46A-E922-4184-88FE-C719C473B7BB.png';
export default function NewNavBar() {
	return (
		<div>
			<ul className="navItems">
				<li>HOME</li>
				<li>ABOUT US</li>
				<li>OUR ROOMS</li>
				<li>
					<img src={imageOne} alt="transcorpImage" className="transcorpImage" />
				</li>
				<li>RESERVATION</li>
				<li>BLOG</li>
				<li>CONTACT</li>
			</ul>
		</div>
	);
}
