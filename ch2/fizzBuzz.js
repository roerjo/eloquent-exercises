//The usual FizzBuzz rules

//My solution:

for(var i = 1; i <= 100; i++) {
	if(!(i % 3) && !(i % 5))
    	console.log("FizzBuzz");
    else if(!(i % 3))
    	console.log("Fizz");
    else if(!(i % 5))
    	console.log("Buzz");
    else
    	console.log(i);  	
}

/*
	Eloquent's solution:
    
    for (var n = 1; n <= 100; n++) {
      var output = "";
      if (n % 3 == 0)
        output += "Fizz";
      if (n % 5 == 0)
        output += "Buzz";
      console.log(output || n);
    }
*/
