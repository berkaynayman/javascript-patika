function hello(){
    console.log("merhaba dünya")
    helloWorld()
}

function helloWorld(){
    console.log("hello world")
}

function userCheck() {
    
}

hello()

function addition(sayi1, sayi2){
    console.log(sayi1+sayi2)
}

addition(23,41)

let add = function (sayi1,sayi2){
    console.log(sayi1+sayi2)
}

const carpim = (sayi1, sayi2) => sayi1 * sayi2
console.log(carpim(4,2))

const karesiniAl = (sayi) => sayi * sayi

//const helloWorld = () => console.log('hello world')

//let experience = prompt('kac yillik tecrüben var');
/*const developer =
    experience < 5
    ? () => alert('bir cok konuyu biliyorum')
    : () => alert('hicbir sey bilmiyorum');

developer();*/

let toplam = (a,b) => {
    let result = a + b
    return result
};

//RECURSION
// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1. yol (recursion patterni ile düşünmeden)
function pow(x, n){
    let result = 1
    for(let i=0; i>n;i++){
        result *= x
    }
    return result;
}

//alert(pow(2, 3)) // 8

//recursion ile
function pow(x, n){
    if(n == 1){
        return x
    } else{
        return x * pow(x, n - 1)
    }
}

function POW(x,n){
    return n == 1 ? x : x * pow(x, n - 1)
}

function stringFormat(str) {
    {
      let part1 = str.slice(0, 3);
      let part2 = str.slice(3);
      str = part1.toUpperCase() + part2;
    }
    //part1 ve part2 kullanılamaz.
    //console.log(part1)
    //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
    if (true) {
      return str;
    }
    return str.slice(4);
}

console.log(stringFormat('BerkayNayman'))

/*nested function - Bir Fonksiyon içerisinde başka bir fonksiyonu
tanımladığımız zaman buna nested functions yapısı diyoruz aslında.*/

function programDetayi(bootcamp, organizasyon){
    //nested yardımcı fonk
    const tumprogram = () => bootcamp + ' ' + organizasyon

    console.log('basladi ' + tumprogram())
    console.log('bitti ' + tumprogram())
}
programDetayi("JS", "patika")