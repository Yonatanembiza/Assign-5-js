"use strict";
       function maxOfTwo(input1, input2){
            if(input1 > input2){
                console.log(input1);
            } else if(input1 < input2){
                    console.log(input2);
            } else {
                    console.log(0);
            }
        }
        maxOfTwo(-5, -3); //-3
        maxOfTwo(5, 13); //13
        function findMaxOfThree(num1, num2, num3) {
            let max;
            if(num1>num2){
                max =  (num1>num3)?num1:num3;
            }
            else{
                max = (num2 > num3) ? num2 : num3;
            }
            
            console.log("The max of the three input numbers is: ", max);
        }
        findMaxOfThree(3, 2, 1);
        
        function checkIfVowel(input){
            let vowels = ['a', 'e', 'i', 'o', 'u'];
            console.log(vowels.includes(input))
        }
        checkIfVowel('i');
        function sum(inputs){
            let s = 0;
            for(let i=0; i<inputs.length; i++){
                s += inputs[i];
            }
            console.log("The sum is: ", s);
        }
        sum([4,6,7]);
        function multiply(inputs){
            let m = 1;
            for(let i=0; i<inputs.length; i++){
                m *= inputs[i];
            }
            console.log("The multiplication is: ", m);
        }
        multiply([4,6,7]);
        function reverseStr(input){
            let reversedString = '';
            for(let i=input.length-1; i>=0; i--){
                reversedString += input[i];
            }
            console.log("The reversed string is: ", reversedString);
        }
        reverseStr("jag tester");
        function findLongestWordLength(input){
            let longestWordLength = 0;
            for (let i=0; i<input.length; ++i){
                console.log(input[i]);
                if(input[i].length > longestWordLength){
                    longestWordLength = input[i].length;
                }
            }
            console.log("The longest word has a length of: ", longestWordLength);
        }
        findLongestWordLength(["wer", "wert", "weree"]);
        function filterLongWords(input, i){
            let output = [];
            for(let j=0; j<input.length; j++){
                if(input[j].length >= i){
                    output.push(input[j]);
                }
            }
            console.log("The newly formed array is: ", output);
        }
        filterLongWords(["wewe", "weweddfdgdfg", "ewwrwewet", "wet", "wet", "wwtw", "etwe", "we", "rwer"], 7)
        function computeSumOfSquares(input){
            let sumOfSquares = input.reduce((sum, num)=> (sum+num**2), 0);
            console.log("The sum of squares is: ", sumOfSquares);
        }
        computeSumOfSquares([1, 2, 4])
        function printOddNumbersOnly(input){
            let oddNums = input.filter(x => x % 2 !== 0);
            console.log("The odd numbers are: ", oddNums);
        }
        printOddNumbersOnly([3,5,8,9,12,15,18,21]);
        function computeSumOfSquaresOfEvensOnly(input){
            let evenNums = input.filter(x => x % 2 === 0).map(y => y * y).reduce((sum, num)=>(sum+num), 0   );
            console.log("The sum of squares of the even numbers is: ", evenNums);
        }
        computeSumOfSquaresOfEvensOnly([3,5,6,9,4,15,1,2]);
        function sum(inputs){
            let s = inputs.reduce((sum, num)=>(sum+num),0);
            console.log("The sum is: ", s);
        }
        sum([2,6,12]);
        function multiply(inputs){
            let m = inputs.reduce((mul, num)=>(mul*num),1);
            console.log("The multiplication is: ", m);
        }
        multiply([2,6,12]);
        "use strict";

        // Function to print the Fibonacci sequence
        function printFibo(n, a, b) {
            if (n < 1) {
                console.log("Invalid input. Length (n) should be 1 or greater.");
                return;
            }

            let fiboSequence = [a, b];

            for (let i = 2; i < n; i++) {
                const nextNumber = fiboSequence[i - 1] + fiboSequence[i - 2];
                fiboSequence.push(nextNumber);
            }

            console.log("Fibonacci sequence:", fiboSequence.join(", "));
        }

        printFibo(1, 0, 1);
        printFibo(2, 0, 1);
        printFibo(3, 0, 1);
        printFibo(6, 0, 1);
        printFibo(10, 0, 1);

        console.log("End of Code :) ")