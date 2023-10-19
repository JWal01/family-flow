import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET
function* fetchMember() {
  try {
    let response = yield axios.get('api/member');
    console.log('fetched member data in saga', response.data);
    yield put({ type: 'SET_MEMBER_LIST', payload: response.data});
  } catch (error) {
    console.log(('ERROR in fetchMember', error));
    alert('Something sent wrong!');
  }
};

function* addMember(action) {
  try{
    yield axios.post('/api/member', action.payload);
    yield put ({ type: 'FETCH_MEMBER_LIST'});
  } catch (error) {
    console.log('ERROR in addMember', error);
    alert('Something went wrong!');
  }
}




function* memberSaga() {
  yield takeLatest('FETCH_MEMBER_LIST', fetchMember);
  yield takeLatest('ADD_MEMBER', addMember );
}

export default memberSaga;