import React from 'react';

class Email extends React.Component {

	state = {
		mail:''
	}

	handleEmailChange = (e) => {
		this.setState({mail: e.target.value})
		this.props.getMail(e.target.value);
	}

	render() {
		return(

			<div>
				<input 
				onChange = {this.handleEmailChange}
				name="mail"
	            type="text"          
	            placeholder="Your email" 
	            value ={this.state.mail}/>
	        </div>
	)

}
}
export default Email; 



 