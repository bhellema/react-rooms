import React from 'react';

import './HeaderBar.css';

class HeaderBar extends React.Component {

    render() {
        return (
            <header className="headerBar">          
                <h1>{this.props.title}</h1>
                <img src={this.props.logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}

export default HeaderBar;