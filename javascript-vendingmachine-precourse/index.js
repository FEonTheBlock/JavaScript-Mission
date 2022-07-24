const productAddButton = document.getElementById('product-add-button');

productAddButton.addEventListener('click',()=>{
    const productNameInput = document.getElementById('product-name-input');
    const productPriceInput = document.getElementById('product-price-input');
    const productQuantityInput = document.getElementById('product-quantity-input');
    const productManageItems = document.getElementById('product-manage-items');
    const productManageItem = document.createElement('tr');
    const productManageName = document.createElement('td');
    const productManagePrice = document.createElement('td');
    const productManageQuantity = document.createElement('td');

    if(productNameInput.value && productPriceInput.value && productQuantityInput.value){
        productManageItem.classList.add('product-manage-item');
        productManageItem.append(productNameInput.value,productManageName);
        productManageItem.append(productPriceInput.value,productManagePrice);
        productManageItem.append(productQuantityInput.value,productManageQuantity);
        
        productManageItems.append(productManageItem);
    }

    productNameInput.value='';
    productPriceInput.value='';
    productQuantityInput.value='';
});

