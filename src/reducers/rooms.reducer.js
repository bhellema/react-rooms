import { LOAD_ROOMS } from '../actions/ActionConstants'

const rooms = (state = [], action) => {
    switch (action.type) {
        case LOAD_ROOMS: {
            return [...action.payload.rooms]
        }
        default:
            return state;
    }
};

export default rooms;