// bai1
const arrays = [1,7,3,2]
const minNumbers = (array) =>{
    if(array.length === 0) return
    const reverseArray = array.sort()
    return reverseArray[0]
}

// bai2
const minNumbersTwo = (array) =>{
    if(array.length === 0) return
    const reverseArray = array.sort()
    return reverseArray[array.length - 1]
}
// bai3
const sortName = (array) =>{
    const result = array.sort()
    return result.reverse()
 }


// bai4
const sumZeroToHundred = (array) =>{
    const arrayDivideToFive = array.filter(item =>item % 5 ===0)
    const initialValue = 0;

    const sumWithInitial = arrayDivideToFive.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
     return sumWithInitial
}


// bai5
const maxLengthEle = (array) =>{
    const result = array.filter(item => item.length)
}
// bai6

const filterElementsMaxLenth = (array) =>{
    const data = array.map(item =>{ return  item.length})
    var maxInNumbers = Math.max.apply(Math, data); 
     
    const result = array.filter(item => item.length >= maxInNumbers)
   return result
}


// bai7
const getRandonElement = (array) =>{
    const randomElement = array[Math.floor(Math.random() * array.length)]
    return randomElement
}

// bai8

const randomArray = (array ) =>{
    const newArray = []
    const arrayLength = array.length
    
    for (let i = 0; i < arrayLength; i++) {
        const randomNumberIndexArray = Math.floor(Math.random()* array.length);
        newArray.push(array[randomNumberIndexArray])
        array.splice(randomNumberIndexArray , 1)
      
    }
   return newArray
    
}
// bai9
const similarity = (array, array1) =>{
    const result = array.filter(item => array1.includes(item))
    return result
}
// bai10

const symmetricDifference = (array1 , array2) =>{
 const result = array.filter(item => !array1.includes(item))
    return result
}

// bai11
const sub_String = (stringData) => {
  const subset = [];
  for (let m = 0; m < stringData.length; m++) {
    for (let n = m + 1; n < stringData.length + 1; n++) {
      subset.push(stringData.slice(m, n));
    }
  }
  return subset;
};

// bai12



// bai13
function twoWaySort(arr,n)
    {
        // Current indexes from
        // left and right
        let l = 0, r = n - 1;
   
        // Count of odd numbers
        let k = 0;
   
        while (l < r)
        {
           
            // Find first even number
            // from left side.
            while (arr[l] % 2 != 0)
            {
                l++;
                k++;
            }
   
            // Find first odd number
            // from right side.
            while (arr[r] % 2 == 0 && l < r)
                r--;
   
            // Swap even number present
            // on left and odd
            // number right.
            if (l < r)
            {
               
                // swap arr[l] arr[r]
                let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
            }
        }
           
        let odd=new Array(k);
        for(let i=0;i<k;i++)
        {
            odd[i]=arr[i];
        }
        let even=new Array(n-k);
        for(let i=0;i<n-k;i++)
        {
            even[i]=arr[k+i];
        }
        // Sort odd number in descending order
        odd.sort(function(a,b){return b-a;});
        // Sort even number in ascending order              
        even.sort(function(a,b){return a-b;});
         
        return odd.concat(even);
        
    }
    // Driver Method
    let arr=[1, 3, 2, 7, 5, 4 ];
    let ans=twoWaySort(arr, arr.length);
    for(let i=0;i<ans.length;i++)
    {
        console.log(ans[i]);
    }
     
     