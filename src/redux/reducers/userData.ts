import {
    SET_USER_DATA_REQUEST,
    SET_USER_DATA_SUCCESS,
    SET_USER_DATA_FAILURE,
    SET_TOTAL_DATA,
    UserDataActionTypes,
  } from '../actions';
  
  interface UserDataState {
    data: Array<any>;
    loading: boolean;
    error: string | null;
    total: number;
  }
  
  const initialState: UserDataState = {
    data: [], 
    loading: false,
    error: null,
    total: 0
  };
  
  const userDataReducer = (
    state = initialState,
    action: UserDataActionTypes
  ): UserDataState => {
    switch (action.type) {
      case SET_USER_DATA_REQUEST:
        return { ...state, loading: true, error: null};
      case SET_USER_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case SET_USER_DATA_FAILURE:
        return { ...state, loading: false, data: [], error: action.error };
      case SET_TOTAL_DATA:
        return {...state, total: action.payload}
      default:
        return state;
    }
  };

  export default userDataReducer;
