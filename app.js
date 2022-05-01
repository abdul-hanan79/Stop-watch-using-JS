// function timer()
// {
//     document.write("hello <br>");
// }
// setInterval(timer,1000)
// setTimeout(timer,1000)
// setIntervel do paramteres lay ga aik function name or dusra time funcation name ki jagha pura function b likh sktay hyn
// or time ka mtlb yh hay k itnay time bd function call hoga
// setTimeOUt may b same process hay time jo likha hay vo function us time k bd chlay ga or aik bar hi chlay ga


// how to stop setInterval
// var counting=0;
// var time;
// function timer()
// {
//     counting++;
//     document.write(counting);
// }
 
// time=setInterval(timer,1000)

// setTimeout(function()
// {
//     clearInterval(time)
// }
// ,6000)

// stop watch

var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;
function timer()
{
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100)
    {
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
}
// for start
function start()
{
 interval=setInterval(timer,10)
}

// for stop just use clear interval function
function stop()
{
    clearInterval(interval);
}
function reset()
{
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    stop();
}

    