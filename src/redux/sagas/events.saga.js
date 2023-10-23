import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET
function* fetchEvents() {
  try {
    let response = yield axios.get('api/events');
    console.log('fetched events data in saga', response.data);
    yield put({ type: 'SET_EVENTS_LIST', payload: response.data});
  } catch (error) {
    console.log(('ERROR in fetchEvents', error));
    alert('Something sent wrong!');
  }
};

function* addEvents(action) {
  try{
    yield axios.post('/api/events', action.payload);
    yield put ({ type: 'FETCH_EVENTS_LIST'});
  } catch (error) {
    console.log('ERROR in addEvents', error);
    alert('Something went wrong!');
  }
}


function* fetchEventsForFamilyMember(action) {
  try {
    const familyMemberId = action.payload;
    const response = yield axios.get(`/api/events/familyMember/${familyMemberId}`);
    yield put({ type: 'SET_EVENTS_FOR_FAMILY_MEMBER', payload: response.data });
  } catch (error) {
    console.log('ERROR in fetchEventsForFamilyMember', error);
  }
}






function* eventSaga() {
  yield takeLatest('FETCH_EVENTS_LIST', fetchEvents);
  yield takeLatest('ADD_EVENTS', addEvents );
  yield takeLatest('FETCH_EVENTS_FOR_FAMILY_MEMBER', fetchEventsForFamilyMember);

}

export default eventSaga;