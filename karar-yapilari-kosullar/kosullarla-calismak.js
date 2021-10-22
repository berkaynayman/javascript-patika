let studentName = prompt("Öğrenci adinizi giriniz")
let studentVize = prompt("Vize noto giriniz")
let studentFinal = prompt("Final noto giriniz")
const VIZE = 0.30
const FINAL = 0.70
let studentOrt = (studentVize * VIZE) + (studentFinal * FINAL)

if( studentOrt >= 31 && studentOrt <= 49 ){
    document.write(`${studentName} isimli öğrencinin ORTALAMASI : ${studentOrt} - DC - KOŞULLU `)
}else if( studentOrt >= 50 && studentOrt <= 84 ){
    document.write(`${studentName} isimli öğrencinin ORTALAMASI : ${studentOrt} - CC - GEÇTİNİZ!`)
}else if( studentOrt >= 85 && studentOrt <= 100 ){
    document.write(`${studentName} isimli öğrencinin ORTALAMASI : ${studentOrt} - AA - HELAL `)
}


