import React from 'react';

const Email = (props) => {
	return (
		<div>
			<input 
			onChange = {props.handleEmailChange}
            type="text"          
            placeholder="Your email"/> 
        </div>
	)

}
export default Email; 