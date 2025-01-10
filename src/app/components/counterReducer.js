function counterReducer(state, action) {

    console.log("action, state", action, state)
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count+1};
    case "DECREMENT":
      return {count: state.count-1};
    default:
      return state;
  }
}


export default counterReducer