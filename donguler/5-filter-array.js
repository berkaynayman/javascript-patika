const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// 5 harften uzun olanları getir ?
const NEW_PRODUCTS = PRODUCTS.filter( product => product.length > 5)
console.log(NEW_PRODUCTS)


const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Asya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
]

// aktif kullanicilar ??

//const USERS_ACTIVE = USERS.filter( user => user.isActive == true )

const USERS_ACTIVE = USERS.filter(user => user.isActive)

console.log(USERS_ACTIVE)


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

//Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
let SR1 = person.filter( item => item.age > 30)
console.log(SR1)

//Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
let SR2 = person.filter( item => item.languages.includes("JavaScript"))
console.log(SR2)