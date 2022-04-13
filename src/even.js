// A function that returns the sum of even numbers.
function sumOfEven(start,end){
    var msg = " ";
    if(typeof start !== 'number' || typeof end !== 'number'){
      msg = 'Invalid number supplied';
    } else if(start > end) {
        msg = 'Please, make the "start number" less than the "end number"';
    } else if(start < end){
        var sum = 0;
        for(var i = start; i <= end; i++){
            if(i % 2 === 0) {
                sum+=i;
                msg = sum;
            }
        }
    } 
    return msg;
}

console.log(sumOfEven(1,10));


// A function that returns the sum of even numbers.
/*
function sumEven(intNum) {
    var sum = 0;
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
*/