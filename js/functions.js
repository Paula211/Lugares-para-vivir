var time= new Date();
var color;
var myElement;
if(time == 12) {
    color = "rojo";
}
else if(time == 15) {
    color = "amarillo";
}
else{
    color = "verde";
}
var myElement = document.getElementById("timeColor");
myElement.innerHTML = color;