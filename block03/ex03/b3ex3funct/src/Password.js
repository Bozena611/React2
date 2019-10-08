import React from 'react';

const Pass = (props) => {

	return (

		<div>
			<input onChange = {props.handlePassChange}
            type="text"          
            placeholder="Your password"/> 
        </div>
	)

}
export default Pass; 