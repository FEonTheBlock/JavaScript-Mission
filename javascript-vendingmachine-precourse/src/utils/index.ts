export const addClassWithoutExcept = (
  className: string,
  $els: Element[],
  excepts?: string[]
) => {
  $els.forEach(($el) => {
    excepts?.length && excepts.find((except) => $el.classList.contains(except))
      ? $el.classList.remove(className)
      : $el.classList.add(className);
  });
};

// export const useData = <T = undefined>(
//   defaultValue?: T
// ): [() => T | undefined, (newValue: T) => void] => {
//   let value = defaultValue;
//   const setValue = (newValue: T) => {
//     value = newValue;
//     console.log('useState value', value);
//   };
//   const getValue = () => value;
//   return [getValue, setValue];
// };
