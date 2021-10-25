let userName = prompt("Kullanici Adiniz")
let age      = prompt("Yaşınızı giriniz")

if(userName && age >= 18){
    console.log("ehliyet alabilirsin")
}else if(!userName){
    console.log("kullanici adiniz yok")
}else if( !(age>=18) ){
    console.log("Yas bilginiz yok veya 18 yasından kucuksunuz")
}

let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}

function getLetter(s) {
    let letter;
switch (s[0]) {
    case ('a' || 'e' || 'o' || 'i' || 'u'):
        letter = 'A';
        break;
    case ('b' || 'c' || 'd' || 'f' || 'g'):
        letter = 'B';
        break;
    case ('h' || 'j' || 'k' || 'l' || 'm'):
        letter = 'C';
        break;
    case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
        letter = 'D';
}
return letter;
}