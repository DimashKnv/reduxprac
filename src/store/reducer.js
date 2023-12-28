//types
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const RESET_COUNT = "RESET_COUNT";
const UPDATE_TEXT = "UPDATE_TEXT";
//Countreducer
let countInitialState = { count: 0 };
export function counterReducer(state = countInitialState, action) {
  if (action.type == "INCREMENT_COUNT") {
    return { ...state, count: state.count + action.payload };
  }
  if (action.type == "DECREMENT_COUNT") {
    return { ...state, count: state.count - action.payload };
  }
  if (action.type == "RESET_COUNT") {
    return { ...state, count: 0 };
  }
  return state;
}

export function incrementAction(step) {
  return { type: INCREMENT_COUNT, payload: step };
}
export function decrementAction(step) {
  return { type: DECREMENT_COUNT, payload: step };
}
export function resetAction() {
  return { type: RESET_COUNT };
}

//textreducer
let textInitialState = { text: "" };
export function textReducer(state = textInitialState, action) {
  if (action.type == UPDATE_TEXT) {
    return { ...state, text: action.payload };
  }
  return state;
}
export function updateText(value) {
  return { type: UPDATE_TEXT, payload: value };
}
