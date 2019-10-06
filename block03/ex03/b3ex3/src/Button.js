import React from 'react';



class Button extends React.Component {
		
	handleOnClick = event => {
		alert(this.props.getData());
		};

	render() {
		return (
			<div>
				<button onClick ={this.handleOnClick}>Send</button>
			</div>
		)
	}
}


export default Button;

