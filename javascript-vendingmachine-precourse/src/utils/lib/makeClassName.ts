const makeClassName = (classList: string | (string | undefined)[]) => {
  return Array.isArray(classList)
    ? classList
        .map((className) => {
          if (className === undefined) {
            throw new Error('해당 클래스는 존재하지 않습니다.');
          }
          return className;
        })
        .join(' ')
    : classList;
};

export default makeClassName;
