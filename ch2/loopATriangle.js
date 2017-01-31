/*
    Produce a # triangle
    #
    ##
    ###
    ####
    #####
    ######
    #######
    Look in the console for result
*/

var string = "";

for (var i = 0; i < 7; i++) {
    string += "#";
    console.log(string);
}

//Another cool way of doing it

for (var line = "#"; line.length < 8; line += "#")
    console.log(line);
