let title = document.querySelector('#title')

/*title.addEventListener("click", function(){
    alert("tıklandı")
})*/

title.addEventListener("click", domClick)

function domClick(){ 
    this.style.background == "red" ? this.style.background="green" : this.style.background="red"
    console.log(this.innerHTML = "tıklandı")
}

function domOver(){
    this.innerHTML = "üzerine geldi"
}

title.addEventListener("mouseover", domOver)


const DBL = document.querySelector('#DBL')
DBL.addEventListener('dblclick', clickFonk)

function clickFonk(){
    this.innerHTML = "İKİ KEZ TIKLANDI"
}

// klavyelerde event dan faydalanılrlır

/*
const color = document.querySelector('#select')
color.addEventListener('change', selectBox)

function selectBox(event){
    console.log("etkinlik tipi : " , event.type)
    console.log("deger : " , event.target.value)
}
*/


const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })