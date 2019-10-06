import React from 'react';
import Item from './Item';
import './index.css';

function List (props) {
	return (
		<div>
		{
			props.category.map(function(ele, i) {
			return (
				<div className = 'category' key={i}>
					<Item category={ele}/>
				</div>
				)

			})
		}
		</div>
		)
	
}

export default List;
