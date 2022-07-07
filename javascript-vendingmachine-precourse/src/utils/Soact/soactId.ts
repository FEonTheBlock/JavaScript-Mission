let soactId = 0;
export const getSoactId = () => soactId;
export const increaseId = () => {
  soactId++;
};
export const resetId = () => {
  soactId = 0;
};

export const SOACT_ID = 'data-soact-id';
