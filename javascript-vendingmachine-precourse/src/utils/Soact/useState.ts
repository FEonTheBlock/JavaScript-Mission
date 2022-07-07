import RootComponent from '../../';
import {
  permissionState,
  stateId,
  getState,
  setStore,
  resetStateId,
  increaseStateId,
} from './store';

const useState = <InitState>(
  initialState: InitState
): [InitState, typeof setState] => {
  const currentStateId = stateId;
  const state = permissionState(initialState);
  const setState: SetState<InitState> = (nextState) => {
    if (Object.is(getState(currentStateId), nextState)) {
      return;
    }
    setStore(currentStateId, nextState);
    resetStateId();
    RootComponent(false);
  };

  increaseStateId();
  return [state, setState];
};

export default useState;
