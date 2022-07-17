import { useQuery, useMutation, setQueryData } from '../../utils/SoactQuery/v1';
import * as localStorage from '../localStorage';

const queryKey = 'money';

// GET: money
export const useMoneyQuery = () => {
  return useQuery<number>(queryKey, () => localStorage.GET(queryKey, 0));
};

// PUT: money
export const useUpdateMoneyMutation = () => {
  return useMutation<number>((newData) => localStorage.PUT(queryKey, newData), {
    onSuccess: ({ data }) => {
      setQueryData(queryKey, () => data);
    },
  });
};
