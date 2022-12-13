const copyString = (text) =>{
    const result = text.repeat(10).split('').join("-")
    return result
}
console.log(copyString("a"));