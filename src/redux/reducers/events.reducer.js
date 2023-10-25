const eventsList = (state = [], action) => {
  switch(action.type) {
    case 'SET_EVENTS_LIST':
      return action.payload;

    case 'SET_EVENTS_FOR_FAMILY_MEMBER':
      return action.payload;  

      case 'DELETE_SUCCESS':
        const eventToDelete = action.payload;
        return state.filter((event) => event.event_id !== eventToDelete);
  

      default:
        return state;
  }
};

export default eventsList;