import { updateDOM } from '../../Soact/v2/manageDOM';
import makeKey from './makeKey';
import { getState, setState } from './store';

const setQueryData = <T>(
  queryKey: string | string[],
  updater: (prevData: T | undefined) => T
) => {
  const key = makeKey(queryKey);
  const prevInfo = getState(key);

  if (prevInfo) {
    const data = updater(prevInfo.data);
    setState(key, {
      data,
      isLoading: false,
      isError: false,
    });
    updateDOM();
  } else {
    throw new Error(`[${key}]의 prevInfo가 없습니다.`);
  }
};

export default setQueryData;
