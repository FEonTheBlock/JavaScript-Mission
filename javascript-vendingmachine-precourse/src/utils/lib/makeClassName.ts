const makeClassName = (classList: (string | undefined)[]) => {
  return classList
    .map((className) => {
      if (className === undefined) {
        throw new Error('해당 클래스는 존재하지 않습니다.');
      }
      return className;
    })
    .join(' ');
};

export default makeClassName;
