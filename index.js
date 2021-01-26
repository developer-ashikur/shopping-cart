const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function () {
    const phoneItems = document.getElementById('phoneItems').value;
    let phoneItemsNum = parseFloat(phoneItems);
    phoneItemsNum = phoneItemsNum + 1;
    document.getElementById('phoneItems').value = phoneItemsNum;
    
    const phonePrice = document.getElementById('phonePrice').innerText;
    let phonePriceNum = parseFloat(phonePrice);
    phonePriceNum = phoneItemsNum * 1000;
    document.getElementById('phonePrice').innerText = phonePriceNum;
    
})

//minus button event handler
const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function () {
    
})