


var additembtn = document.getElementById('addItemBtn');
var renderItemscontainer = document.getElementById('displayListItems');
var itemarry = [];
var Itemid = 1;
additembtn.addEventListener('click', () => {
    var UserEnteredItems = document.getElementById('grocery-items')
    if (UserEnteredItems.value === '') {
        alert('Please Enter Any item')
        return;
    }
    //Fetch Items and Push into Array 
    var value = UserEnteredItems.value;

    itemarry.push({ idofItem: Itemid, name: value, qty: 1 });
    render();

    // itemarry.forEach(item, index =>
    // {
    // });

    UserEnteredItems.value = "";
})
//Render Items
function render() {

    renderItemscontainer.innerHTML = "";

    itemarry.forEach((item) => {
        renderItemscontainer.innerHTML += `
        <div style="display:flex;align-items:center;gap:8px;margin:5px 0;padding:5px;border:1px solid #ccc;border-radius:6px;">
          <button onclick="decrease(${item.idofItem})">-</button>
          <input type="text" value="${item.name}" readonly style="width:100px;text-align:center;" />
          <button onclick="increase(${item.idofItem})">+</button>
          <button onclick="removeItem(${item.idofItem})" style="color:red;margin-left:auto;">Delete</button>
          <span style="margin-left:10px;">Qty: ${item.qty}</span>
        </div>
      `;

    });
    Itemid++;
    // console.log(itemarry)
}



// Increase qty
function increase(id) {
    for (var i = 0; i < itemarry.length; i++) {
        
        if (itemarry[i].idofItem === id) { itemarry[i].qty += 1; }
        console.log(itemarry)
    }
    render();
    
}
function decrease(id) {
    for (var i = 0; i < itemarry.length; i++) {

        if (itemarry[i].qty < 2)
        {
            alert('Item Quantity Should should greater than 0');
            return;
        }
        if (itemarry[i].idofItem === id) { itemarry[i].qty -= 1; }
        console.log(itemarry)
    }
    render();
    
}



// // Decrease qty
// function decrease(i) {
//     itemarry.splice(i, 1);
//     render();
//     console.log(itemarry)
// }

// // Delete item
// function removeItem(i) {
//     itemarry.splice(i, 1);
//     render();
// }
