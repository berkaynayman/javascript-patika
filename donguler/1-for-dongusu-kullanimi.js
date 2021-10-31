const LIST = document.querySelector('#list')
let meyveler = ["Muz","Armut","Elma"]


for(let i = 0 ; i < meyveler.length ; i++){
    let item = document.createElement('li')
    item.innerHTML = `${meyveler[i]}`
    LIST.append(item)
}

let words = ["a", "e", "i", "o", "u"]
function vowelsAndConsonants(s) {
   var array = s.split("")
   var reArray  = []   
   var reArray1 = []
   var reArray2 = []
   
   array.map((i) =>{
       for(let j=0; j < words.length ; j++){
           if(i == words[j]){
               reArray1.push(i)
               //console.log(i)
           }
       }

       let kontrol = 0
       for(let j=0; j < words.length ; j++){
           if(i != words[j]){
               kontrol++
           }
           if(kontrol == 5){
               reArray2.push(i)
               //console.log(i)
           }
       }

   })
    reArray = reArray1.concat(reArray2)
    reArray.map((x) => console.log(x))
}