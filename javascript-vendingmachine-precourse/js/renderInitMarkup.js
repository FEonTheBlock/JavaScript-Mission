const renderInitMarkup = () => {
  const $app = document.querySelector('#app');
  const headerTemplate = `<header>
  <h1 id="title">Vending Machine</h1>
    <nav>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
    </nav>
  </header>`;
  const mainTemplate = `<main>
    <section id="section">
    </section>
  </main>`;
  $app.innerHTML = headerTemplate + mainTemplate;
};

export default renderInitMarkup;
