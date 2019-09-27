import React from 'react';

class Item extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.category}</h1>
			</div>
			)
	}
}

export default Item;