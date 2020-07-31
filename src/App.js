import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Directors from './Components/Directors';
import Entertainment from './Components/Entertainment';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';


function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={ Home } />
					<Route path='/directors' exact component={ Directors } />
					<Route path='/entertainment' component={ Entertainment } />
					<Route path='/about' component={ About } />
					<Route path='/contacts' component={ Contact } />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
