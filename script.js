//your code here
let itemName = document.getElementById('item-name-input');
let itemPrice = document.getElementById('item-price-input');
let button = document.getElementById('add');
let table = document.getElementById('table');
let total = document.getElementById('total');
let priceArr = [];
button.addEventListener('click',addItem);
function addItem(){
    let item = itemName.value;
    let price = itemPrice.value;
    let sum=0;
    if(item !== "" && price !=="")
    {
    let row = document.createElement('tr');
    priceArr.push(parseInt(price));
    row.innerHTML = `<td>${item}</td> <td>${price}</td>`;
    for(let i=0; i<priceArr.length; i++)
    {
        sum += priceArr[i];
        total.innerText = sum;
    }
    table.append(row);
    itemName.value = ""; 
itemPrice.value = "";
    }

}