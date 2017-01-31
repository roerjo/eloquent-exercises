/*
    Task: Produce a # triangle
    #
    ##
    ###
    ####
    #####
    ######
    #######
    Look in the console for result
*/

// My solution
var string = "";

for (var i = 0; i < 7; i++) {
    string += "#";
    console.log(string);
}

/*
    Eloquent's Solution:

    for (var line = "#"; line.length < 8; line += "#")
    	console.log(line);

*/
