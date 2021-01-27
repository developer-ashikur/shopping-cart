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

let phoneItemsNum = getInputValues('phoneItems');
let caseItemsNum = getInputValues('caseItems');
var totalPhonePrice = 0;
var totalCasePrice = 0;
var subTotal = 0;
var tax = 0;
var total = 0;


// plus button event handler for phone
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function () {
    phoneItemsNum = phoneItemsNum + 1;
    document.getElementById('phoneItems').value = phoneItemsNum;
    
    if (phoneItemsNum >= 0) {
        totalPhonePrice = phoneItemsNum * 1000;
        document.getElementById('phonePrice').innerText = totalPhonePrice;
    }

    subTotal = totalPhonePrice + totalCasePrice;
    document.getElementById('subTotal').innerText = subTotal;
    tax = subTotal * (1 / 100);
    document.getElementById('tax').innerText = tax;
    total = subTotal + tax;
    document.getElementById('grandTotal').innerText = total;
})

//minus button event handler for phone
const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function () {
    phoneItemsNum = phoneItemsNum - 1;
    document.getElementById('phoneItems').value = phoneItemsNum;

    if (phoneItemsNum >= 0) {
        totalPhonePrice = phoneItemsNum * 1000;
        document.getElementById('phonePrice').innerText = totalPhonePrice;
    }
    
    subTotal = totalPhonePrice + totalCasePrice;
    document.getElementById('subTotal').innerText = subTotal;
    tax = subTotal * (1 / 100);
    document.getElementById('tax').innerText = tax;
    total = subTotal + tax;
    document.getElementById('grandTotal').innerText = total;
})

// plus button event handler for case
const casePlus = document.getElementById('casePlus');
casePlus.addEventListener('click', function () {
     caseItemsNum = caseItemsNum + 1;
    document.getElementById('caseItems').value = caseItemsNum;

    if (caseItemsNum >= 0) {
        totalCasePrice = caseItemsNum * 100;
        document.getElementById('casePrice').innerText = totalCasePrice;
    }

    subTotal = totalPhonePrice + totalCasePrice;
    document.getElementById('subTotal').innerText = subTotal;
    tax = subTotal * (1 / 100);
    document.getElementById('tax').innerText = tax;
    total = subTotal + tax;
    document.getElementById('grandTotal').innerText = total;
 
})
//minus button event handler for case
const caseMinus = document.getElementById('caseMinus');
caseMinus.addEventListener('click', function () {
    caseItemsNum = caseItemsNum - 1;
    document.getElementById('caseItems').value = caseItemsNum;

    if (caseItemsNum >= 0) {
        totalCasePrice = caseItemsNum * 100;
        document.getElementById('casePrice').innerText = totalCasePrice;
    }

    subTotal = totalPhonePrice + totalCasePrice;
    document.getElementById('subTotal').innerText = subTotal;
    tax = subTotal * (1 / 100);
    document.getElementById('tax').innerText = tax;
    total = subTotal + tax;
    document.getElementById('grandTotal').innerText = total;
})

