import { take, takeLeading, put, call, fork } from 'redux-saga/effects'
import { POSTS_RECEIVED, POSTS_REQUESTED } from '../features/action_types'

export async function requestPosts() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
   return data
}
export function* getPosts() {
   const data = yield call(requestPosts)
   yield put({ type: POSTS_RECEIVED, payload: data })
}
export function* workerSaga() {
   yield fork(getPosts)
}
export function* watcherSaga() {
   yield takeLeading(POSTS_REQUESTED, workerSaga)
}

export function* helloSaga() {
   yield watcherSaga()
}
