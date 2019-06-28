import {FETCH_START,
        FETCH_SUCCESS,
        FETCH_FAILURE,}
        from "../actions";
const initialState = {
  characters: [],
  error: '',
  isFetching: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.from
    case FETCH_START:
    return{
      ...state,
      error: FETCH_START,
      isFetching: true,
    };
    case FETCH_SUCCESS:
      return{
        ...state,
        error: action.payload,
        isFetching: false,
        characters: action.payload
      };    
    case FETCH_FAILURE:
      return{
        ...state,
        error: action.payload,
        isFetching: false
      };
      default:
      return state;
  }
};
