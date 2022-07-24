import { getData, setData } from '../utils/storage.js';

export default class ChangeManageController {
  changeInfo;

  get changeInfo() {
    return this.changeInfo;
  }

  setChangeInfo(changeInput) {
    this.changeInfo.total += changeInput;
    this.changeInfo.coins = this.convertChangeToCoins(changeInput);
    setData('changeInfo', this.changeInfo);
  }

  constructor() {
    this.updateChangeInfo();
  }

  updateChangeInfo() {
    const initCoins = {
      coin500: 0,
      coin100: 0,
      coin50: 0,
      coin10: 0,
    };

    this.changeInfo = getData('changeInfo') ?? {
      total: 0,
      coins: initCoins,
    };
  }

  // 잔돈 무작위로 교환
  convertChangeToCoins(changeInput) {
    const { coins } = this.changeInfo;
    while (changeInput !== 0) {
      const convertedCoins = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
      // 남은 잔돈이 10원, 변환될 동전이 500원일 때는 교환 불가
      if (changeInput >= convertedCoins) {
        changeInput -= convertedCoins;
        coins[`coin${convertedCoins}`] += 1;
      }
    }
    return coins;
  }
}
