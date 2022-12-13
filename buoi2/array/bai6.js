const symmetricDifference = (array , array1) =>{
 const result = array.filter(item => !array1.includes(item))
    return result
}

const arr = [1,2,3,4]
const arr2 = [1,2]
console.log(symmetricDifference(arr,arr2));