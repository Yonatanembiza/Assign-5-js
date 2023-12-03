"use strict";

function maxOfTwo(input1, input2){
    if(input1 > input2){
        return input1;
    } else if(input1 < input2){
        return input2;
    } else {
        return 0;
    }
}
console.log(maxOfTwo(-5, -3)); //-3