// 로컬 스토리지 get, set
export const getData = key => JSON.parse(window.localStorage.getItem(key));
export const setData = (key, data) => window.localStorage.setItem(key, JSON.stringify(data));
