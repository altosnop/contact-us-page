import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

// Divided the page into separate main components

function App() {
	return (
		<>
			<div className='container'>
				<Header />
			</div>
			<div className='menu-line'></div>
			<div className='container'>
				<Main />
			</div>
			<Footer />
		</>
	);
}

export default App;
