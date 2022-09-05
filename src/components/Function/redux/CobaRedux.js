import { legacy_createStore as createStore } from "redux";

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

const CobaRedux = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "counter/incremented":
      if (state.value < 10) return { value: state.value + 1 };
    case "counter/decremented":
      if (state.value > 0) return { value: state.value - 1 };
    default:
      return state;
  }
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(CobaRedux);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
for (let i = 0; i < 15; i++) {
  store.dispatch({ type: "counter/incremented" });
}
// {value: 1}
// {value: 2}
for (let i = 12; i > 0; i--) {
  store.dispatch({ type: "counter/decremented" });
}
/* store.dispatch({ type: "counter/decremented" });
store.dispatch({ type: "counter/decremented" }); */
// {value: 1}

export default CobaRedux;
