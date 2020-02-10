
import Card from "/components/Card/index.js"
  
window.addEventListener("DOMContentLoaded", runOnLoad);

addCardButton.addEventListener("click", onClick)

function onClick() {
    let element = document.createElement("div");    
    element.id = "container";    
    document.body.appendChild(element);    
    var newCard = new Card({content:"This is a new Card"});    
    console.log("clicked!");
    var addCardButton = document.getElementById("addCard");
    addCardButton.addEventListener("click", onClick)
    element.appendChild(newCard.render());
}