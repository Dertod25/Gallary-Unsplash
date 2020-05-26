import {put, takeEvery} from 'redux-saga/effects';
import {getRandomImages} from '../../helpers/api.helper';
import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from '../actions/gallery';

function* getImages() {
  try {
    const data = yield getRandomImages();
    yield put({type: GET_IMAGES_SUCCESS, data});
  } catch (e) {
    yield put({type: GET_IMAGES_FAILURE});
  }
}

function* gallerySaga() {
  yield takeEvery(GET_IMAGES, getImages);
}

export default gallerySaga;
