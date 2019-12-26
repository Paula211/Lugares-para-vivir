var time= new Date();
var color;
var myElement;
if(time.getHours() == 12) {
    color = "red";
}
else if(time.getHours() == 15) {
    color = "yellow";
}
else{
    color = "green";
}
var myElement = document.getElementById("timeColor");
myElement.innerHTML = color;

var username = prompt("¿Cómo te llamas?");
document.getElementById("username").innerHTML = username 