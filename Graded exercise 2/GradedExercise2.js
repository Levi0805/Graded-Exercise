var Remove = document.getElementsByClassName('btn-danger');
function removes(event){
    var e = event.target;
    var parents = e.parentElement.parentElement.remove()
    total()
}
function total(){
    var total = 0
    var grands = document.getElementsByClassName('grand-total')[0];
    var updates = document.getElementsByClassName('sub-total')
    for(i = 0; i < updates.length; i++){
        var updatesAmount = parseInt(updates[i].innerText.replace('EURO' , ' '));
        total += updatesAmount;
    }
    grands.innerHTML = 'EURO ' + total;
}

var addTocart = document.getElementsByClassName('btn-primary');
for(i = 0 ; i < addTocart.length ; i++){
   addTocart[i].addEventListener('click' , addToTheCarts)
}

function addToTheCarts(event){
    var addToCart = event.target;
    var addtocartE1 = addToCart.parentElement
    var imgname = addtocartE1.children[0].src;
    var titlename = addtocartE1.children[1].innerText;
    var price = addtocartE1.children[2].innerText;
    addToTheCartUpdate(imgname ,titlename , price )
}

    var tbody = document.getElementsByTagName('tbody')[0]
function addToTheCartUpdate (imgname , titlename , price){
    var createElement = document.createElement('tr');

    var titleNames = document.getElementsByClassName('item-title');
    for (i = 0 ; i < titleNames.length; i++){
        if(titleNames[i].innerText == titlename){
            alert('This item is already in your cart');
            return
        }
    }
    createElement.innerHTML = `<td><img src="${imgname}"   class="item-img" alt=""></td>
    <td><h4 class="item-title">${titlename}</h4></td>
    <td><h4 class="item-price">${price}</h4></td>
    <td><input type="number" class="item-qty" value="0"></td>
    <td><h4 class="sub-total">EUR 0</h4></td>
    <td><button class="btn btn-danger">Remove</button></td>`
    tbody.append(createElement);
    for (i = 0; i < Remove.length; i++){
        Remove[i].addEventListener('click' , removes)
    }
    for (i = 0 ; i < quantityupdate.length ; i++){
        quantityupdate[i].addEventListener('click' , updatequantity)
    }
    total()
}

var quantityupdate = document.getElementsByClassName('item-qty')


function updatequantity(event){
    var updateE1 = event.target;
    var parentsE1 = updateE1.parentElement.parentElement
    var itemPrice = parentsE1.getElementsByClassName('item-price')[0];
    var itemprices = itemPrice.innerText.replace('EURO', ' ');
    var subtotal = parentsE1.getElementsByClassName('sub-total')[0];
    subtotal.innerHTML = updateE1.value * itemprices ;
    if(isNaN(updateE1.value) || updateE1.value<=0){
        updateE1.value = 1 ;
    }
    total()
}
