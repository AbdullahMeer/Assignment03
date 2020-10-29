// Question 02
var seconds = 0;
var minutes = 0;
var hours = 00;
var formatedTime = 0;
minutes = prompt("Enter Timer in minutes",1);
function timer(){

    if (seconds== 00 && seconds ==0){
        --minutes;
        seconds = 60;
    }
    else{
        --seconds;
    } 
    formatedTime = hours + " : " + minutes + " : " + seconds ;
    document.getElementById(Clock).innerText = formatedTime;
   
}
var inter;
function startTimer(){
    inter = setInterval(function()  {
        timer();
    }, 1000);
}

function stopTimer(){
    clearInterval(inter);
}



