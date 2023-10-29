
import React from 'react';
import "./style/custom.css";
import "./style/custom-res.css";
import live from '../img/live-painting.jpeg'
import personalised from '../img/commissions.jpg'
import posters from '../img/posters.jpg'
import cards from '../img/custom-cards.jpeg'
import original from '../img/originals.jpg'
var nodemailer = require('nodemailer');


const Services = () => {

	return (
		<div>
			<nav>
			<ul class="menuItems" >
				<li><h1>BRUNDA FINE ARTS </h1></li>
				<li><a href='/' data-item='Home'>Home</a></li>
				<li><a href='/about' data-item='About'>About</a></li>
				<li><a href='/services' data-item='Services'>Services</a></li>
				</ul>
		</nav>

		<div class="container">
			<br></br><br></br><br></br>			<br></br><br></br><br></br>
			<h4 align = "center">SERVICES</h4><br></br>
			<div class="carousel">
				<input type="radio" name="slides" id="slide-1"></input>
				<input type="radio" name="slides" id="slide-2"></input>
				<input type="radio" name="slides" id="slide-3"></input>
				<input type="radio" name="slides" id="slide-4"></input>
				<input type="radio" name="slides" id="slide-5"></input>
				<input type="radio" name="slides" id="slide-6"></input>
				<ul class="carousel__slides">
					<li class="carousel__slide">
						<figure>
							<div>
								<img src={live} alt=""></img>
							</div>
							<figcaption>
								<h4>LIVE PAINTING</h4>
								I will be available for live painting at any occasion that you want to eternalise and preserve the memories in the form of painting
								<span class="credit">Weddings, Birthdays, Performances etc</span>
							</figcaption>
						</figure>
					</li>
					<li class="carousel__slide">
						<figure>
							<div>
								<img src={personalised} alt=""></img>
							</div>
							<figcaption>
								<h4>PERSONALISED PAINTING</h4>
								If you have photos of your favorite memory that you want to make into a nostalgic painting then you are in the right place. 
								I will also try my best to capture those beautiful emotions right from your descriptions. 
								I also make personalised portraits which can be the most unique meaningful gift for just about anyone
								<span class="credit">Paintings, Portraits, Sketch</span>                            
							</figcaption>
						</figure>
					</li>
					<li class="carousel__slide">
						<figure>
							<div>
								<img src={posters} alt=""></img>
							</div>
							<figcaption>
								<h4>PERSONALISED POSTERS</h4>
								Hanging posters around the house that inspire and remind you of your best self can elevate your mood throughout the day.
								You can now personalise your posters which can be handmade or digital posters
								<span class="credit">Quotes, Affirmations, Aesthetics</span>                            
							</figcaption>
						</figure>
					</li>
					<li class="carousel__slide">
						<figure>
							<div>
								<img src={cards} alt=""></img>
							</div>
							<figcaption>
								<h4>CARDS</h4>
								Handwritten calligraphic cards for invites, birthdays etc. 
								<span class="credit">Personalised handmade cards</span>                            
							</figcaption>
						</figure>
					</li>
					<li class="carousel__slide">
						<figure>
							<div>
								<img src={original} alt=""></img>
							</div>
							<figcaption>
								<h4>ORIGINAL PAINTING</h4>
								Please get in touch if you are a collector interested in my Original paintings
								<span class="credit">Original paintings, Replicates, Giclee Prints</span>                        
							</figcaption>
						</figure>
					</li>
				</ul>    
				<ul class="carousel__thumbnails">
					<li>
						<label for="slide-1"><img src={live} alt="slide-1"></img></label>
					</li>
					<li>
						<label for="slide-2"><img src={personalised} alt="slide-2"></img></label>
					</li>
					<li>
						<label for="slide-3"><img src={posters} alt="slide-3"></img></label>
					</li>
					<li>
						<label for="slide-4"><img src={cards} alt="slide-4"></img></label>
					</li>
					<li>
						<label for="slide-5"><img src={original} alt="slide-5"></img></label>
					</li>
				</ul>
			</div>
		</div>

		<div id="contact">
			<hr></hr>
  			<h1 class="section-header">Contact Me</h1>
  			
			<div class="contact-wrapper">
    			{/* <form id="contact-form" class="form-horizontal" role="form">
      				<div class="form-group">
        				<div class="col-sm-12">
          					<input type="text" class="form-control" id="name" placeholder="NAME" name="name" required></input>
        				</div>
     				</div>

      				<div class="form-group">
        				<div class="col-sm-12">
          					<input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" required></input>
        				</div>
      				</div>

      				<textarea class="form-control" rows="10" placeholder="MESSAGE" id="message" name="message" required></textarea>

      				<button class="btn btn-primary send-button" id="submit" type="submit" value="SEND" >
        				<div class="alt-send-button">
          					<i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        				</div>
      				</button>
      			</form> */}
    
    
     			<div class="direct-contact-container">

        			<ul class="contact-list">
          				<li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Bangalore, India</span></i></li>
          
         				<li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="+91 8073698085" title="Give me a call">+91 7019280867</a></span></i></li>
          
          				<li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">lbrunda.arts@gmail.com</a></span></i></li>

		 				 <li class="list-item"><i class="fab fa-instagram-square share fa-2x"><span class="contact-text place"><a href="https://instagram.com/brundafineart" title="Follow me on Instagram">@brundafinearts</a></span></i></li>
        			</ul>

      			</div>
  			</div>
		</div>  

		<footer>
				<div class="footer-copyright text-center">&copy; Developed with ❤️ by 
					<a href="http://prajwalbr.info" class="white-text"> Prajwal B R</a>. <a href="http://prajwalbr.info">Check out my website </a>
				</div>
		</footer>
  
	</div>
	)
}

export default Services;