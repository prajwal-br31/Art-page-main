import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Art from './components/Art';
import Services from './components/services.js'

function App() {
  return (
	  <Router>
		<div className="App">
			<Route exact path="/" component={Art} />
			<Route exact path="/about" component={About} />
			<Route exact path="/services" component={Services} />

		</div>
	  </Router>	
  );
}

export default App;
