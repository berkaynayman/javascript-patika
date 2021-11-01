let laptop1 = {
    brand : "Apple",
    model : "MackBook",
    "2kg" : 2,
    model_name : "XX23"
}

console.log(laptop1)

//Dogru anahtar bilgisi olusturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1["2kg"], laptop1["model"])

//Anahtar bilgisine yeni deger eklemek
laptop1.brand = "MAC"

//Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)

keys.forEach( key => {
    console.log(key)
    console.log(laptop1[key])
});

// deger bilgilerine ulasmak (values) -> object.values(item)
console.log(Object.values(laptop1))
let values = Object.values(laptop1)

values.forEach(value => {
    console.log(value)
})