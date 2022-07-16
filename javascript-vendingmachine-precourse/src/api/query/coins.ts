import { Coin } from '../..';
import { invalidateQueries, useQuery } from '../../utils/SoactQuery/v1';
import useMutation from '../../utils/SoactQuery/v1/useMutation';
import * as localStorage from '../localStorage';

const queryKey = 'coins';

// GET: coins
export const useCoinsQuery = () => {
  return useQuery<Coin[]>(queryKey, () =>
    localStorage.GET(queryKey, [
      { value: 500, quantity: 0 },
      { value: 100, quantity: 0 },
      { value: 50, quantity: 0 },
      { value: 10, quantity: 0 },
    ])
  );
};

// PUT: coins
export const useChangeCoinsMutation = () => {
  return useMutation<Coin[]>((newData) => localStorage.PUT(queryKey, newData), {
    onSuccess: () => {
      invalidateQueries(queryKey);
    },
  });
};
