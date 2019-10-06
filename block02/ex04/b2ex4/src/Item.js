import React from 'react';
import './index.css';

function Item (props) {
	
		return (
			<div>
				<h1 className='color'>{props.category}</h1>
			</div>
			)
}

export default Item;