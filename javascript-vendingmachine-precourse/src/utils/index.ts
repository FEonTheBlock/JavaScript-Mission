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
