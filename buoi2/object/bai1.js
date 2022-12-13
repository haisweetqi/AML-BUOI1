// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// };
// => name,age,email


var user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};
// bai1

const getKeyObject = () =>{
    return Object.keys(user)
}


// bai 2
const getValueObject = () =>{
    return Object.values(user)
}

// bai3
const checkKeyInObject = (key) => {
    if(key in user){
        return true
    }
    return false
}


// bai4
const checkLengthObject = () =>{
    const size = Object.keys(user).length; 
    return size
}


// bai5

// var user = [
//     {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@amela.vn'
// },
// {
//     name : "Nguyễn Tiến c",
//     age : 10,
//     email : 'support@amela.vn'
// },
// {
//     name : "Nguyễn Tiến b",
//     age : 28,
//     email : 'support@amela.vn'
// },
// {
//     name : "Nguyễn Tiến a",
//     age : 28,
//     email : 'support@amela.vn'
// },

// ];


const getUser = () =>{
    const result = user.filter((item, index) => item.age > 25)
    return result
}
