let userName = prompt("kullanici bilginizi giriniz")

// ternary kullanimi
// kosul ? dogruysa : yanlissa
let info = `${userName.length > 0 ? userName : "kullanici bilgisi yok"}`

console.log(info)

var money = 40
var canBuy =
    (money < 17) ? "Satın alamazsın":
    (money > 30) ? "Satın alabilirsin":
    "Para miktarını girmen gerekmektedir";

console.log(canBuy)