function scriptTest() 
{
    alert("My script is running.");
}

function printTime() 
{
    var today = new Date();
    var year = now.getFullYear();
    var month = today.getMonth();
    var day = now.getDay();
    var date = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var am_pm;

    var month = new Array('January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December');

    var mtwtfss = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 
    'Sunday');

    if(hour >= 12){
        hour %=12;
        am_pm;
    }else {
        am_pm="am";
    }

    document.getElementById('printTime').innerHTML = "Current time is: " + today.getHours() + ":" +
     today.getMinutes() + ".  Today is: " + monthWord[month] + " " + today.getDate() + ", " + today.getFullYear() + ".";
}






function formOutput()
{
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = `WhitRams designs Welcome You , ${name}!  We're glad you are doing ${feeling}!`;
}

function addSum()
{
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var sum = +y + +z;
    document.getElementById('output2').innerHTML = "total number is : " + sum + ".";
}

function calcAvg()
{
    let hours1 = parseInt(document.getElementById('hours1').value) || 0;
    let hours2 = parseInt(document.getElementById('hours2').value) || 0;
    let hours3 = parseInt(document.getElementById('hours3').value) || 0;
   

    let hoursArray = new Array(hours1, hours2, hours3);
    let numWorkers = 0;
    for(var i = 0; i < 5; i++) 
    {
        if(hoursArray[i] != 0) 
        {
            numWorkers++;
        }
    }
    document.getElementById('output3').innerHTML = "Average work time is: " + ((hours1 + hours2 + hours3) / numWorkers) + " hours.";
}

