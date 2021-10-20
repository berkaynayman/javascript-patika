// veri turunu ögrenmek typeof:

let price       = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

// string(metinsel) bilgileri int ve float' a donusturmek
parseInt() // convert to int

let number1 = "11"
number1 = parseInt(number1)
console.log("number1 : ", number1 , typeof(number1))

let number2 = "11PX" // baştaki 11 i ayırt edebilir ama 11 den önce harf olsaydı ayırt edemezdi
number2 = parseInt(number2)
console.log("number2 : ", number2 , typeof(number2))

let number3 = "44s" // sayıyı algılamaz
number3 = "44"
number3 = Number(number3)
console.log("number3 : ", number3 , typeof(number3))

let number4 = "11.4px"
number4 = parseFloat(number4) // baştakıo sayısal veriyi alır
console.log("number4 : ", number4 , typeof(number4))

// number veri tipinden string' e donusturmek
let number5 = 55
number5 = number5.toString()
console.log("number5 : ", number5, typeof(number5))

//isInteger() sayıların tam sayı olup olmadığını belirler
console.log(Number.isInteger(123)) //true
console.log(Number.isInteger(1.5)) //false

//isFinite() yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler
console.log(Number.isFinite(0)) //true
console.log(Number.isFinite('123')) //false
console.log(Number.isFinite(1000/0)) //false
console.log(Number.isFinite(1000/1)) //true

//isNan() yöntemi, bir değerin NaN(not a number) olup olmadığını belirler.
console.log(Number.isNaN(123)) //false
console.log(Number.isNaN('')) //false
console.log(Number.isNaN(NaN)) // true