const memberList = (state = [], action) => {
  switch(action.type) {
    case 'SET_MEMBER_LIST':
      console.log('Setting memberList in the reducer:' , action.payload);
    return action.payload;
    default:
      return state;
  }
};

export default memberList;