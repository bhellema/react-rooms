/**
 * loadRoomsCreator creates a action that can be used to load rooms
 */

import rooms from '../rooms';

export const loadRoomsActionCreator = () => {
    return {
        type: 'LOAD_ROOMS',
        payload: {
            rooms: rooms
        }
    }
};