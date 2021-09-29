import react from 'react'
import '@testing-library/jest-dom'

import { call, fork, put, takeLeading } from '@redux-saga/core/effects'
import { helloSaga, getPosts, workerSaga, watcherSaga, requestPosts } from './sagas'
import { POSTS_RECEIVED, POSTS_REQUESTED } from '../features/action_types'


describe('helloSaga', () => {
   const genObject = watcherSaga()
   const worker = workerSaga()
   const putPosts = getPosts()
   it('should take the leading action', () => {
      expect(genObject.next().value).toEqual(takeLeading(POSTS_REQUESTED, workerSaga))
   })
   it('should call getPosts', () => {
      expect(worker.next().value).toEqual(fork(getPosts))
   })
   it('should send request and dispatch data (put posts to state)', () => {
      let data
      expect(putPosts.next().value).toEqual(call(requestPosts))
      expect(putPosts.next().value).toEqual(put({ type: POSTS_RECEIVED, payload: data }))
   })
})
