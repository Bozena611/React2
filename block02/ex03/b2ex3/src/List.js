import React from 'react';
import Item from './Item';

class List extends React.Component {

	render() {
		console.log("props",this.props);
		return (
		<div>
		{
			this.props.category.map(function(ele, i) {
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

}

export default List;
