import { updateDOM } from '../../Soact/v2/manageDOM';
import { getState, setState, State } from './store';

const useQuery = <T>(
  queryKey: string | string[],
  fetchFunc: () => Promise<T>
): State<T> => {
  const initState = { data: undefined, isLoading: true, isError: false };
  const key = Array.isArray(queryKey) ? queryKey.join('&') : queryKey;
  const info = getState(key);

  if (info) {
    return info;
  } else {
    const fetchData = async () => {
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
    };
    fetchData();
    setState(key, initState);
    return initState;
  }
};

export default useQuery;
