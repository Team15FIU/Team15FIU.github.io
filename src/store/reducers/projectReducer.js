const initState = {
  sortOrder: "none"
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;

    case 'CHANGE_SORT_ORDER':
      return {
        sortOrder: action.payload
      };
      return state;
    default:
      return state;
  }
};

export default projectReducer;