


var additembtn = document.getElementById('addItemBtn');
var renderItemscontainer = document.getElementById('displayListItems');
var itemarry = [];
additembtn.addEventListener('click', () => {
    var UserEnteredItems = document.getElementById('grocery-items')
    if (UserEnteredItems.value === '') {
        alert('Please Enter Any item')
        return;
    }
    //Fetch Items and Push into Array 
    var value = UserEnteredItems.value;
    itemarry.push({ name: value, qty: 1 });
    render();

    // itemarry.forEach(item, index =>
    // {


    // });

    UserEnteredItems.value = "";
})
//Render Items
function render() {

    renderItemscontainer.innerHTML = "";

    itemarry.forEach((item, index) => {
        renderItemscontainer.innerHTML += `
        <div style="display:flex;align-items:center;gap:8px;margin:5px 0;padding:5px;border:1px solid #ccc;border-radius:6px;">
          <button onclick="decrease(${index})">-</button>
          <input type="text" value="${item.name}" readonly style="width:100px;text-align:center;" />
          <button onclick="increase(${index})">+</button>
          <button onclick="removeItem(${index})" style="color:red;margin-left:auto;">Delete</button>
          <span style="margin-left:10px;">Qty: ${item.qty}</span>
        </div>
      `;
    });
}



// Increase qty
function increase(i) {
    if (!itemarry[i]) return;
    const name = itemarry[i].name;               
    itemarry.push({name});       // add a new copy
    console.log(itemarry);
}


// Decrease qty
function decrease(i) {
    itemarry.splice(i, 1);
    render();
    console.log(itemarry)
}

// Delete item
function removeItem(i) {
    itemarry.splice(i, 1);
    render();
}
