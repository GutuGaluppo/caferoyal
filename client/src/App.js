import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FileUpload from './Components/FileUpload';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Directos from './Components/Directors';
import Entertainment from './Components/Entertainment';
import About from "./Components/About";
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
	return (
		<Router>
			<div className="container mt-4">
				<Nav />
				<Switch>
					<Route path='/' exact component={ Home }/>
					<Route path='/directors' exact component={ Directos }/>
					<Route path='/entertainment' component={ Entertainment }/>
					<Route path='/about' component={ About }/>
					<Route path='/contact' component={ Contact }/>
					<Route path='/upload' component={ FileUpload }/>
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
