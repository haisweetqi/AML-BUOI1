const checkStringExists  = (text , text2) =>{
    const checkString = typeof text
    const checkString1 = typeof text2
    console.log(typeof checkString);
    console.log(typeof checkString1);

    if(checkString !== "string" || checkString1 !== "string") return;
    if(text.includes(text2) ) return true
    return false
}


console.log(checkStringExists("Hello world!", "w"));