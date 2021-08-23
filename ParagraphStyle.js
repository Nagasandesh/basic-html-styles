var content = document.getElementById("content");
var button = document.getElementById("show-more");
var message = document.getElementById("message");
var colors = ["black", "blue", "green", "yellow", "pink"];
var counter = 0;

button.onclick = function(){
    if(content.className == "open"){
        // shrink box
        content.classname = "";
        button.innerHTML = "SHOW MORE";
    }
    else {
        // expand box
        content.className = "open";
        button.innerHTML = "SHOW LESS";
    }
};
function showcolor() {
    
    if(counter >= colors.length){
        counter = 0;
    }
    message.style.background = colors[counter];
    counter++ ;
}
 setInterval(showcolor, 3000);
