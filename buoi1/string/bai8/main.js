const checkUpperCase = (text) =>{
    for (let i = 0; i < text.length ; i++) {
        character = text.charAt(i);
        
        if(character === character.toUpperCase()){
            return true
        }
        return false
        
    }
}

console.log(checkUpperCase("HELLO WORLd"));