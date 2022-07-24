import { coins } from '../constants'
import { Change } from '../types'

export const distributeChargingChange = (amount: number) => {
  const changeComposition: Change = { 10: 0, 50: 0, 100: 0, 500: 0 }

  let remain = amount
  ;[...coins].reverse().forEach((coin) => {
    const coinCount = Math.floor(remain / coin)
    changeComposition[coin] += coinCount
    remain -= coinCount * coin
  })

  return changeComposition
}

export const distributeReturnChange = (storeChange: Change, amount: number) => {
  const change: Change = { 10: 0, 50: 0, 100: 0, 500: 0 }

  let remain = amount
  ;[...coins].reverse().forEach((coin) => {
    const usableAmountOfCoin = coin * storeChange[coin]

    if (remain >= usableAmountOfCoin) {
      change[coin] += storeChange[coin]
      remain -= usableAmountOfCoin
    } else {
      const coinCount = Math.floor(remain / coin)
      change[coin] += coinCount
      remain -= coinCount * coin
    }
  })

  return change
}
