import React from 'react';
import Item from './Item';

class List extends React.Component {
	render() {

		const list = props.categories.map(function(ele, i) {
			return (
				<div className = 'category' key={i}>
					<Item category={ele}/>
				</div>
				)

			});

	}

}

export default List;
