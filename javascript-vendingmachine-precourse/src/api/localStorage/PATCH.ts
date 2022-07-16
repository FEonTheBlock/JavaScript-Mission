const PATCH = async <T>(
  itemName: string,
  target: { key: string; value: string },
  newData: T
) => {
  const prevData = JSON.parse(localStorage.getItem(itemName) || '');
  if (Array.isArray(prevData)) {
    localStorage.setItem(
      itemName,
      JSON.stringify(
        prevData.map((data) =>
          data[target.key] === target.value ? newData : data
        )
      )
    );
  } else {
    throw new Error('PATCH에 적합한 data형식이 아닙니다.');
  }
};

export default PATCH;
