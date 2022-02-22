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


function addSum()
{
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var sum = +y + +z;
    document.getElementById('output2').innerHTML = "total number is : " + sum + ".";
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getShape()
{
    var numSides = prompt("Whites Rams wants to how what type of polygon you want to know", "0");
    while(!validateEntry(numSides)) 
    {
        numSides = prompt("Please enter a number from 0-10.", "0")
    }
    /* Polygon array holding names for sides 0-10 */
    numSides = Math.abs(numSides);
    var shapeArray = new Array("Try Again", " Henagon", " Digon", " Trigon", " Tetragon", " Pentagon", " Hexagon", " Heptagon", " Octagon", "Enneagon", "Decagon");
    document.getElementById('output').innerHTML = "Your Shape is:" + shapeArray[numSides]; 
}

function validateEntry(entry)
{
    /* Function that validates the sides entry is between 0-10 unsigned */
    if(isNaN(entry)) 
    {
        return false;

    }
    entry = Math.round(entry);

    if (Math.abs(entry) > 10)
    {
        return false;

    }
    return true;
}

