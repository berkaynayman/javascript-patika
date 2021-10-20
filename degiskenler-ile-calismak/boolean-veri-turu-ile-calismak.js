// 0 ve 1 i anlamak

let isActive = false // 0
isActive = true
console.log(isActive)

let userName;
let isUserName = Boolean(userName) //false
console.log(isUserName)

Boolean("11")//true
Boolean("0")//true
Boolean("")//false

Boolean(0) //false
Boolean(-0) // false
Boolean(-0.1) // true
console.log(Boolean(-0.1))

// 0 , -0 , null , false , NaN , undefined , ("")