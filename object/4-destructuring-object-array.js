let settings = {
    userName : "berkaynayman",
    password : "1234",
    isActive : false,
    ip       : "127.0.0.1",
    serverName : "google.com"
}

//destructuring

let {userName: user, password, isActive, ip:serverIP, serverName} = settings
console.log(user, password, isActive, serverIP, serverName)
console.log(settings)

// obje içerisindeki bazı bilgilerin cikarilmasi
let { userName: userName2, password:password2, ...newSetting} = settings

console.log(newSetting)

// objenin destructiring ile kopyalanmasi

let settings2 = {...settings}
console.log(settings2)

let score = [100, 200, 300, 400]
let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

let copyOfScore = [...score]
console.log(copyOfScore)