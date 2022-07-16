import { updateDOM } from '../../Soact/v2/manageDOM';
import { deleteState } from './store';

const invalidateQueries = (queryKey: string | string[]) => {
  const key = Array.isArray(queryKey) ? queryKey.join('&') : queryKey;
  deleteState(key);
  updateDOM();
};

export default invalidateQueries;
