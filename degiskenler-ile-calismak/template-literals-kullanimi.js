let username = "berkaynayman"
const DOMAIN = "gmail.com"

let email = username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin: ", email)

// template literals kullanımı

let info = `-Merhaba ${username} sitemize hoş geldin
mail adresin : ${email}
mail adresi uzunluğun : ${email.length}
borcunuz : ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}`

console.log(info)

// alıştırma

const kitap = {
    ad    : "Fırtına",
    yazar : "Shakespeare",
    tarih : 1610
}

const bookTable = `
<table border>
    <tbody>
        <tr>
            <td>Kitap</td>
            <td>${kitap.ad}</td>
        </tr>
        <tr>
            <td>Yazar</td>
            <td>${kitap.yazar}</td>
        </tr>
        <tr>
            <td>Tarih</td>
            <td>${kitap.tarih}</td>
        </tr>
    </tbody>
</table>
`
document.body.innerHTML = bookTable