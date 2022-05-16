//2.a
//  if the length of string is less than 8 then "#" will be added to string until its length is 8 and it is consoled
for (let string = "#"; string.length < 8; string += "#") {
  console.log(string);
}


//2.b

const sevenRandomNumbers=()=>{
    let array= []
    //for loop to generate 7 random numbers
    for (let i=0;i<8;i++){
        //math.floor floors to the nearest integer
        //math.random generates a random number between 0 and 1
        let num = Math.floor(Math.random()*10)
        array.includes(num)?num:array.push(num)
    }
    return array
}
console.log(sevenRandomNumbers())
