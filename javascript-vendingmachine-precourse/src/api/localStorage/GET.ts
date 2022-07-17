const GET = async <T>(itemName: string, initItem: T) => {
  const data = localStorage.getItem(itemName);
  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initItem));
    return initItem;
  }
};

export default GET;
