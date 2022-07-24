import { ERRORS, ERROR_BOUNDARIES } from './constants.js';
import { getData } from './storage.js';

// 상품 추가 - 상품 아이디 생성
export const makeProductId = () =>
  Math.max(...(getData('productList') ?? []).map(prod => prod.id), 0) + 1;

// 상품 추가 - 유효성 검사
export const validateProdInfo = ({ prodName, prodPrice, prodQuantity }) => {
  // 상품명 미입력
  if (!prodName.trim().length) throw new Error(ERRORS.PROD_ADD.EMPTY_PROD_NAME);

  // 상품 최소 금액 미만
  if (prodPrice <= ERROR_BOUNDARIES.PRODUCT_ADD.MINIMUM_PRICE)
    throw new Error(ERRORS.PROD_ADD.WRONG_PROD_PRICE);

  // 상품 가격 이상
  if (prodPrice % 10 !== 0) throw new Error(ERRORS.PROD_ADD.WRONG_PRICE_UNIT);

  // 상품 수량 이상
  if (prodQuantity <= 0) throw new Error(ERRORS.PROD_ADD.WRONG_QUANTITY);

  // 상품 중복
  if ((getData('productList') ?? []).map(prod => prod.name).includes(prodName))
    throw new Error(ERRORS.PROD_ADD.DUPLICATE_PROD_NAME);
};

// 잔돈 교환 - 유효성 검사
export const validateChange = changeInput => {
  // 잔돈이 0원 이하로 입력된 경우
  if (changeInput <= 0) throw new Error(ERRORS.CHANGE.EMPTY_CHANGE_AMOUNT);

  // 잔돈 단위 이상
  if (changeInput % 10 !== 0) throw new Error(ERRORS.CHANGE.WRONG_CHANGE_UNIT);
};

// 상품 구매 - 등록된 상품 여부 확인
export const validateProdList = () => {
  const productList = getData('productList') ?? null;
  if (!productList) throw new Error(ERRORS.PURCHASE.EMPTY_PRODUCT_LIST);
};

// 상품 구매 - 잔돈 확인
export const validateChanges = () => {
  const changeInfo = getData('changeInfo') ?? 0;
  if (!changeInfo) throw new Error(ERRORS.PURCHASE.EMPTY_CHANGE);
  changeInfo;
};
