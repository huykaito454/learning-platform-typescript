import getUser from './services'
import { call, put } from 'redux-saga/effects'
import { setUser, setError } from './userSlice'
import { TOKEN_KEY } from '../../constants'
export default function* handleGetUser({ payload }: any): any {
  try {
    const res = yield call(getUser, payload)
    yield put(setUser(res[0]))
  } catch (error) {
    yield put(setError(error))
    console.log(error)
  }
}

