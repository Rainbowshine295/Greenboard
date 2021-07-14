var mouseEvent = "empty";

var last_position_of_x , last_position_of_y;

canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");
var color = "black";
 var width_of_line = 10;
    
    function red(){
        color = "red";
        width_of_line = 10;
    }
    function blue(){
        color = "skyblue";
        width_of_line = 10;
    }

    function yellow(){
        color = "gold";
        width_of_line = 10;
    }

    function white(){
        color = "floralwhite";
        width_of_line = 10;
    }

    function dust(){
        color = "seagreen";
        width_of_line = 100;
    }
    
    canvas.addEventListener("mousedown" , my_mousedown);
    
    function my_mousedown(e) {
        mouseEvent = "mouseDown";
    }
    
    canvas.addEventListener("mousemove" , my_mousemove);
    
    function my_mousemove(e) {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
        if (mouseEvent == "mouseDown")  {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
    
            console.log("X = "+ last_position_of_x + " Y = "+ last_position_of_y);
            ctx.moveTo(last_position_of_x , last_position_of_y);
            console.log("X = "+ current_position_of_mouse_x + " Y = " + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
            ctx.stroke();
        }
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    }
    
    canvas.addEventListener("mouseup" , my_mouseup);
    
    function my_mouseup(e) {
    mouseEvent = "mouseUP";
    }
    canvas.addEventListener("mouseleave" , my_mouseleave);
    
    function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
    }
    