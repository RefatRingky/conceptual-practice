function maxValue(business,minister,army) {
   if (business > minister && business > army) {
       console.log("Business is bigger");
   } 
   else if(minister > business && army > business)
   {
       console.log("Minister is bigger");
   }
   else{
       console.log("Army is bigger");
   }
}
const biggerValue = maxValue(500,800,600);
console.log(biggerValue);