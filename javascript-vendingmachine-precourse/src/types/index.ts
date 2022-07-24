export interface Product {
  name: string
  price: number
  quantity: number
}

export type Count = number

export interface Change {
  10: Count
  50: Count
  100: Count
  500: Count
}

export interface Store {
  products: Record<string, Product>
  change: Change
  inputAmount: number
}
