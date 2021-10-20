console.log(document.location.pathname)
console.log(document.location.href)

console.log(document.head)

console.log(document.body)
document.body.style.backgroundColor = "aqua"

document.formAdi.isim.value = 'Berkay Nayman'
document.getElementById('yas').value = '21'

function myFunction() {
    let w = window.open();
    w.document.open();
    w.document.write("<h1>hello world</h1>")
    w.document.close()
}