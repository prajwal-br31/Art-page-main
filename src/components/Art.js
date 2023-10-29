import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ImageModal from './ImageModal'
import ocean from '../img/ocean.jpg'
import paradise from '../img/paradise.jpg'
import rain from '../img/rain.jpg'
import shore from '../img/shore.jpg'
import sunset from '../img/sunset.jpg'
import waterfall from '../img/waterfall.jpg'
import wave from '../img/wave.jpg'
import img0 from '../img/IMG_6324.jpg'
import img1 from '../img/IMG_6325.jpg'
import img2 from '../img/IMG_6326.jpg'
import img3 from '../img/IMG_6327.jpg'
import img4 from '../img/IMG_6328.jpg'
import img5 from '../img/IMG_6329.jpg'
import img6 from '../img/IMG_6330.jpg'
import img7 from '../img/IMG_6331.jpg'
import "./style/custom.css";


const Art = () => {
	const[one, setOne] = useState(false)
	const handleOne = () => setOne(true)
	const handleNoOne = () => setOne(false)

	const[two, setTwo] = useState(false)
	const handleTwo = () => setTwo(true)
	const handleNoTwo = () => setTwo(false)

	const[three, setThree] = useState(false)
	const handleThree = () => setThree(true)
	const handleNoThree = () => setThree(false)

	const[four, setFour] = useState(false)
	const handleFour = () => setFour(true)
	const handleNoFour = () => setFour(false)

	const[five, setFive] = useState(false)
	const handleFive = () => setFive(true)
	const handleNoFive = () => setFive(false)

	const[six, setSix] = useState(false)
	const handleSix = () => setSix(true)
	const handleNoSix = () => setSix(false)

	const[seven, setSeven] = useState(false)
	const handleSeven = () => setSeven(true)
	const handleNoSeven = () => setSeven(false)

	const[eight, setEight] = useState(false)
	const handleEight = () => setEight(true)
	const handleNoEight = () => setEight(false)

	const[nine, setNine] = useState(false)
	const handleNine = () => setNine(true)
	const handleNoNine = () => setNine(false)

	const[ten, setTen] = useState(false)
	const handleTen = () => setTen(true)
	const handleNoTen = () => setTen(false)
	
	const[eleven, setEleven] = useState(false)
	const handleEleven = () => setEleven(true)
	const handleNoEleven = () => setEleven(false)

	const[twelve, setTwelve] = useState(false)
	const handleTwelve = () => setTwelve(true)
	const handleNoTwelve = () => setTwelve(false)

	const[fourteen, setFourteen] = useState(false)
	const handleFourteen = () => setFourteen(true)
	const handleNoFourteen = () => setFourteen(false)

	const[fifteen, setFifteen] = useState(false)
	const handleFifteen = () => setFifteen(true)
	const handleNoFifteen = () => setFifteen(false)

	const[sixteen, setSixteen] = useState(false)
	const handleSixteen = () => setSixteen(true)
	const handleNoSixteen = () => setSixteen(false)
	return (
		<center className="Art">
			<center>
  				<nav>
    				<ul class="menuItems">
						<li></li>
						<li><h1>BRUNDA FINE ARTS </h1></li>
						<li><a href='/' data-item='Home'>Home</a></li>
						<li><a href='/about' data-item='About'>About</a></li>
						<li><a href='/services' data-item='Services'>Services</a></li>
   					 </ul>
 				</nav>
			</center>
			<div class="header">
				<div class="info">
  					<h4><a>Artist Profile</a></h4>
    				<h1>WELCOME TO BRUNDA FINE ARTS!</h1>
   					<div class="meta">
     					 <a  href="https://instagram.com/brundafineart" target="_b" class="author"></a> <br></br>
      					 Follow me on Instagram <a href="https://instagram.com/brundafineart" target="_b">@brundafineart  </a> 
   					</div>
  				</div>
			</div>
			<Container fluid>
				<h4 style={{color:'grey'}}>Each painting tells a story. Click to find out!</h4><br></br>
				<article className="Image-Container">
					<img src={ocean} alt="ocean" onClick={handleOne}/>
					<ImageModal id="one" src={ocean} show={one} Close={handleNoOne} text="A solitary, majestic oak tree stands sentinel on a windswept cliff" title = "BEACHY CLIFF"/>
				</article>

				<article className="Image-Container">
					<img src={paradise} alt="paradise" onClick={handleTwo}/>
					<ImageModal id="two" src={paradise} show={two} Close={handleNoTwo} text="
					Mesmerizing waterfall cascades from a cliff adorned with luminous violet clouds that seem to shimmer with 
					an otherworldly glow" title = "MAGICAL WATERFALLS"/>
				</article>

				<article className="Image-Container">
					<img src={rain} alt="rain" onClick={handleThree}/>
					<ImageModal id="three" src={rain} show={three} Close={handleNoThree} text=" An umbrella, its vibrant colors a stark contrast to the gray day, rests gently on the wet road" title = "RAINY DAY"/>
				</article>

				<article className="Image-Container">
					<img src={shore} alt="shore" onClick={handleFour}/>
					<ImageModal id="four" src={shore} show={four} Close={handleNoFour} text="After a long day the sea, the fisherman finally gazes on the shore" title = "BACK TO HOME"/>
				</article>
			
				<article className="Image-Container">
					<img src={sunset} alt="sunset" onClick={handleFive}/>
					<ImageModal id="five" src={sunset} show={five} Close={handleNoFive} text="Under the setting sun's warm embrace, children play, their laughter a symphony of
					youthful joy" title = "SUNSET JOY"/>
				</article>

				<article className="Image-Container">
					<img src={waterfall} alt="waterfall" onClick={handleSix}/>
					<ImageModal id="six" src={waterfall} show={six} Close={handleNoSix} text="A mystical waterfall cascades seeming to flow from a hidden realm" title = "MYSTIC FALLS"/>
				</article>

				<article className="Image-Container">
					<img src={wave} alt="wave" onClick={handleSeven}/>
					<ImageModal id="seven" src={wave} show={seven} Close={handleNoSeven} text="The crashing waves, a relentless display of nature's might" title = "ROARING WAVES"/>
				</article>
				
				<article className="Image-Container">
					<img src={img0} alt="NautreImg" onClick={handleEight}/>
					<ImageModal id="eight" src={img0} show={eight} Close={handleNoEight} text="In a cozy hillside, a hobbit's home with its whimsical charm" title = "HOBITS HOME"/>
				</article>

				<article className="Image-Container">
					<img src={img1} alt="NautreImg" onClick={handleNine}/>
					<ImageModal id="nine" src={img1} show={nine} Close={handleNoNine} text="Lush forest, rain-soaked leaves, misty air, echoing with nature's symphony" title = "MISTY FOREST"/>
				</article>

				<article className="Image-Container">
					<img src={img2} alt="NautreImg" onClick={handleTen}/>
					<ImageModal id="ten" src={img2} show={ten} Close={handleNoTen} text="Golden sands, azure waters, palm trees, and paradise beneath the sun" title = "TROPICAL SAND"/>
				</article>

				<article className="Image-Container">
					<img src={img3} alt="NautreImg" onClick={handleEleven}/>
					<ImageModal id="eleven" src={img3} show={eleven} Close={handleNoEleven} text="Mystical cascades vanish in ethereal mist, an enchanting watery veil" title = "ENCHANTED WATERFALLS"/>
				</article>

				<article className="Image-Container">
					<img src={img4} alt="NautreImg" onClick={handleTwelve}/>
					<ImageModal id="tewlve" src={img4} show={twelve} Close={handleNoTwelve} text="Lush forested cliff meets sandy beach, nature's harmonious coastal contrast" title = "NATURE'S PARADISE"/>
				</article>

				<article className="Image-Container">
					<img src={img5} alt="NautreImg" onClick={handleFourteen}/>
					<ImageModal id="fourteen" src={img5} show={fourteen} Close={handleNoFourteen} text="Gentle deer resting beneath towering trees, a forest's serene tableau." title = "A DEER'S NEST"/>
				</article>

				<article className="Image-Container">
					<img src={img6} alt="NautreImg" onClick={handleFifteen}/>
					<ImageModal id="fifteen" src={img6} show={fifteen} Close={handleNoFifteen} text="Bamboo huts nestled by the shore, a tranquil beachside escape." title = "AWAY FROM CHAOS"/>
				</article>

				<article className="Image-Container">
					<img src={img7} alt="NautreImg" onClick={handleSixteen}/>
					<ImageModal id="sixteen" src={img7} show={sixteen} Close={handleNoSixteen} text="Secluded lake glistens within the foothills, a hidden nature's treasure." title = "SUNSET IN PARADISE"/>
				</article>

			</Container>

			<footer>
				<div class="footer-copyright text-center">&copy; Developed with ❤️ by 
					<a href="http://prajwalbr.info" class="white-text"> Prajwal B R</a>. <a href="http://prajwalbr.info">Check out my website </a>
				</div>
			</footer>
		</center>
	)
}

export default Art;