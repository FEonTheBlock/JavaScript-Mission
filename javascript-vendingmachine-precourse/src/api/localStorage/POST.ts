const POST = async <T>(itemName: string, newData: T) => {
  const prevData = JSON.parse(localStorage.getItem(itemName) || '');
  if (Array.isArray(prevData)) {
    localStorage.setItem(itemName, JSON.stringify([...prevData, newData]));
  } else {
    throw new Error('데이터 추가에 실패했습니다.');
  }
};

export default POST;
