import React from 'react';
import imageone from '../sbscImages/recent.png';
import whiteBed from '../sbscImages/whiteBed.png';
import blueBed from '../sbscImages/blueBed.png';
import ovalGirl from '../sbscImages/ovalGirl.png';

export default function Morephotos() {
	return (
		<div className="more_photos">
			<div className="more_photos_one">
				<center>
					<p className="view_more_photos">View More Photos</p>
				</center>
			</div>
			<div className="more_other_photos">
				<div className="more_other_photos_one">
					
                    <div className="images_div">
                    <p className="discover_our_room_text">Discover Our Rooms</p>
					<p className="luxury_interiot_text">Luxury interior</p>
						<div className="div_one_images_div">
							<img src={imageone} style={{ width: '150px' }} alt="newImage" />
							<ul>
								<li>Classic Room</li>
								<li>Starting from $40.00/Night</li>
							</ul>
						</div>
                        <div className="div_two_images_div">
                        <img src={whiteBed} style={{ width: '150px' }} alt="newImage" />
							<ul>
								<li>Classic Room</li>
								<li>Starting from $40.00/Night</li>
							</ul>
                        </div>
                        <div className="div_three_images_div">
                        <img src={blueBed} style={{ width: '150px' }} alt="newImage" />
							<ul>
								<li>Classic Room</li>
								<li>Starting from $40.00/Night</li>
							</ul>
                        </div>
					</div>
				</div>
				<div className="more_other_photos_two">
					<img src={imageone} alt="room" />
				</div>
            </div>
            <div className="testimonials">
            
            </div>

            <div className="oval_girl_testimonial">
            <center>
            <p className="testimonal_p_text">TESTIMONIAL</p>
            <p className="what_guests_say">What guests Say</p>
            <p className="lorem_ipsum">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Fusce commodo urna id neque finibus, ac sollicitudin arcu<br/> tempus. In hac habitasse platea dictumst”</p>
		   <img src={ovalGirl} alt="ovalGirl"/>
		   <p className="name_testimony">FARAH WILLIAMS</p>
            </center>
            
            </div>
		</div>
	);
}
