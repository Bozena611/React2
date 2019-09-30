import React from 'react';

class ChildTwo extends React.Component {
	render() {
		return (
			<span>
			{" "} {this.props.lastname}
			</span>
		);
	}
}
 
export default ChildTwo;