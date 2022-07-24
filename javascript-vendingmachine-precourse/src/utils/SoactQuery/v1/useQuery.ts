import { updateDOM } from '../../Soact/v2/manageDOM';
import makeKey from './makeKey';
import { getState, setState } from './store';

const useQuery = <T>(
  queryKey: string | string[],
  fetchFunc: () => Promise<T>
): SoactQueryState<T> => {
  const initState = { data: undefined, isLoading: true, isError: false };
  const key = makeKey(queryKey);
  const info = getState(key);

  if (info) {
    return info;
  } else {
    (async () => {
      let data;
      try {
        data = await fetchFunc();
        setState(key, {
          data,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        setState(key, {
          data,
          isLoading: false,
          isError: true,
        });
      }
      updateDOM();
    })();
    setState(key, initState);
    return initState;
  }
};

export default useQuery;
