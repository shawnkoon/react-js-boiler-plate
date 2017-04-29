import * as types from './actionTypes';

export const addUser = user => (
	{
		type: types.ADD_USER,
		user,
	}
);

export const deleteUser = id => (
	{
		type: types.DELETE_USER,
		id,
	}
);