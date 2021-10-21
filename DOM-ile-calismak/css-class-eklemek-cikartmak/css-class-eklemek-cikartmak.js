let title = document.querySelector('#title')

title.classList.add("btn")

title.classList.add("text-bold")

//birden fazla class eklmek
title.classList.add("first-class",
"second-class","third-class")

//birden fazla class silmek
title.classList.remove("text-bold" , "olamyan-class-silersek-hata-vermez")

console.log(title.classList)

//item() index sırasına göre class ı çağırmak
console.log(title.classList.item(1))

//contains class içeriyorsa true, içermiyorise false
console.log(title.classList.contains('btn')) // true
console.log(title.classList.contains('btdsd')) // false

function tikla(){
    title.classList.toggle('visible')
    // "visible" classı varsa siler
    // "visible" classı YOKSA ekler

} 

// replace() - classı başka class ile değişltirmek
title.classList.replace("btn", "button")