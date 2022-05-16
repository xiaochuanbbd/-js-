let arr = [2,3,21,2,1,2,33,44,32]
function fn(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]

            }
        }
        
    }
    return arr
}
let res = fn(arr)
console.log(res);