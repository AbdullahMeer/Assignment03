// Question 03
var hours = 0;
var minutes = 0;
var seconds = 0;


function stopWatch()
{
    
    if(seconds == 59){
        seconds = 0;
        minutes += 1
    }
    else if(minutes == 59){
        seconds = 0;
        minutes = 0;
        hours += 1;
    }
    else{
        ++seconds;
    }

   

    // hours = hours < 10 ? "0" + hours : hours;
    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;

    var formatedTime = hours + " : " + minutes + " : " + seconds ; 
    document.getElementById("stopwatch").innerText = formatedTime;
}

var inter;
function startTimer()
{
    inter = setInterval(function()
    {
        stopWatch();        
    }, 1000);
}

function stopTimer()
{
    clearInterval(inter);
}




