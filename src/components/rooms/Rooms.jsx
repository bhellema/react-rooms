import React from 'react';
import { connect } from 'react-redux';

import Room from '../room/Room';
import './Rooms.css';


const mapStateToProps = (store, ownProps) => {
    return {
        rooms: store.rooms
    }
};

class Rooms extends React.Component {

    render() {
        return (
            <div className='rooms'>
                {
                    this.props.rooms.map( (room, index) =>
                        <Room key={index} name={room.name} av={room.av} seats={room.seats}/>
                    )
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Rooms);