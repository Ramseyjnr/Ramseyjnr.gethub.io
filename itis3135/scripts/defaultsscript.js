function scriptTest() 
{
    alert("My script is running.");
}









function formOutput()
{
    var name = document.getElementById('name').value;
    var feeling = document.getElementById('feeling').value;
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
    var hours1 = parseInt(document.getElementById('hours1').value) || 0;
    var hours2 = parseInt(document.getElementById('hours2').value) || 0;
    var hours3 = parseInt(document.getElementById('hours3').value) || 0;
   

    var hoursArray = new Array(hours1, hours2, hours3);
    var numWorkers = 0;
    for(var i = 0; i < 5; i++) 
    {
        if(hoursArray[i] != 0) 
        {
            numWorkers++;
        }
    }
    document.getElementById('output3').innerHTML = "Average work time is: " + ((hours1 + hours2 + hours3) / numWorkers) + " hours.";
}

