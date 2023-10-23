const eventsList = (state = [], action) => {
  switch(action.type) {
    case 'SET_EVENTS_LIST':
      return action.payload;
    case 'SET_EVENTS_FOR_FAMILY_MEMBER':
      return action.payload;  

      default:
        return state;
  }
};

export default eventsList;