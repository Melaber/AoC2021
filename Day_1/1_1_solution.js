const args = process.argv.slice(2)
const inputFileName = args[0]



//console.log(args[0])
//const fs = require('fs')

/*const inputFile = fs.readFile(inputFileName, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  return data;
})
*/
const fs = require('fs');
const array = fs.readFileSync(inputFileName).toString().split("\n");
let total_less = 0;
let total_more = 0;
for(i in array) {
    //console.log(array[i]);
    //console.log(array[i-1]);
    if (array[i] < array[i-1]) {
         total_less++
	console.log(array[i] +" is less than " + array[i-1]);
    } else if (array[i] > array[i-1]) {
         total_more++
	console.log(array[i] +" is more than " + array[i-1]);
    } 
}
console.log("Total that are less = " + total_less);
console.log("Total that are more = " + total_more);


