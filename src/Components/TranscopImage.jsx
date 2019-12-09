import React from 'react';
import imageTwo from '../sbscImages/rectangle-3.png';
import imagethree from '../sbscImages/E0BEFE66-01D0-46A0-9D53-35D270211F94.svg';

export default function TranscopImage() {
	return (
		<div className="transcopImage">
			<div className="main_div_image">
				<img src={imageTwo} alt="imageTwo" className="imageTwo" />
			</div>
			<div className="welcome_div">
				<p className="welcomeTo_Text"> WELCOME TO</p>
				<p className="transcop_text">Transcorp Hotel</p>
				<p className="place_to_exprence_text">A place to experience and enjoy the life</p>
				<img src={imagethree} alt="playButton" />
			</div>

			<div className="date_time">
				<div className="first_div">
					<div className="check-in-div">
						<p className="check-in-text">CHECK-IN</p>
						<p className="check-in-date">24/june</p>
					</div>
					<div className="check-out-div">
						<p className="check-out-text">CHECK-OUT</p>
						<p className="check-out-date">24/june</p>
					</div>
                    <div>
                    <p className="guests_text">GUESTS</p>
                    <p className="guests_date">03</p>
                    </div>
				</div>
				<div className="second_div">
					<p className="promotional_code_text">Have a promotional code?</p>
					<button className="check_avalablity">CHECK AVAILABILITY</button>
				</div>
			</div>
		</div>
	);
}
