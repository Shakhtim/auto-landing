import { combineReducers } from 'redux';

const initialState = {};

const exampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;