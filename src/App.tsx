import React from 'react';
import CounterComponent from './counter/CounterContainer';
import UserContainer from './user/UserContainer';

function App() {
	return (
		<div className='App'>
			<CounterComponent />
			<UserContainer />
		</div>
	);
}

export default App;
