const intialState = 0;

const changeNumber = (state = intialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 10;
    case 'DECREMENT':
      return state - 5;
    default:
      return state;
  }
};

export default changeNumber;
