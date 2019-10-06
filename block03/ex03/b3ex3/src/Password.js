import React from 'react';

class Pass extends React.Component {

	state = {
		pass:''
	} 

	handlePassChange = e => {
		this.setState({pass: e.target.value})
		this.props.getPass(e.target.value);
	}

	render() {
		return (

			<div>
				<input 
				onChange = {this.handlePassChange}
	            type="text"          
	            placeholder="Your password" 
	            value={this.state.pass}/>
	        </div>
	)

}
}
export default Pass; 


  
 