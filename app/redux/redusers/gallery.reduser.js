import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from '../actions/gallery';
const initialState = {
  images: [],
  isLoading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: [...action.data, ...state.images],
      };
    case GET_IMAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
