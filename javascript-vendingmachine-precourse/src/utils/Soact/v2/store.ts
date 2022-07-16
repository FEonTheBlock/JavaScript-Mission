interface Store {
  [id: number]: unknown;
}

let store: Store = {};
export let stateId = 0;

export const resetStore = () => {
  store = {};
};

export const resetStateId = () => {
  stateId = 0;
};

export const increaseStateId = () => {
  stateId++;
};

export const permissionState = <State>(state: State) => {
  if (store[stateId] === undefined) {
    store[stateId] = state;
  }

  return store[stateId] as State;
};

export const getStoreState = (stateId: number) => store[stateId];

export const setStoreState = <NextState>(
  stateId: number,
  nextState: NextState
) => {
  store[stateId] = nextState;
};
