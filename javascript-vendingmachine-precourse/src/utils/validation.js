import { ERRORS } from './constants.js';
import { getData } from './storage.js';

// 상품 추가 - 상품 아이디 생성
export const makeProductId = () =>
  Math.max(...(getData('productList') ?? []).map(prod => prod.id), 0) + 1;

// 상품 추가 - 유효성 검사
export const validateProdInfo = ({ prodName, prodPrice, prodQuantity }) => {
  // 상품명 미입력
  if (prodName === '') throw new Error(ERRORS.PROD_ADD.EMPTY_PROD_NAME);

  // 상품 가격 이상
  if (prodPrice % 10 !== 0) throw new Error(ERRORS.PROD_ADD.WRONG_PRICE_UNIT);

  // 상품 수량 이상
  if (prodQuantity <= 0) throw new Error(ERRORS.PROD_ADD.WRONG_QUANTITY);

  // 상품 중복
  if ((getData('productList') ?? []).map(prod => prod.name).includes(prodName))
    throw new Error(ERRORS.PROD_ADD.DUPLICATE_PROD_NAME);
};
