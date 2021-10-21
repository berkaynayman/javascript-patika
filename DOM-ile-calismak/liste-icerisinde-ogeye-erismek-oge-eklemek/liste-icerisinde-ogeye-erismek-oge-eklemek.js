let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti"

document.querySelector("ul#list>li:first-child").innerHTML = "ilk oge değişti"
console.log(lastChild)

// yeni oge eklemek

let ulDOM = document.querySelector('ul#list')
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturduğumuz öge"
// sona ekler
ulDOM.append(liDOM)

// başa ekler
ulDOM.prepend(liDOM)