var num_of_squares = 6;
var colors = generateRandomColors(num_of_squares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colord = document.querySelector("#colorDisplay");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colord.textContent = pickedColor;
    num_of_squares = 3;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    messge.textContent = "";
})

hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colord.textContent = pickedColor;
    num_of_squares = 6;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
        squares[i].style.display = "block";
        
    }
    messge.textContent = "";
})


resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(num_of_squares);
    //pick a new random color from array
    pickedColor = pickColor();
    colord.textContent = pickedColor;
    //change colors of square
    for(var i = 0; i < squares.length; i++){

        //add initial colors to square
        squares[i].style.backgroundColor = colors[i];}

        heading.style.backgroundColor = "steelblue";
        messge.textContent = "";
})


colord.textContent = pickedColor;

var messge = document.getElementById("message");

for(var i = 0; i < squares.length; i++){

    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    //click listener for squares
    squares[i].addEventListener("click", function(){
   
        //grab color of picked square
        var color = this.style.backgroundColor;


        //compare color to picked color
        if(color === pickedColor){
            messge.textContent = ("You Win");
            changeColor(pickedColor);
            heading.style.backgroundColor = pickedColor;
            resetButton.textContent = ("Play again");
        }
        else{
            this.style.backgroundColor = "#232323";
            messge.textContent = ("Try Again");
        }
    })
}

function changeColor(color){
    //loop through all squares
    for(var i = 0; i < colors.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];

    //add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}