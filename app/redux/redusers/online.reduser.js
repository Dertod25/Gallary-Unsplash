import {STATUS_CONNECTION, STATUS_MODAL} from '../actions/online';
const initialState = {
  isConnected: null,
  isShowModal: false,
  isRecovery: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CONNECTION:
      return {
        ...state,
        isConnected: action.status,
        isRecovery: action.status && state.isConnected === false ? true : false,
      };
    case STATUS_MODAL:
      return {
        ...state,
        isShowModal: action.status,
      };

    default:
      return state;
  }
}
