import {all} from 'redux-saga/effects';
import gallerySaga from './gallery,saga';

export default function* rootSaga() {
  yield all([gallerySaga()]);
}
