//2.a
//  if the length of string is less than 8 then "#" will be added to string until its length is 8 and it is consoled
for (let string = "#"; string.length < 8; string += "#") {
  console.log(string);
}


//2.b 

const sevenRandomNumbers=()=>{
    let array= []
    //for loop to generate 7 random numbers
    for (let i=0;i<7;i++){
        //math.floor floors to the nearest integer
        //math.random generates a random number between 0 and 1
        let num = Math.floor(Math.random()*10)
        console.log(num)
        //if the num is alredy in the array then it will not be added then index will be reduced and loop will be continued
        if(array.includes(num)){
            i--
         continue}
             else{array.push(num)}

    }
    return array
}
console.log(sevenRandomNumbers())

//2.c
let arrays=["A","B","C"]
const reverseArray = (arrays) => {
    //we only need to reverse half of the array if fully reversed it will be equal to old array
    for (let i=0;i<(arrays.length/2);i++){
        //storing "A" to temp
        let temp=arrays[i]
        //i=0 and arrays.length-1=2 storing "C" to 0th index
        arrays[i]=arrays[arrays.length-1-i]
        //storing "A" to last index
        arrays[arrays.length-1-i]=temp
        return arrays
    }
}
console.log(reverseArray(arrays))

//2.d
const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3]
const checkUniqueness = (arr) => {
       let unique = new Set(arr)
       //if the length of unique is equal to the length of arr then it is unique and it returns true
       return unique.size === arr.length ? true : false  
}
console.log(checkUniqueness(arrOne))
console.log(checkUniqueness(arrTwo))





