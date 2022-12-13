const shortenString = (text) =>{
    if(text.length < 8 || typeof text !== 'string') return 

    const newText = text.slice(0,8)
    const result = newText + "..."
    console.log(result);

}

shortenString("Chào mừng bạn đến với freetuts.net")