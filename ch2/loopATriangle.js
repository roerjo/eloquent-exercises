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

// My Solution

let hash = '#';

while(hash.length < 8) {
    console.log(hash);
    hash += '#';
}

/*
    Eloquent's Solution:
    for (let line = "#"; line.length < 8; line += "#")
        console.log(line);
*/
