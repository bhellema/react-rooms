import React from 'react';
import PropTypes from 'prop-types';

import './Room.css';

class Rooms extends React.Component {

    state = {
        selected: false
    };

    render() {
        let cn = 'room ';
        cn += this.props.av ? 'av ' : '';
        cn += this.state.selected ? 'selected ' : '';

        return (
            <div className={cn} onClick={() => this.setState({selected: !this.state.selected})}>
                <span className="name">{this.props.name}</span>
                <span className="seats">Seats {this.props.seats}</span>
            </div>
        )
    }
}

Rooms.propTypes = {
    name: PropTypes.string.isRequired,
    av: PropTypes.bool,
    seats: PropTypes.number
};

export default Rooms;