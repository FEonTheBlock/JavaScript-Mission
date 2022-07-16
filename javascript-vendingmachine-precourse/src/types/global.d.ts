declare module '@woowacourse/mission-utils' {
  export const Random: {
    pickNumberInList: <T>(array: T[]) => T;
  };
}
declare namespace JSX {
  type IntrinsicElements = {
    [key in keyof HTMLElementTagNameMap]: any;
  };
}
