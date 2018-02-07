import React from 'react';

import Room from '../room/Room';
import rooms from '../../data/rooms';
import './Rooms.css';

class Rooms extends React.Component {

    render() {
        return (
            <div className='rooms'>
                {
                    rooms.map( (room, index) =>
                        <Room key={index} name={room.name} av={room.av} seats={room.seats}/>
                    )
                }
            </div>
        )
    }
}

export default Rooms;