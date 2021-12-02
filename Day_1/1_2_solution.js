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
    //const current_sum = array[i] + array[i-1] + array[i-2];
    const current_sum = eval(array[i] + array[i-1] + array[i-2]);
    const previous_sum = array[i-1] + array[i-2] + array[i-3]
    console.log(current_sum +" is the current sum");
    console.log(previous_sum + " is the previous sum");
    /*if (array[i] < array[i-1]) {
         total_less++
	console.log(array[i] +" is less than " + array[i-1]);
    } else if (array[i] > array[i-1]) {
         total_more++
	console.log(array[i] +" is more than " + array[i-1]);
    } */
}
console.log("Total that are less = " + total_less);
console.log("Total that are more = " + total_more);


