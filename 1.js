/* 
let string ="123456777"
let count =0

for(let i=0;i<string.length;i++){
    //charAt is a method that returns the character at the specified index
    string.charAt(i)==="7" ? count++ : count
}
console.log(count) */

//1.a

let paragragh = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'
//replaces the full stop
let paragraph= paragragh.replace(/[.]/g,"")
console.log(paragraph)
let count1 =0
let count2 =0
const countWords = (paragraph,word1,word2) => {
//it turns the string into an array
let array=paragraph.split(" ")
console.log(array)
//if word1 and word2 is in array respective counts increase
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
//according to the count respective words are more frequent
count1>count2 ? console.log(`The word ${word1} more frequently occurred than ${word2}.`) : console.log(`The word ${word2} more frequently occurred than ${word1}`)

}
countWords(paragraph,'love','you')


//1.b

 const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    const cleanText =(text) =>{
        //replaces special characters with empty string
        const clean = text.replace(/[%$@,&#;!]/g, ``)
        return clean
    };
    newSentence = cleanText(sentence)
   console.log(newSentence)

   //1.c

   const countwords = (text) =>{
       //converting in to array
    let array = text.split(" ")
    console.log(array)
    let count =0
    for(let i=0;i<array.length;i++){
        //if the word length is greater than 1 then count increases
        array[i].length>1? count++ : count
    }
    return count
   }
    console.log(countwords(newSentence))