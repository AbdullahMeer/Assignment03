var time;
var hours;
var minutes;
var seconds;
var noon;


function clock()
{
    time= new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    noon = "Dummy Text"

    if(hours>12)
    {
        noon = 'PM';
        hours=hours-12;
    }
    
    else if(hours == 12)
    {
        noon='PM';
    }
    else
    {
        noon='AM';
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var formatedTime = hours + " : " + minutes + " : " + seconds + " " + noon; 
    document.getElementById("Clock").innerText = formatedTime;
}

var inter;
function displayClock()
{
    inter = setInterval(function()
    {
        clock();        
    }, 1000);

}
    
    
    
function myStopFunction()
{
    clearInterval(inter);
}
 
