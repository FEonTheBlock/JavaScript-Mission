declare module '@woowacourse/mission-utils' {
  export type PickNumberInList = (
    array: (10 | 50 | 100 | 500)[]
  ) => 10 | 50 | 100 | 500

  export class Random {
    static pickNumberInList: PickNumberInList
  }
}
