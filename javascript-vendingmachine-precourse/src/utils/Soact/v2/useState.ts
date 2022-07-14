import { updateDOM } from './manageDOM';
import {
  store,
  permissionState,
  stateId,
  getState,
  setStore,
  resetStateId,
  increaseStateId,
} from './store';

const useState = <T>(initialState: T): [T, Dispatcher<T>] => {
  console.log({ store, stateId });
  const currentStateId = stateId;
  const state = permissionState(initialState);
  const setState = (nextState: T) => {
    if (Object.is(getState(currentStateId), nextState)) {
      return;
    }
    setStore(currentStateId, nextState);
    resetStateId();
    updateDOM();
  };

  increaseStateId();
  return [state, setState];
};

export default useState;
