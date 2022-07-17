interface SoactQueryState<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
}
interface SoactQueryStore {
  [key: string]: SoactQueryState<any> | undefined;
}
