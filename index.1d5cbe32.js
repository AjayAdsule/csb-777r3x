let o,l,e;console.log("arr practice"),console.log([]),console.log([]);let c=[1,2,3,4,50];console.log(c),// Accessing Elements: How do you access the third element in an array?
console.log(c[3]),// Adding Elements: Add the number 6 to the end of an array.
c.push(6),console.log(c),//[1, 2, 3, 4, 5, 6]
// Removing Elements: Remove the second element from an array.
console.log(c.splice(2,1)),console.log(c),// Array Length: Write code to find the length of an array.
console.log(c.length);// Array Iteration: Use a for loop to iterate through and print all elements of an array.
for(let o=0;o<c.length;o++)console.log(c[o]);console.log((o=0,c.forEach(l=>{o+=l}),o));// Array Max Value: Write a function to find the largest number in an array of numbers.
let n=[10,20,3,440,500,2];console.log(n.reduce((o,l)=>o>l?o:l)),console.log((o=>{let l=o[0];for(let e=1;e<o.length;e++)o[e]>l&&(l=o[e]);return l})(n),"loop"),console.log((o=>{let l=o[0];for(let e=1;e<o.length;e++)o[e]<l&&(l=o[e]);return l})(n)),console.log(["ajay","mahesh","bhaves","dinesh","ankrr"].sort()),console.log([10,20,30,52].reverse()),console.log((l=[],[10,3,2,1,5,4,63,8,12].forEach(o=>{o%2==0&&l.push(o)}),l)),console.log((e=[],[10,20,33,6,5,4].filter(o=>{o%2==0&&e.push(o)}),e)),console.log([10,20,30,45].map(o=>o)),console.log([10,20].concat([30,40])),console.log([10,20,20,30,10,10,50].filter((o,l,e)=>e.indexOf(o)===l)),console.log([40,50,60]),console.log("I am Blockchain developer"),console.log([10,20,30,40,50].splice(2,1));//# sourceMappingURL=index.1d5cbe32.js.map

//# sourceMappingURL=index.1d5cbe32.js.map
