const hydrateList: (() => void)[] = [];

export const addHydrate = (hydrate: () => void) => {
  hydrateList.push(hydrate);
};

export const runHydrate = () => {
  while (hydrateList.length) {
    const currentHydrate = hydrateList.shift();
    if (currentHydrate) {
      currentHydrate();
    }
  }
};
