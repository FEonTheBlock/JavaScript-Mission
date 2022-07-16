export interface State<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
}

interface Store {
  [key: string]: State<any> | undefined;
}

export const store: Store = {};

export const getState = (key: string) => store[key];

export const setState = <T>(key: string, state: State<T>) => {
  store[key] = state;
};

export const deleteState = (key: string) => {
  if (store[key]) {
    delete store[key];
  } else {
    throw new Error(`해당 ${key}의 데이터는 존재하지 않습니다.`);
  }
};
