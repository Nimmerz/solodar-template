//MESSAGES START
var messages = document.getElementById("messages");
var messagesElems = messages.getElementsByTagName('*')
var firstMessage = messagesElems[2];
var messageHover = function() {
    messages.classList.add("messages--first-hovered");
};
var messageUnHover = function() {
    messages.classList.remove("messages--first-hovered");
};
firstMessage.addEventListener('mouseover', messageHover, false);
firstMessage.addEventListener('mouseout', messageUnHover, false);

window.onscroll=function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled >45) messages.classList.add("messages--onscroll");
    else messages.classList.remove("messages--onscroll");
}
//MESSAGES STOP