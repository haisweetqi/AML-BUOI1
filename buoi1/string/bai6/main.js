const  reverse = (s)  =>{
    return s.split('').reverse().join('');
}
console.log(reverse("hello"));

// function reverse (s) {
//     var o = [];
//     for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
//        o[j] = s[i];
//     return o.join('');
// }