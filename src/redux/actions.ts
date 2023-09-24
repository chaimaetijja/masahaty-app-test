
import getUsers from '../apiGatewayInMemory';

export const SET_USER_DATA_REQUEST = 'SET_USER_DATA_REQUEST';
export const SET_USER_DATA_SUCCESS = 'SET_USER_DATA_SUCCESS';
export const SET_USER_DATA_FAILURE = 'SET_USER_DATA_FAILURE';
export const SET_TOTAL_DATA = 'SET_TOTAL_DATA';

interface FetchUserDataRequestAction {
  type: typeof SET_USER_DATA_REQUEST;
  payload: number
}

interface FetchUserDataSuccessAction {
  type: typeof SET_USER_DATA_SUCCESS;
  payload: Array<any>; // Change to the appropriate data type
}

interface FetchUserDataFailureAction {
  type: typeof SET_USER_DATA_FAILURE;
  error: string;
}

interface SetTotalUserData {
    type: typeof SET_TOTAL_DATA;
    payload: number
  }
export type UserDataActionTypes =
  | FetchUserDataRequestAction
  | FetchUserDataSuccessAction
  | FetchUserDataFailureAction
  | SetTotalUserData;




export const fetchUserData =(offSet: number,limit: number) => {
  return async (dispatch:any) => {
    try {
      const {data, total} = await getUsers(offSet,limit); 
      console.log('data',data)
      console.log("total", total)
      dispatch({ type: SET_USER_DATA_SUCCESS, payload: data });
      dispatch({type: SET_TOTAL_DATA, payload: total })
    } catch (error) { console.log(error)
      dispatch({ type: SET_USER_DATA_FAILURE, error: '' });
    }
  };
};