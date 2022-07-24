const PUT = async <T>(itemName: string, newData: T) => {
  localStorage.setItem(itemName, JSON.stringify(newData));
};

export default PUT;
