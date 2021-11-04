//josn dosyadan veri çektik
fetch("settings.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector('#list')

//API üzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach( (item) => {
        let li = document.createElement('li')
        li.innerHTML = item.title
        userListDOM.append(li)
    })
})

fetch("https://jsonplaceholder.typicode.com/users").then(
    response => response.json()
).then(responseJson => {
    responseJson.map( (item) =>{
        console.log(item.username)
    })
}).catch((err){
    console.log(err)
})