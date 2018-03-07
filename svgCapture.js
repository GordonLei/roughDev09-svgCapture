// Context + Canvas
var svgContainer = document.getElementById("SVG");

//buttons
var clearButton = document.getElementById("clearButton");

//master variables

//svgContainer.appendChild(c1);

//temp variables
var OGfillStyle = "#000000";


var clear = function(){
    svgContainer.innerHTML = "";
};

var drawCircle = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 25);
    c1.setAttribute("fill", OGfillStyle);
    c1.addEventListener("click", changeColor);
    svgContainer.appendChild(c1);
};

var drawRandomCircle = function (){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", Math.floor(svgContainer.getAttribute("width")) * Math.random());
    c1.setAttribute("cy", Math.floor(svgContainer.getAttribute("height")) * Math.random());
    c1.setAttribute("r", 25);
    c1.setAttribute("fill", OGfillStyle);
    c1.addEventListener("click", changeColor);
    svgContainer.appendChild(c1);
}
var changeColor = function(e){
    if (this.getAttribute("fill") == OGfillStyle){
        // put 1 so you can never get black
        // 16777213 instead of 16777215 to account for never getting black and not getting white
        this.setAttribute("fill", "#" + Math.floor(1 + (Math.random()*16777213)).toString(16));
        this.removeEventListener("click", drawCircle, true);
        e.stopPropagation();
    }
    else{
        svgContainer.removeChild(this);
        e.stopPropagation();
        drawRandomCircle();
    }
} 

clearButton.addEventListener("click", clear);
svgContainer.addEventListener("click", drawCircle);
