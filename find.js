function largestElement(numbers) {
    var largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > largest) {
            largest = element;
        }
        
    }
    return largest;
}
const ages = [35,28,20,56,80];
const older = largestElement(ages);
console.log("The oldest age is:",older);