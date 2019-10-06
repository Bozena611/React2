import React from 'react';
import Email from './Email';
import Password from './Password'; 



class Button extends React.Component {
		
	handleOnClick = event => {
		
		event.preventDefault();
		alert(this.getData);
		}

	render() {
		return (
			<div>
				<button onClick ={this.handleOnClick}>Send</button>
			</div>
		)
	}
}


export default Button;

