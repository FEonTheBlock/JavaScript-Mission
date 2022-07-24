const productPurchase = document.getElementById('product-purchase');
const vendingMachineCharge = document.getElementById('vending-machine-charge');
const charge = document.getElementById('charge');
const productPurchaseItems = document.getElementById('product-purchase-items');
const chargeAmount = document.getElementById('charge-amount');

productPurchase.addEventListener('submit',(e)=>{
    e.preventDefault();

    const productNameInput = document.getElementById('product-name-input');
    const productPriceInput = document.getElementById('product-price-input');
    const productQuantityInput = document.getElementById('product-quantity-input');

    if(productNameInput.value && productPriceInput.value && productQuantityInput.value){
        const name = productNameInput.value;
        const price = productPriceInput.value;
        const quantity = productQuantityInput.value;

        const productManageItems = document.getElementById('product-manage-items');
        const productManageItem = document.createElement('tr');
        const productManageName = document.createElement('td');
        const productManagePrice = document.createElement('td');
        const productManageQuantity = document.createElement('td');

        productManageItem.classList.add('product-manage-item');
        productManageName.classList.add('product-manage-name');
        productManagePrice.classList.add('product-manage-price');
        productManageQuantity.classList.add('product-manage-quantity');
        productManageName.textContent = name;
        productManagePrice.textContent = price;
        productManageQuantity.textContent = quantity;
        productManageItem.append(productManageName);
        productManageItem.append(productManagePrice);
        productManageItem.append(productManageQuantity);
        
        productManageItems.append(productManageItem);

        const productPurchaseItem = document.createElement('tr');
        const productPurchaseName = document.createElement('td');
        const productPurchasePrice = document.createElement('td');
        const productPurchaseQuantity = document.createElement('td');
        const purchase = document.createElement('td');
        const purchaseButton = document.createElement('button');
        purchaseButton.textContent = '구매하기';
        purchaseButton.classList.add('purchase-button');
        purchase.append(purchaseButton);

        productPurchaseItem.classList.add('product-purchase-item');
        productPurchaseName.classList.add('product-purchase-name');
        productPurchasePrice.classList.add('product-purchase-price');
        productPurchaseQuantity.classList.add('product-purchase-quantity');

        productPurchaseName.dataset.productName = name;
        productPurchasePrice.dataset.productPrice = price;
        productPurchaseQuantity.dataset.produtQuantity = quantity;

        productPurchaseName.textContent = name;
        productPurchasePrice.textContent = price;
        productPurchaseQuantity.textContent = quantity;

        productPurchaseItem.append(productPurchaseName);
        productPurchaseItem.append(productPurchasePrice);
        productPurchaseItem.append(productPurchaseQuantity);
        productPurchaseItem.append(purchase);

        productPurchaseItems.append(productPurchaseItem);
    }

    productNameInput.value='';
    productPriceInput.value='';
    productQuantityInput.value='';
});

vendingMachineCharge.addEventListener('submit',(e)=>{
    e.preventDefault();

    const vendingMachineChargeInput = document.getElementById('vending-machine-charge-input');

    let money = vendingMachineChargeInput.value/1;

    if(money < 0 || Number.isNaN(money)){
        alert('잘못된 입력입니다');
        vendingMachineChargeInput.value='';
        return;
    } 

    const vendingMachineCoin500Quantity = document.getElementById('vending-machine-coin-500-quantity');
    const vendingMachineCoin100Quantity = document.getElementById('vending-machine-coin-100-quantity');
    const vendingMachineCoin50Quantity = document.getElementById('vending-machine-coin-50-quantity');
    const vendingMachineCoin10Quantity = document.getElementById('vending-machine-coin-10-quantity');

    const old500Quantity = parseInt(vendingMachineCoin500Quantity.textContent);
    const old100Quantity = parseInt(vendingMachineCoin100Quantity.textContent);
    const old50Quantity = parseInt(vendingMachineCoin50Quantity.textContent);
    const old10Quantity = parseInt(vendingMachineCoin10Quantity.textContent);

    vendingMachineCoin500Quantity.textContent=`${old500Quantity ? old500Quantity + Math.floor(money/500) : Math.floor(money/500)}개`;
    money%=500;
    vendingMachineCoin100Quantity.textContent=`${old100Quantity ? old100Quantity + Math.floor(money/100) : Math.floor(money/100)}개`;
    money%=100;
    vendingMachineCoin50Quantity.textContent=`${old50Quantity ? old50Quantity + Math.floor(money/50) : Math.floor(money/50)}개`;
    money%=50;
    vendingMachineCoin10Quantity.textContent=`${old10Quantity ? old10Quantity + Math.floor(money/10) : Math.floor(money/10)}개`;
    money%=10;

    vendingMachineChargeInput.value='';
});

charge.addEventListener('submit',(e)=>{
    e.preventDefault();

   const chargeInput = document.getElementById('charge-input');

   let money = chargeInput.value/1;

   if(Number.isNaN(money)){
       alert('숫자를 입력해주세요');
       chargeInput.value='';
       return;
   }

   const oldAmount = parseInt(chargeAmount.textContent);

   chargeAmount.textContent = `${oldAmount? oldAmount+money : money}`;
   chargeInput.value='';
});

productPurchaseItems.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('purchase-button')){
        return;
    }

    const targetItem = e.target.parentNode.parentNode;
    const price = parseInt(targetItem.querySelector('.product-purchase-price').textContent);
    const $quantity = targetItem.querySelector('.product-purchase-quantity');

    const oldAmount = parseInt(chargeAmount.textContent);

    if(oldAmount > price && $quantity.textContent !== '0'){
        chargeAmount.textContent = `${oldAmount - price}`;
        $quantity.textContent= $quantity.textContent - 1;
    }

    if($quantity.textContent === '0'){
        e.target.setAttribute("disabled", "true");
    }
})