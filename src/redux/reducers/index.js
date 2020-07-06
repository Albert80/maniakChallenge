import { combineReducers } from "redux";
import {
  FETCH_ROUTES_REQUEST, FETCH_ROUTES_SUCCESS, FETCH_ROUTES_FAILURE,
  FETCH_PAGE_FAILURE, FETCH_PAGE_REQUEST, FETCH_PAGE_SUCCESS
} from "../actions";

const initialState = {};

const routesReducer = (state=initialState, action) =>{
  switch (action.type) {
    case FETCH_ROUTES_REQUEST:
      return {...state, loading: true}
    case FETCH_ROUTES_SUCCESS:
      return {...state, loading: false, items: action.payload}
    case FETCH_ROUTES_FAILURE:
      return {...state, loading: false, items: []}
    default:
      return state;
  }
};

const pageReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_PAGE_REQUEST:
      return {...state, loading: true }
    case FETCH_PAGE_SUCCESS:
      return {...state, loading: false, content: action.payload }
    case FETCH_PAGE_FAILURE:
      return {...state, loading: false, content: {} }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routes: routesReducer,
  page: pageReducer,
});

export default rootReducer;