const args = process.argv.slice(2)
const inputFileName = args[0]


const fs = require('fs');
const array = fs.readFileSync(inputFileName).toString().split("\n");
//let x = 0;
//let y = 0;
//let aim = 0;
let sum = [];
for (var i = array[0].length - 2; i >= 0; i--) {
    sum[i] = 0
}

console.log(sum);

/*function removeNewline(str) {
    str !== "\n"
}
*/
for(j in array) {
    array[j] = array[j].split('');
    // array[j].filter(removeNewline);
    let number = array[j];
    
    console.log("line: ", j); 
    
    for (i in number) {
        number[i] = parseInt(number[i],10);
        console.log(number[i])
        sum[i] += number[i];
        /*sum[i] += parseInt(number[i], 10)
        console.log(sum[i])*/

    }

    console.log(number);
}
    sum.pop();

    let gamma = [];
    let epsilon = [];
    //console.log(sum);
    const size = array.length / 2;
    //console.log(size);
    for (k in sum) {
        //console.log(k)
        //console.log(size)
        if (sum[k] > size) {
            gamma[k] = 1
            epsilon[k] = 0
        } else {
            gamma[k] = 0
            epsilon[k] = 1
        }
    }
    console.log(gamma)
    console.log(epsilon)
    gammaDigit = parseInt(gamma.join(''), 2)
    console.log(gammaDigit)
    epsilonDigit = parseInt(epsilon.join(''), 2)
    console.log(epsilonDigit)

    power = epsilonDigit * gammaDigit;
    console.log(power);



    