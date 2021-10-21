let h2 = document.getElementsByTagName('h2')
console.log(h2.title.innerHTML)

let title = document.getElementById('title')
title.innerHTML = 'degisen bilgi'
console.log(title.innerHTML)

const nameEposta = document.getElementsByName('email')
console.log(nameEposta) // NodeList [input]

//querySelector

//let link = document.querySelector("ul#list>li>a")
let link = document.querySelector('#linkbilgi')
link.innerHTML += ' degisti'
link.style.color = "red"
link.style.fontWeight = "bold"
link.classList.add('btn')
console.log(link.innerHTML)

// signup id'li elemanın içindeki tüm input elemanlarını seçmek istersek;

let inputs = document.getElementById('signup').getElementsByTagName('input')

inputs = document.querySelector('#signup').querySelectorAll('input')
inputs[0].value = "berkaynayman4@gmail.com"
inputs[1].value = 213435432542


// DOM ornekler

// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
const text = document.querySelector('#text')
function js_style(){
    text.style.color = 'red'
}