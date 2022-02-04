// var number = [44,45,67,60,34,55,32];
// var sum = 0;
// for(var i = 0; i< number.length; i++){
//     var element = number[i];
//     sum = sum + element;
// }
// console.log("Total sum is:",sum);

// using function
function arrayTotal(numbers) {
    var sum = 0;
    for(var i = 0; i< numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum; 
}
var Total = arrayTotal([30,40,50,60]);
console.log("the total sum:", Total);