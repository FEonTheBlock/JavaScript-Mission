const DELETE = async (
  itemName: string,
  target: { key: string; value: string }
) => {
  const prevData = JSON.parse(localStorage.getItem(itemName) || '');
  if (Array.isArray(prevData)) {
    localStorage.setItem(
      itemName,
      JSON.stringify(
        prevData.filter((data) => data[target.key] !== target.value)
      )
    );
  } else {
    throw new Error('DELETE에 적합한 data형식이 아닙니다.');
  }
};

export default DELETE;
