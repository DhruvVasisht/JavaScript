//const words = [
//  "Apple",
//  "Banana",
//  "Mango",
//  12,
//  false,
//  {
//    name: "Dhruv",
//  },
//  function hello() {
//    console.log("hello");
//  },
//];
//
//const newWords=words;
//newWords[1]='Kiwi'
//console.log(words);
//console.log(newWords);
////console.log(words.length);

const nums=[4,1,2,3,6,7];
console.log(nums.indexOf(7));
console.log(nums.indexOf(80));
console.log(nums.includes(6));
nums.push("Dhruv")
console.log(nums);
nums.unshift("Rahul")
console.log(nums);
nums.pop()
console.log(nums);
nums.shift()
console.log(nums);
nums.sort();
console.log(nums);
const subArray=nums.slice(2,6)
console.log(subArray);