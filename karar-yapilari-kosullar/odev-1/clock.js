let userName  = prompt("Adınız nedir")
let days      = ["Pazartesi", "Salı", "Çarşamba", "Perşembe",
"Cuma", "Cumartesi", "Pazar"]
const myName  = document.querySelector('#myName')
myName.innerHTML = userName

let myClock = document.querySelector('#myClock')

function showTime(){
    let d = new Date()
    let s = d.getSeconds()
    let m = d.getMinutes()
    let h = d.getHours()
    let day = days[d.getDay()-1]
    myClock.innerHTML = `${h}:${m}:${s} ${day}`
    setInterval(showTime, 1000)
}

showTime()