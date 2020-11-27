var last_y_position, last_x_position;
var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = ["red", "blue", "green", "yellow"];
var color1 = "";

var width_of_line = "2";
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        canvas.getContext("2d").beginPath();
        canvas.getContext("2d").strokeStyle=color[Math.floor(Math.random()*color.length)];
        canvas.getContext("2d").lineWidth = width_of_line;
        ctx.arc(last_x_position, last_y_position, 40, 0, 2*Math.PI);

        console.log("Last X position of mouse " + last_x_position +", Last Y position of mouse " + last_y_position);
        canvas.getContext("2d").moveTo(last_x_position, last_y_position);

        console.log("Current X position of mouse " + current_x_position +", Current Y position of mouse " + current_y_position);
       
        canvas.getContext("2d").stroke();
    }
    last_x_position = current_x_position;
    last_y_position = current_y_position;
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent = "mouseLeave";
}
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
