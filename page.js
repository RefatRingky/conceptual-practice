function pageRequirement(book1,book2,book3) {
 var book1Pages = 100;
 var book2Pages = 200;
 var book3Pages = 300;

 const book1TotalPublish = book1 * book1Pages;
 const book2TotalPublish = book2 * book2Pages;
 const book3TotalPublish = book3 * book3Pages;

 return book1TotalPublish + book2TotalPublish + book3TotalPublish;  
}
let publish = pageRequirement(3,4,5);
console.log(publish);