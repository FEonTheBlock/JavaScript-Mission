interface Store {
  [id: number]: unknown;
}

export const store: Store = {};
export let stateId = 0;

export const resetStateId = () => {
  stateId = 0;
};

export const increaseStateId = () => {
  stateId++;
};

export const permissionState = <State>(state: State) => {
  if (!store[stateId]) {
    store[stateId] = state;
  }

  return store[stateId] as State;
};

export const getState = (stateId: number) => store[stateId];

export const setStore = <NextState>(stateId: number, nextState: NextState) => {
  store[stateId] = nextState;
};
