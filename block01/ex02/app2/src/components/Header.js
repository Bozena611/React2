import React from 'react';
import './Header.css';

class Header extends React.Component {
	render() {
		return(
			<div>
				<header>
					<ul className='nav'>
						<li>Home</li>
						<li>About us</li>
						<li>Basket</li>
						<li>My account</li>
					</ul>
					<h1 className ='title'>Our products</h1>
					<hr/>
				</header>
			</div>
			);
	}
}


/*
<header className = 'nav' style= {{styles.nav}>

<ul style= {{display: 'flex', justifyContent: 'space-between'}}>  - WORKING!! BUT can't get rest


const styles = {
nav: {
  display: 'flex'
}

  //justifyContent:'space-between'
  background: 'black',
  color: 'white',
  padding: 1% 10%
  //position: fixed; /* makes navbar smaller and flex not working
  }
}

/*const styles = {
	navbar: {
		background: 'grey'
	},
	ul: {
		display: 'flex'
		alignItems: 'center'		
	}

}*/
export default Header;
