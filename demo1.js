//随机字符串 从字符串找出出现
let str = '1233333eeeeeeeeeeeeeee'

function subStr(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (!obj[str.charAt(i)]) {
      obj[str.charAt(i)] = 1
    } else {
      obj[str.charAt(i)]++

    }
  }
  let max  = 0
  let maxname = ''
  for (const key in obj) {
      if(obj[key]>max){
        max = obj[key]
        maxname = key
      }
  }
return maxname
  }
  console.log(subStr(str));