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