// array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // bos list


// array icindeki eleman oge sayısını ogrenmek
items.length

items[0] // ilk elemanın çağrılmasıo

items[ Math.floor(items.length / 2) ]

items[items.length - 1] // son eleman

//desiken icindeki bilginin array olup olmadığını kontrolo edilmesi
console.log(typeof(items)) // object
console.log(Array.isArray(items)) // true

// hangileri isArray -> true verir ? 
console.log("[] : " , Array.isArray([]) ) // true
console.log("1 : " , Array.isArray(1) ) // false
console.log("true : " , Array.isArray(true) ) // false


