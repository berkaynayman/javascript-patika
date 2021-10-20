let email     = "berkaynayman4@gmail.com"
let firstName = "Berkay"
let lastName  = "Nayman"

// string karakter sayisi -> length
console.log(firstName.length)

// ilk karakteri bulmak -> [0] , charAt()
console.log(firstName[0])
console.log(firstName[1])
console.log(firstName.charAt(0))

// buyuk - kucuk harf
firstName = firstName.toUpperCase();
console.log(firstName)

firstName = firstName.toLowerCase();
console.log(firstName)

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@")) // 13
console.log(email[email.search("@")]) // @
email.search("sdaddsda") // -1
email.search("b") // 0
email.search("yok") // -1
console.log(email.search("berkay")) // 0

// belli bir yere kadar al -> slice
let DOMAIN = email.slice(email.search("@") + 1) // gmail.com
console.log(DOMAIN)

console.log("email - search : ", email.search(/\./)) // NOKTA SEARCH EDERKEN DOĞRU KULLANIM BUDUR

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) // gmail

// bilgiyi degistir -> replace :
email = email.replace('gmail', 'hotmail')
console.log(email)

// istediğim bilgi varmı -> includes
console.log(email.includes('hotmail')) // true
console.log(email.includes('gmail')) // false
console.log(email.includes('@')) // true

// istediğim bilgiyle basladimi? bittimi? -> startsWidth, endsWidth

console.log(email.startsWith('berkay')) // true
console.log(email.startsWith('nayman')) // false
console.log(email.endsWith("hotmail.com")) // true

// ilk harflerini büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)

// Concat - Metin Birleştirme
fullName = firstName.concat('', lastName)
console.log(fullName) //berkayNayman

// charAt - index numarasına göre karakter bulmak
console.log(fullName.charAt(2)) // r

// charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
console.log(fullName.charCodeAt(1)); // 101

/* Split – Metni Diziye Çevirme Split metodu
ile istenilen metin diziye çevrilebilir.
Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir. */

var isim = "Berkay,Temel,Dursun,Ahmet"
var isimler = isim.split(',')
console.log(isimler)