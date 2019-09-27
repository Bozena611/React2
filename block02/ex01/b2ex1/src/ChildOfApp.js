import React from 'react';

class Child extends React.Component {
	render () {
		return (
			<h1>Hello {this.props.name}, I am  the <span>child</span> component!</h1>
		)
	}
}

export default Child;
