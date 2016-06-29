
var div = $("div");
 
function startComputer() {
    $("ss").style.display = "none";
    div.style.display = "block";
    setTimeout(logon(), 3000);
    
}
function logon() {
    changeDiv("<input id='pbox'/>");
    desktop("me");
}
function desktop(user) {
    changeDiv()
}
