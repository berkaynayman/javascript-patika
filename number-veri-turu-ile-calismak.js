// number veri turu tanıumlamak
let price = 100
let tax   = 0.18
let priceTax = price * tax
console.log("Fiyat: ", price, "KDV orani: ", tax, "KDV tutari: ", priceTax)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("number constructor icine bilgi gönderildi : ", Number("111"));

// artirma ve azaltma işlemleri

let counter = 320
counter++
counter--

// mod(kalan) alma %
console.log(15%2)

// us alma
console.log(2 ** 4)

// asagi yuvarlama işlemi -> Math.floor:
console.log("Asagi yuvarlama: ", Math.floor(1.9)) // -> 1

// yukari yuvarlama islemi -> Math.ceil:
console.log("yukari yuvarlama: ", Math.ceil(1.9)) // -> 2

// yakina yuvarlama islemi
console.log("yakina yuvarlama: ", Math.round(1.9)) // -> 2