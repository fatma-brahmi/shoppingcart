
function ready(){}
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
 
for (let i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click',romoveCartItem)
}

var quantityInputs =document.getElementsByClassName('cart-quantity-input')
for (var i=0 ;i < quantityInputs.length; i++) {
    var input =quantityInputs[i]
    input.addEventListener('change', quantitychanged)

}


var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i=0 ;i < addToCartButtons.length; i++){
var button =addToCartButtons[i]
button.addEventListener('click', addToCartClicked)


}

function romoveCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() 
    updateCaretTotal()

}
function quantitychanged(event){
    var input =event.target
    if ( isNaN(input.value)|| input.value <= 0){
       input.value = 1
    

        }
        updateCaretTotal() 
 }
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
   
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc= shopItem.getElementsByClassName('shop-item-image')[0].src
console.log(title ,price,imageSrc)
addItemToCart(title,price,imageSrc)
updateCaretTotal()
}

function addItemToCart(title,price,imageSrc){
   var cartRow =document.createElement('div')
   cartRow.classList.add('cart-row')
var cartItems =document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
for (var i=0 ; i< cartItemNames.length; i++ ) {
    if ( cartItemNames[i].innerText == title){
        alert('This item is already added to the cart')
    return
}
updateCaretTotal()
}

var cartRowCotents = `
<div class="cart-item cart-column">
    
    <img class="cart-item-image" src="${imageSrc}">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>` 
cartRow.innerHTML = cartRowCotents
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click' ,romoveCartItem)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantitychanged)

}




var likes=document.getElementsByClassName('fas fa-heart')
 for (const like of likes) {
     
    like.addEventListener('click',function()
    {
            like.classList.toggle('active')
            event.target.style.color ='#c9302c'
        }) }

var dislikes=document.getElementsByClassName('fas fa-heart')
 for (const dislike of dislikes) {
          console.log(dislikes)  
     dislike.addEventListener('dblclick',function()
    {     
        dislike.classList.toggle('active')
         event.target.style.color ='#000000'
          
                  
               }) }
   
    
 
 //if (Event.target.style.color ='#c9302c'){
    //Event.target.style.color ='#c9302c'
  //}else { Event.target.style.color ='#ff0000'}


function updateCaretTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for ( var i= 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace( '$', ''))
      
      console.log(price)
        var quantity =quantityElement.value
    total = total +(price * quantity)
 
    }
     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

function purchaseClicked(){
    alert('Thenk you for you purchase ')
    var cartItems = document.getElementsByClassName('cart-item')[0]
   
    }