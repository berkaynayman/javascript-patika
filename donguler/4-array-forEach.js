const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

//PRODUCTS.forEach((product, index, array) => array[index] = product + " 111")
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)

console.log(PRODUCTS)

const listDOM = document.querySelector('#list')
PRODUCTS.forEach( item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    listDOM.append(liDOM)
})