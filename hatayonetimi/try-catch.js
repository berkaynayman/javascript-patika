let products;

try{
    products.forEach( item => console.log(item))
     //Çalıştırılacak kodlar
}catch(error){
    console.log("error : ", error)
    //Hata yakalandığında çalışacak kodlar
}finally{
    //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}

console.log("hata yönetimi doğru çalışıyor")

let info = "berkay"
console.log(info)