const textSort = ([a]: [string, any], [b]: [string, any]) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

export default textSort;
