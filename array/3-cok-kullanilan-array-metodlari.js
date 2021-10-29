let items = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers   = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)

// Array içerisinden oge ayirmak -> splice(pos, item)
let newItems = items.splice(1, 5)
// 1.indexten başlayarak sirayla 5ogeyi ayır

// Array içerisinde ögenin index bilgisini bulmak
console.log(newItems)
console.log(newItems.indexOf(5))

// Array kopyalamak ->  slice, [...ES6]
let copyItems = [...items]
// bireşimde yapabiliriz
let allUsers = [...femaleUsers, ...maleUsers, ...newItems]
console.log(allUsers)

//Array içerisindeki bilgiyi String'e cevirmek -> toString(), join()
console.log(allUsers.toString()) // diziyi stringe cevirir. aralara virgül ekler

console.log(allUsers.join(" -- ")) // dizi ögelerini birleştirir öge aralarına -- ekler

// istediğimiz index bilgisine oge eklemek -> splice(index, 0, value)
femaleUsers.splice(allUsers.length - 1, 0, "Melissa")
// arrayın ortasın ekler
femaleUsers.splice( Math.floor(femaleUsers.length / 2), 0, "lorem")

console.log(femaleUsers)
console.log("----------------------------")
let sayilar = [20, 22, 30, 33, 40, 44, 50, 55]

//forEach()
sayilar.forEach((sayi, sayiIndex) => {
    console.log(sayi , sayiIndex)
})

//map()
let sayilarin2kati = sayilar.map((sayi) => {
    return sayi * 2
})
console.log(sayilarin2kati)

//some()
const sonuc = sayilar.some((sayi) =>{
    return sayi > 50
})
console.log(sonuc) // true

const sonuc2 = sayilar.some((sayi) =>{
    return sayi > 55
})
console.log(sonuc2) // false

//every()
const sonuc3 = sayilar.every((sayi) =>{
    return sayi > 5
})
console.log(sonuc3) // true

//filter
const sonuc4 = sayilar.filter((sayi) =>{
    return sayi > 30
})
console.log(sonuc4)

//find()
const bulunucakeleman = sayilar.find((sayi) => {
    return sayi === 50
})
console.log(bulunucakeleman)

// SORULAR
//SORU-1
let dizi = [2,5,8,11,15,17];

/* Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları
içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi
oluşturun. (sonuç [55, 75, 85] olmalı.) */

let soru1CVP = dizi.filter( (sayi) => {
    return sayi > 10
}).map( (sayi) => {
    return sayi*5
})

console.log(soru1CVP)

//SORU-2
let dizi2 = [3,6,9,14,16];
/* Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki
şartları sağlayan myFunction fonksiyonunu yazın.
Elemanların arasında 5'ten büyük olan olan bir eleman varsa
konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük
eleman mevcut değil." yazdır.*/

function myFunction (dizi){
    dizi.some((sayi) => {
        return sayi > 5
    }) === true ? 
    console.log("Beşten büyük bir eleman mevcut.")
    : console.log("5ten büyük eleman mevcut değil.")
}

myFunction(dizi2);

//SORU-3
let dizi3 = [2, 3, 4];

/* Uygun dizi metodunu kullanarak yukarıda verilen dizinin
elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
*/

function indirgeyici(akumulator, sayi){
    return akumulator * sayi
}

let soru3CVP = dizi3.reduce(indirgeyici, 1);
console.log(soru3CVP)


function getSecondLargest(nums) {
    // Complete the function
    let maks = Math.max(...nums)
    nums = nums.filter(num => num != maks)
    return Math.max(...nums)
}