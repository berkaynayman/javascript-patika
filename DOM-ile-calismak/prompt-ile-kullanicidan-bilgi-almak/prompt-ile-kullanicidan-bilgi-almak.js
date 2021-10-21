function mesaj(){
    alert("yükleniyor")
}

let fullName = prompt("Lütfen adinizi giriniz" , "")

let h1 = document.querySelector('#fullName')

h1.innerHTML = `${h1.innerHTML}  <small style="font-weight:bold;color:red;"> ${fullName} </small>`