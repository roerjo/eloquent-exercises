//The usual FizzBuzz rules

//My solution:

for (let i=1; i<101; i++) {
    console.log(
        (i % 3 == 0 && i % 5 ==0) ? 'FizzBuzz' :
        (i % 3 == 0) ? 'Fizz' :
        (i % 5 == 0) ? 'Buzz' :
        i
    );
}

/*
    Eloquent's solution:

    for (let n = 1; n <= 100; n++) {
      let output = "";
      if (n % 3 == 0)
        output += "Fizz";
      if (n % 5 == 0)
        output += "Buzz";
      console.log(output || n);
    }
*/
