import React from 'react';
import "./style/custom.css";
import "./style/custom-res.css";
import profileImg from '../img/profile-pic.jpg'

const About = () => {
	return (
		<section>
		<nav>
		  <ul class="menuItems">
		  	  <li><h1>BRUNDA FINE ARTS </h1></li>
			  <li><a href='/' data-item='Home'>Home</a></li>
			  <li><a href='/about' data-item='About'>About</a></li>
			  <li><a href='/services' data-item='Services'>Services</a></li>
			  </ul>
	   </nav>

		<div class="responsive-container-block bigContainer">
  			<div class="responsive-container-block Container bottomContainer">
    			<div class="ultimateImg">
      				<img class="mainImg" src={profileImg}></img>
      				<div class="purpleBox">
        				<p class="purpleText">
          					The best artist for nature paintings and portraits. Loved working with her
       					</p>
						<img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"></img>
					</div>
				</div>
			<div class="allText bottomText">
			<p class="text-blk headingText">
				About Me
			</p>
			<p class="text-blk subHeadingText">
				I'm an artist based out of Bangalore, India. Ever since I could hold a pen I have held a paint brush. As I started growing up, my journey with Art transformed from Hobby to Passion to Obsession. Today I'm a full time Artist making the world beautiful one art at a time.
			</p>
			<p class="text-blk description">
				If you are looking to cherish memories through paintings, want to improve the aesthetics of your space or looking for Art Collabs hit me up.I would love to work with you!
			</p>
			<a class="explore" href="/services">
				View Services
			</a>
			</div>
		</div>
		</div>
		<footer>
			<div class="footer-copyright text-center">&copy; Developed with ❤️ by 
				<a href="http://prajwalbr.info" class="white-text"> Prajwal B R</a>. <a href="http://prajwalbr.info" >Check out my website </a>
			</div>
		</footer>
		</section>

	)
}

export default About;