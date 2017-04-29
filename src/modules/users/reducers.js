import * as types from './actionTypes';

const initialUserState = {
	users: [],
};

export const userReducer = (state = initialUserState, action) => {
	switch(action.type) {
		case types.ADD_USER:
		case types.DELETE_USER:
		default:
			return state;
	}
};