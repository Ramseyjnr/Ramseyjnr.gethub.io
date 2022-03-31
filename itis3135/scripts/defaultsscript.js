function scriptTest() 
{
    alert("My script is running.");
}

function showDateTime() 
{
    var current = new Date();
    var monthNumber = current.getMonth() + 1;
    var day = current.getDay();
    var year = current.getFullYear();  
    var date = current.getDate();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var dayOrNight;

    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    if(hour >= 12)
    {
        hour %= 12;
        dayOrNight = "pm";
    }
    else
    {
        dayOrNight = "am";
    }

    let fullTimeDate = "Today is " + hour + ":" + minute + dayOrNight + " on " + dayOfTheWeek[day] + ", " + date + " " + monthName[monthNumber] + " " + year;
    document.getElementById("timeoutput").innerHTML = fullTimeDate;
}

function formOutput()
{
    let name = document.getElementById('firstname').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The White-Ram welcomes you, " + name + "!  We're glad you are doing " + feeling + "!";
}

function calcTax()
{
    let salary = parseInt(document.getElementById('salary').value);
    let tax = parseInt(document.getElementById('tax').value);
    const finalValue = salary - (salary * tax * 0.01);
    document.getElementById('output2').innerHTML = "Monthly salary after tax is: $" + finalValue + ".";
}

function calcAvg()
{
    let hours1 = parseInt(document.getElementById('hours1').value) || 0;
    let hours2 = parseInt(document.getElementById('hours2').value) || 0;
    let hours3 = parseInt(document.getElementById('hours3').value) || 0;
    let hours4 = parseInt(document.getElementById('hours4').value) || 0;
    let hours5 = parseInt(document.getElementById('hours5').value) || 0;

    let hoursArray = new Array(hours1, hours2, hours3, hours4, hours5);
    let numWorkers = 0;
    for(var i = 0; i < 5; i++) 
    {
        if(hoursArray[i] != 0) 
        {
            numWorkers++;
        }
    }
    document.getElementById('output3').innerHTML = "Average work time is: " + ((hours1 + hours2 + hours3 + hours4 + hours5) / numWorkers) + " hours.";
}

function modularCalc()
{
    let jackals = document.getElementById('jackals').value;
    let cookies = document.getElementById('cookies').value;
    document.getElementById('output4').innerHTML = "Remaining cookies: " + (cookies % jackals) + ".";
}

/**Function to guess the month that the user was born*/
function birthMonth()
{
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var guess = Math.floor(Math.random()*12);
    document.getElementById("guess").innerHTML = "Is it " + months[guess] + "?";
    document.getElementById("yes").style.display = 'block';
    document.getElementById("no").style.display = "block";
}

/**If the guess was wrong then this function guesses again*/
function wrong()
{
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var guess = Math.floor(Math.random()*12);
    document.getElementById("guess").innerHTML = "Then is it " + months[guess] + "?";
}
/**If the guess was right then it will print a message on the page*/
function right()
{
    document.getElementById("guess").innerHTML = "Yes, lets go!";
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

// Loads functions for each button and starts user on employee selection
window.onload = function () {
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee").focus();
};

var employee = [];
var salary = [];

function addSalary() {   

    // Get inputted employyee and their salary
    var enteredSalary = parseFloat(document.getElementById("salary").value);
    var enteredName = document.getElementById("employee").value;

    // Check to make sure inputted salary is valid. Must be a number and must not be left empty
    if (enteredSalary === "") 
    {
        alert("Please enter a valid salary");
        enteredSalary = ""; // Clears invalid input
        document.getElementById("employee").focus(); // Starts user on employee selection
    }
    else 
    {
        // If valid salary input, add salary and employee to arrays
        enteredSalary = parseFloat(enteredSalary);
        employee.push(enteredName);
        salary.push(enteredSalary);
        // Clears enterybox so new salary can be entered after adding previously enter salary to array
        // and redirects user to employee selection so a new employee and salary can be added
        document.getElementById("salary").value = "";
        document.getElementById("employee").focus();
    }

}

function displayResults() {

    // Used to find average
    var average = 0;
    var sum = 0;
    // Used to find highest salary
    var employeeWithHighestNum = "";
    var maxNum = 0;

    // Loop through array of salaries to add all the salaries and 
    // then divide by the number of saleries to find average salary
    for (i = 0; i < salary.length; i++) {
        sum += salary[i];
    }
    average = (sum / salary.length);

    // Loop through array of salaries to find highest salary
    for (i = 0; i < salary.length; i++) {
        // If entered salary is > than the current max number, make that salary the new max number
        if (salary[i] > maxNum) {
            maxNum = salary[i]; // Set max number to new highest salary
            employeeWithHighestNum = employee[i]; // Set the employee with highest salary variable to the new employee with the higest salary
        }
    }

    // Prints results onto webpage
    document.getElementById("results").innerHTML = "The average salary is $" + average.toFixed(2) + " and the highest salary is " + employeeWithHighestNum + "'s, at $" + maxNum.toFixed(2);

}

function displaySalary() {

    // Create table
    var table;
    table = "<table><tr><th>Employee</th><th>Salary</th></tr>"
    // Loop to add table rows for each employee
    for (i = 0; i < salary.length; i++){
        table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    table += "</table>"; // End table
    // Prints results onto webpage
    document.getElementById("results_table").innerHTML = table;
    
}

