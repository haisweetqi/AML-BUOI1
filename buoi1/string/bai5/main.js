const copyString = (text , number) =>{
   if(number < 1) return false
    const result = text.repeat(number).split('').join("-")
    return result
   
}
console.log(copyString("a",0));