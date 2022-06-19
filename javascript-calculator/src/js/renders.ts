const render = (totalValue: string) => {
  const $total = document.getElementById('total');

  if (!$total) return;

  $total.textContent = totalValue;
};

export default render;
