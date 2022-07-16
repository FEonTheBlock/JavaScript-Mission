import { Product } from '../..';
import { useQuery } from '../../utils/SoactQuery/v1';
import setQueryData from '../../utils/SoactQuery/v1/setQueryData';
import useMutation from '../../utils/SoactQuery/v1/useMutation';
import * as localStorage from '../localStorage';

const queryKey = 'products';

// GET: products
export const useProductsQuery = () => {
  return useQuery<Product[]>(queryKey, () => localStorage.GET(queryKey, []));
};

// POST: product
export const useAddProductMutation = () => {
  return useMutation<Product>(
    (newData) => localStorage.POST(queryKey, newData),
    {
      onSuccess: ({ data }) => {
        setQueryData<Product[]>(queryKey, (prevData) => {
          return [...(prevData || []), data];
        });
      },
    }
  );
};

// PATCH: product
export const useUpdateProductMutation = () => {
  const key = 'name';
  return useMutation<Product>(
    (newData) => {
      return localStorage.PATCH(
        queryKey,
        { key, value: newData[key] },
        newData
      );
    },
    {
      onSuccess: ({ data: newData }) => {
        setQueryData<Product[]>(queryKey, (prevData) => {
          return prevData
            ? prevData.map((data) =>
                data[key] === newData[key] ? newData : data
              )
            : [];
        });
      },
    }
  );
};

// DELETE: product
export const useDeleteProductMutation = () => {
  const key = 'name';
  return useMutation<string>(
    (targetValue) => localStorage.DELETE(queryKey, { key, value: targetValue }),
    {
      onSuccess: ({ data: targetValue }) => {
        setQueryData<Product[]>(queryKey, (prevData) => {
          return prevData
            ? prevData.filter((data) => data[key] !== targetValue)
            : [];
        });
      },
    }
  );
};
