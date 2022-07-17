interface MutationConfig<Data> {
  onSuccess?: ({ data }: { data: Data }) => void;
  onError?: ({ data }: { data: Data }) => void;
}

const useMutation = <T>(
  fetchFunc: (newData: T) => Promise<void>,
  config: MutationConfig<T> = {}
) => {
  const mutate = async (newData: T) => {
    try {
      await fetchFunc(newData);
      config.onSuccess?.({ data: newData });
    } catch (error) {
      config.onError?.({ data: newData });
    }
  };

  return { mutate };
};

export default useMutation;
