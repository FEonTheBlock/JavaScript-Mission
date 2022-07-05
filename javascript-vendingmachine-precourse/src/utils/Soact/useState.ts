import RootComponent from '../../';

let stateId = 0;

interface Store {
  [id: number]: unknown;
}
let store: Store = {};

const permissionState = <State>(state: State) => {
  if (!store[stateId]) {
    store[stateId] = state;
  }

  return store[stateId] as State;
};

const useState = <InitState>(
  initialState: InitState
): [InitState, typeof setState] => {
  const currentStateId = stateId;
  const state = permissionState(initialState);
  const setState = (nextState: InitState) => {
    if (Object.is(store[currentStateId], nextState)) {
      return;
    }
    store[currentStateId] = nextState;
    stateId = 0;
    RootComponent();
  };

  stateId++;
  return [state, setState];
};

export default useState;
