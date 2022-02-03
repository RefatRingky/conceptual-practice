var number1 = 30;
var number2 = 20;
var number3 = 30;
if (number1 < number2) {
    if (number1 < number3) {
        console.log("Number one is smaller");
    }
    
}
else if(number2 < number3){
    if (number2 < number1) {
        console.log("Number two is smaller");
    }
}
else{
    console.log("Number three is smaller");
}