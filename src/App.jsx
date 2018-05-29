import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: '25 December, 2039',
			newDeadline: '',
		};
	}

	changeDeadline() {
		this.setState({
			deadline: this.state.newDeadline,
			newDeadline: '',
		});
	}

	render() {
		return (
			<div id="app">
				<div id="title">Countdown to {this.state.deadline}</div>
				<Clock deadline={this.state.deadline} />
				<div>
					<input
						id="deadline-input"
						onChange={event => this.setState({ newDeadline: event.target.value })}
						placeholder="Enter a valid date..."
					/>
					<button onClick={() => this.changeDeadline()}>Submit</button>
				</div>
			</div>
		);
	}
}

export default App;
