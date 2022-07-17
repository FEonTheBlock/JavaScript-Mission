import { updateDOM } from '../../Soact/v2/manageDOM';
import makeKey from './makeKey';
import { deleteState } from './store';

const invalidateQueries = (queryKey: string | string[]) => {
  const key = makeKey(queryKey);
  deleteState(key);
  updateDOM();
};

export default invalidateQueries;
