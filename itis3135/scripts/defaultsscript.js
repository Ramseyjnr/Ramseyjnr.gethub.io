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

function add ()
{
    var num1 = prompt("Enter the first number to add"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to add"); 
    num2 = parseFloat(num2); 
    var result = num1 + num2; 
    alert(num1 + " + " + num2 + " = " + result); 
}

function sub ()
{
    var num1 = prompt("Enter the first number to subtract"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to subtract"); 
    num2 = parseFloat(num2); 
    var result = num1 - num2; 
    alert(num1 + " - " + num2 + " = " + result);
}

function div ()
{
    var num1 = prompt("Enter the first number to divide"); 
    num1 = parseFloat(num1);
    var num2 = prompt("Enter the second number to divide"); 
    num2 = parseFloat(num2); 
    var result = num1 / num2; 
    alert(num1 + " / " + num2 + " = " + result);
}

window.onload = function ()
{
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator_keys');
    const display = document.querySelector('.calculator_display');
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            const calculate = (n1, operator, n2) => {
                let result = '';

                if (operator === 'add') {

                    return parseFloat(n1) + parseFloat(n2);

                } else if (operator === 'subtract') {

                    return parseFloat(n1) - parseFloat(n2);
                }
                else if (operator === 'multiply') {

                    return parseFloat(n1) * parseFloat(n2);
                } else if (operator === 'divide') {

                    return parseFloat(n1) / parseFloat(n2);
                }
                return result;

            }
            if (!action)
            {
                if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate')
                {
                    display.textContent = keyContent;
                } else {
                    display.textContent =  displayedNum + keyContent;
                }
                calculator.dataset.previousKeyType = 'number';
                console.log('number key!')
            }
            if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
            {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;

                if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType != 'calculate') {

                    const calcValue = calculate(firstValue, operator, secondValue);
                    display.textContent = calcValue;
                    calculator.dataset.firstValue = calcValue;
                } else {
                    calculator.dataset.firstValue = displayedNum;
                }

                key.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator'; 
                calculator.dataset.operator = action;
                console.log('operator key!');
            }
            if (action === 'decimal')
            {
                if (!displayedNum.includes('.'))
                {
                    display.textContent = displayedNum + '.';

                } else if (previousKeyType === 'operator' || previousKeyType === 'calculate')
                {
                    display.textContent = '0.'
                }
                
                calculator.dataset.previousKey = 'decimal';
                console.log('decimal key!');

            }
            if (action === 'clear')
            {
                console.log('clear key');
                calculator.dataset.previousKey = 'clear';
            }
            if (action === 'calculate')
            {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;

                
                if (firstValue)
                {
                    if (previousKeyType === 'calculate')
                    {
                        firstVlaue = displayedNum;
                        secondValue = calculator.dataset.modValue;
                    }
                    display.textContent = calculate(firstValue, operator, secondValue);
                }
                calculator.dataset.modValue = secondValue;
                calculator.dataset.previousKey = 'calculate';
                console.log('equal key!');

            }
           
            if (action !== 'clear') {
                const clearButton = calculator.querySelector('[data-action=clear]')
                clearButton.textContent = 'CE';
            }

            if (action === 'clear') {
                if (key.textContent === 'AC') {
                    calculator.dataset.firstValue = '';
                    calculator.dataset.modValue = '';
                    calculator.dataset.operator = '';
                    calculator.dataset.previousKeyType = '';
                } else {
                    key.textContent = 'AC';
                }
                display.textContent = 0;
                calculator.dataset.previousKeyType = 'clear';
            }
            

            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))

        }
    }); 
}

