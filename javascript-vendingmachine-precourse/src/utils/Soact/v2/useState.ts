import { updateDOM } from './manageDOM';
import {
  permissionState,
  stateId,
  getStoreState,
  setStoreState,
  increaseStateId,
} from './store';

const useState = <T>(initialState: T): [T, Dispatcher<T>] => {
  const currentStateId = stateId;
  const state = permissionState(initialState);
  const setState = (nextState: T) => {
    if (Object.is(getStoreState(currentStateId), nextState)) {
      return;
    }
    setStoreState(currentStateId, nextState);
    updateDOM();
  };

  increaseStateId();
  return [state, setState];
};

export default useState;
