import { createElement } from '../../utils/Soact';

import { Navigation } from '../../components';

const VendingMachine = ({ children }: DefaultProps) => {
  return createElement(
    'main',
    null,
    `
      <h1>🍿 자판기 🍿</h1>
      ${Navigation()}
      ${children}
    `
  );
};

export default VendingMachine;
