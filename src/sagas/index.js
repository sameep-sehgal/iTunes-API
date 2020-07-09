import { put, takeLatest, call } from 'redux-saga/effects';
import Types from './types';
import {fetchData} from '../api/iTunes';


export function* watchFetchData() {
  yield takeLatest(Types.FETCH_REQUESTED, fetchSongs)
}


export default function* fetchSongs(action){
    console.log(action);
    const fetchedSongs = yield call(fetchData,action.payload)
    console.log(fetchedSongs.data);
    yield put({ type: Types.FETCH_SONGS, payload:fetchedSongs.data });
}