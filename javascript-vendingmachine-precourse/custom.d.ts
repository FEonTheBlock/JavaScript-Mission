declare module '@woowacourse/mission-utils' {
  export type PickNumberInList = <T = number>(array: T[]) => T;

  export class Random {
    static pickNumberInList: PickNumberInList;
  }
}
