const eventsList = (state = [], action) => {
  switch(action.type) {
    case 'SET_EVENTS_LIST':
      return action.payload;
      default:
        return state;
  }
};

export default eventsList;