// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO

//var a is not an array. It is a string.
if (Array.isArray(a)){
    console.log("Variable a is an Array");
    document.write("<h2> Variable a is an Array </h2>");
} else {
    console.log("Variable a is not an Array. It is a " + typeof(a));
    document.write("<h2> Variable a is not an Array. It is a " + typeof(a) + "</h2>");
}

//var b is an array.
if (Array.isArray(b)){
    console.log("Variable b is an Array");
    document.write("<h2> Variable b is an Array </h2>");
} else {
    console.log("Variable a is not an Array. It is a " + typeof(a));
    document.write("<h2> Variable a is not an Array. It is a " + typeof(a) + "</h2>");
}


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

function timesTwo(a){
    for(let i=0;i<a.length;i++){
        a[i] = a[i] * 2;
    }
    console.log(a);
    document.write("<h2> ["+ a +"] </h2>");
}

timesTwo(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
caseOne = colors.join(" ");
console.log(caseOne);
document.write("<h2> Case 1 output: '"+ caseOne +"' </h2>");

caseTwo = colors.join("+");
console.log(caseTwo);
document.write("<h2> Case 2 output: '"+ caseTwo +"' </h2>");

caseThree = colors.join(",");
console.log(caseThree);
document.write("<h2> Case 3 output: '"+ caseThree +"' </h2>");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

function sortNumber(a){
    var temp;
    for (let i=0 ;i<a.length; i++){
        for(let j=0;j<a.length; j++){
            if (a[j] < a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    console.log(a);
    document.write("<h2> ["+ a +"] </h2>");
}

sortNumber(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

function findFrequent(a){
    var maxCounter = 1;
    var counter = 1;
    var frequent;

    for (let i=1;i<a.length; i++){
        if (a[i] == a[i - 1]){
            counter++;
        } else {
            if(counter > maxCounter){
                maxCounter = counter;
                frequent = a[i - 1];
            }
            counter = 1;
        }
    }
    if (counter > maxCounter){
        maxCounter = counter;
        frequent = a[a.length - 1]
    } 
    console.log(frequent);
    document.write("<h2> "+ frequent +"</h2>");
}

findFrequent(a);