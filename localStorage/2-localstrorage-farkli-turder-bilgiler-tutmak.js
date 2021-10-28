let user = {
    userName : "berkaynayman",
    isActive : "true"
}

console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user) )
let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo.isActive)


let items = [1, 2, 3, user]
localStorage.setItem('newItem', JSON.stringify(items))

localStorage.getItem('newItem')
console.log(JSON.parse(localStorage.getItem('newItem')))