// Write a function that return the sum of even numbers.
var sum = 0;
function sumEven(intNum) {
    for (var i = 1; i <= intNum; i++) {
        if (i % 2 === 0){
            sum = sum + i;
        }
        else if (i % 2 !== 0){
            continue;
        }
    }
    console.log("The sum of even numbers between 1 to %d is: %d ",intNum,sum);
}

sumEven(10);