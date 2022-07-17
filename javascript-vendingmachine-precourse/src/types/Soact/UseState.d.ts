interface Store {
  [id: number]: unknown;
}

interface Dispatcher<T> {
  (nextState: T): void;
}
