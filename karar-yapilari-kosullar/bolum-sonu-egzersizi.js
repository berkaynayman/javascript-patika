
const INFO = document.querySelector('#info')
let userInfo = prompt("Notunuzu giriniz")


if(userInfo >= 0 && userInfo <= 100){
    if(userInfo >= 90 && userInfo <= 100){
        INFO.innerHTML = "AA :)"
    }else if(userInfo >= 85 && userInfo <= 89){
        INFO.innerHTML = "BA :)"
    }else if(userInfo >= 80 && userInfo <= 84){
        INFO.innerHTML = "BB :)"
    }else if(userInfo >= 75 && userInfo <= 79){
        INFO.innerHTML = "CB :)"
    }else if(userInfo >= 70 && userInfo <= 74){
        INFO.innerHTML = "CC :)"
    }else if(userInfo >= 65 && userInfo <= 69){
        INFO.innerHTML = "DC :)"
    }else if(userInfo >= 60 && userInfo <= 64){
        INFO.innerHTML = "DD :)"
    }else if(userInfo >= 50 && userInfo <= 59){
        INFO.innerHTML = "FD :)"
    }else if(userInfo >= 0 && userInfo <= 49){
        INFO.innerHTML = "FF :("
    }
    userInfo >= 50 ? INFO.classList.add("text-primary") : INFO.classList.add("text-danger")
}else{
    INFO.innerHTML = "0 ve 100 arası giriş yapmanız gerek"
}