// var ile degisken tanimlama
// modern script ile var kullanılmamaya başladı. var yerine let ve const kullanırız

    //var serverName = "kodluyoruz.org"
    //console.log(serverName)

// let ile degisken tanımlama

    let serverName;
    console.log(serverName); // undefined

// let ile degiskene bilgi atama

    serverName = "https://kodluyoruz.org"
    console.log(serverName)

// degisken atamasi yapmadan once kullanmaya calismak
/*
console.log(fullName) // bu satırdan önce fullName tanımlaması yapılmadığı için hata verir
let fullName = "Berkay Nayman";
*/

// bazi degiskenlerimizin bir kere set edilmesini isteyebiliriz
// const serverPassword; HATA ALIRIZ ÇÜNKÜ BİLGİYİ EKLEMEDİK

const SERVER_PASSWORD = "jdsjh";
console.log(SERVER_PASSWORD);

/*
degisken birden fazla set edilecek ise --> let
degisken bir defa set edilecek ise --> const
*/