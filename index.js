// Find a number from an array - without any library., 
// Find  duplicate numbers from an array without using any library. 
// Sort an array of numbers - without any library. Arr = [10, 40, 20, 30, 25, 23 ]\


// const duplicates = (ele, emptyArray) => {
//     let check = false
//     for(let subele of emptyArray){
//         if (subele === ele){
//             check = true
//             break
//         }else{
//            check = false
//         }
//     }

//     return check
// }

// let array1 = [1, 2, 3, 5, 3, 7, 9, 4, 5, 7, 1]
// let emptyArray = []
// for (let ele of array1){
//     let check = duplicates(ele, emptyArray)

//     if(check){
//         console.log(ele)
//     }else{
//         emptyArray[emptyArray.length] = ele
//     }

//     // if(emptyArray.includes(ele)){
//     //     console.log(ele)
//     // }else{
//     //     emptyArray +=[ele]
//     //     console.log(emptyArray)
//     // }
// }

// Sort an array of numbers - without any library. Arr = [10, 40, 20, 30, 25, 23 ]


const returnMinValue = (arr) =>{
    let minVlaue = 1000
    for(let ele of arr){
        if(ele < minVlaue){
            minVlaue = ele
        }
    }

    return minVlaue
}

const removeMinValue = (min, arr) => {
    let temp = []
    for(let ele of arr){
        if(min !== ele){
            temp[temp.length] = ele
        }
    }

    return temp
}

let arr = [43, 25, 76, 46, 88, 39, 34]
let arrLength = arr.length
let sortedArray = []

for(let i=0; i< arrLength ; i++){
    let minVlaue = returnMinValue(arr)
    arr = removeMinValue(minVlaue, arr)
    sortedArray[sortedArray.length] = minVlaue
}
console.log(sortedArray)

// const returnMinValue = (arr) => {
    
//     let minvalue = 1000
//     for(let ele of arr){
//         if(minvalue > ele){
//             minvalue = ele
//         }
//     }
//     return minvalue
// }


// const removeItem = (value, arr) =>{
//     let duplicate = []
//     for(let ele of arr){
//         if(ele !== value){
//             if(duplicate.length === 0){
//                 duplicate[0] = ele
//             }else{
//                 duplicate[duplicate.length] = ele
//             }
//         }
//     }
//     return  duplicate
// }

// let arr = [10, 40, 20, 25, 36, 11]
// let arrLength = arr.length
// let sorted = []
// for(let i=0; i< arrLength;i++){
//     let value = returnMinValue(arr)
//     if(sorted.length === 0){
//         sorted[0] = value
//     }else{
//         sorted[sorted.length] = value
//     }
//     arr = removeItem(value, arr)
// }

// console.log(sorted)

// const checkNumberInArray = (array) => {
//     for(let ele of array){
//         if(typeof ele === 'number'){
//             return ele
//         }
//     }
//     return null
// }


// let array = ['sa', true, null, 3]
// let check = checkNumberInArray(array)
// console.log(check)