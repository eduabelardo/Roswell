import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Timer from './components/Time-tracking.jsx';

function App() {
	return (
		<div className='App'>
			<Route exact path={'/'} component={Timer} />
		</div>
	);
}

export default App;
