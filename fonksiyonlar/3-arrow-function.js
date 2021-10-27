const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
helloFuncV1("JS V1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("JS V2")

const helloFuncV3 = (firstName, lastName) =>
    console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("JS", "V3")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("JS", "V4")

const seriesList = list => {
    list.forEach((series, index) => {
        console.log(`${index+1} ${series}`)
    });
}

seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);


const funcNum = numberArray =>{
    numberArray.forEach(item => {
        if(numberArray[item-1] % 2 == 0){
            numberArray[item-1] = ( numberArray[item-1] * 2 )
        }else{
            numberArray[item-1] = ( numberArray[item-1] * 3 )
        }
    })
    return numberArray;
}

console.log(funcNum([1,2,3,4,5]))