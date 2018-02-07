import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<header>			
			<h1>{props.title}</h1>
			<img src={props.logo} className="App-logo" alt="logo" />
		</header>
	)	
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header;