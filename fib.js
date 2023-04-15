//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

    if(isNaN(intCount) || intCount < 2 || intCount > 100) // Validate intCount to ensure the user enters a proper number and that number is between 1 – 100 (because who really needs to see more than that in their web browser…)
{

	alert ("Number needs to be in between 0 to 100"); // If intCount is not valid blank out the intCount DOM box provide an error message
    $("total_fib").value = ""; 

}

else //Else run the main part of the program 
{
while (intCount >2) // While intCount >2 (because we are counting down from intCount)
{
	k = i+j; //set k=i+j
	i = j; //set i=j
	j= k //set j=k
	stringOutput = stringOutput + k + " "; //add k value to string Output
	intCount--; //decrement intCount
} //End While
	$("output").value = stringOutput; //Output stringOutput to the DOM
}


};

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  