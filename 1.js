/* 
let string ="123456777"
let count =0

for(let i=0;i<string.length;i++){
    //charAt is a method that returns the character at the specified index
    string.charAt(i)==="7" ? count++ : count
}
console.log(count) */

let paragragh = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'
let count1 =0
let count2 =0
const countWords = (paragragh,word1,word2) => {
//it turns the string into an array
let array=paragragh.split(" ")
for (let i=0;i<array.length;i++){
    if(array[i]===word1){
        count1++
    }
    else if(array[i]===word2){
        count2++
    }
}
console.log(count1)
console.log(count2)
count1>count2 ? console.log(`The word ${word1} more frequently occurred than ${word2}.`) : console.log(`The word ${word2} more frequently occurred than ${word1}`)

}
countWords(paragragh,'love','you')