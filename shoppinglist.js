
// additemBtn.addEventListener("click", () => {
//    Grocerydata.value = GroceryItem.value;
// });




const addItemBtn = document.getElementById('addItemBtn');
const DisplayContainer = document.querySelector('.displayListItems');

addItemBtn.addEventListener('click', () => {

   var userenteredItem = document.getElementById('grocery-items');
   
   if(!userenteredItem.value)
   {
      alert('Please Enter An Item')
      return;
   }

   var group = document.createElement('div');
   group.className = 'input-group my-2'; // add margin for spacing


   var plus = document.createElement('span');
   plus.className = 'input-group-text';
   plus.textContent = '-';


   var input = document.createElement('input');

   input.type = 'text';
   input.className = 'form-control text-center grocery-value';
   input.id = 'Grocerydata';
   input.readOnly = true;
   input.value = userenteredItem.value; // start with 0

   var minus = document.createElement('span');
   minus.className = 'input-group-text rounded-end';
   minus.textContent = '+';


   var btn = document.createElement('button');
   btn.className = 'rounded-2 p-3 ms-4 btn btn-danger';
   btn.innerHTML = '<i class="bi bi-trash"></i>';

   var Qtn = document.createElement('p');
   Qtn.className = 'indivisualItemCount ps-4 pt-3';
   Qtn.dataset.count = 1;

   var values = [];
   document.querySelectorAll('.grocery-value').forEach(input => {
      values.push(input.value.trim().toLowerCase());
   });

   if (values.includes(userenteredItem.value.trim().toLowerCase())) {

      alert('Item Already Exist Please Use + and - Button For Quantity Adjustments')
      return; // stop, don't append
   }
   else {
      var count = 1;
      Qtn.innerText = `Quantity ${count}`;
   }
   // 👉 only append here if not exists
   group.appendChild(plus);
   group.appendChild(input);
   group.appendChild(minus);
   group.appendChild(btn);
   group.appendChild(Qtn);
   DisplayContainer.appendChild(group);
   updateTotal()
   ListedItems()
   userenteredItem.value="";
});


DisplayContainer.addEventListener('click', (e) => {
   if (e.target.matches('.input-group-text')) {
     var group = e.target.closest('.input-group');
     var Qtn = group.querySelector('.indivisualItemCount');
 
     // read current value from dataset
     var count = parseInt(Qtn.dataset.count, 10);
 
     if (e.target.textContent.trim() === '+') {
       count++;
     } else if (e.target.textContent.trim() === '-' && count > 1) {
       count--;
     }
 
     // update dataset AND visible text
     Qtn.dataset.count = count;
     Qtn.innerText = `Quantity ${count}`;
     updateTotal()
   }
 });
 DisplayContainer.addEventListener('click', (e) => {
   if (e.target.closest('.btn-danger')) {
     const group = e.target.closest('.input-group');
     if (group && confirm("Are you sure you want to delete this item?")) group.remove(); 
     updateTotal()
   }
 });
 function updateTotal() {
   var total = 0;
   DisplayContainer.querySelectorAll('.indivisualItemCount').forEach(Qtn => {
     total += parseInt(Qtn.dataset.count, 10);
   });
   document.getElementById('totalItems').innerText = `Total Items: ${total}`;
 }
function ListedItems()
{
  var totallist = document.getElementById('Listcount');
  var t = DisplayContainer.querySelectorAll(".input-group");
  var l=  t.length;
  totallist.innerText = `${l} Items In Your List`
}
 



