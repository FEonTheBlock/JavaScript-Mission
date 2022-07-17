export const store: SoactQueryStore = {};

export const getState = (key: string) => store[key];

export const setState = <T>(key: string, state: SoactQueryState<T>) => {
  store[key] = state;
};

export const deleteState = (key: string) => {
  if (store[key]) {
    delete store[key];
  } else {
    throw new Error(`해당 ${key}의 데이터는 존재하지 않습니다.`);
  }
};
