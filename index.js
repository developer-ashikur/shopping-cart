const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function () {
    // const phoneItems = document.getElementById('phoneItems').value;
    // let phoneItemsNum = parseFloat(phoneItems);
    let phoneItemsNum = getInputValues('phoneItems');
    phoneItemsNum = phoneItemsNum + 1;
    document.getElementById('phoneItems').value = phoneItemsNum;
    
    // const phonePrice = document.getElementById('phonePrice').innerText;
    // let phonePriceNum = parseFloat(phonePrice);
    if (phoneItemsNum >= 0) {
        let phonePriceNum = getSpanValue('phonePrice');
        phonePriceNum = phoneItemsNum * 1000;
        document.getElementById('phonePrice').innerText = phonePriceNum;
    }
    
})

//minus button event handler
const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function () {
    let currentItems = getInputValues('phoneItems');
    currentItems = currentItems - 1;
    document.getElementById('phoneItems').value = currentItems;

    if (currentItems >= 0) {
        let updatedPrice = getSpanValue('phonePrice');
        updatedPrice = updatedPrice - 1000;
        document.getElementById('phonePrice').innerText = updatedPrice;
    }
})

function getInputValues(id) {
    const items = document.getElementById(id).value;
    const inputValue = parseFloat(items);
    return inputValue;
}
function getSpanValue(id) {
    const price = document.getElementById(id).innerText;
    const priceValue = parseFloat(price);
    return priceValue;
}