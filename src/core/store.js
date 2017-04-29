// Lib
import { combineReducers, createStore } from 'redux';

// Reducers
import { userReducer } from 'modules/users';

export const configureStore = () => (
	createStore(
		combineReducers({
			userState: userReducer,
		})
	)
);