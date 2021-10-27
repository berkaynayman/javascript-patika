let firstName = "Lorem"

function greetings(firstName, lastName){
    console.log(`merhaba ${firstName} ${lastName}`)
    return firstName
}

console.log(firstName) //lorem
greetings("armut","elma")

/*
let info = greetings("parametre")
console.log(info)
*/

function greetings2(firstName, lastName){
    let info = `merhaba ${firstName} ${lastName}`
    return info
}

let greetings2Info = greetings2("BERKAY", "NAYMAN")
console.log(greetings2Info)
/*
function titleUpdate(id,description){
    let iD = document.querySelector(`#${id}`)
    iD.innerHTML = description
}

titleUpdate("title", "Bu yazı function ile gönderildi")
*/
function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");