const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

const CARDLIST_DOM = document.querySelector('#cardlist')

const BUTTONS = ["All", "Korea", "Japan", "China"]
let btnContainer = document.querySelector(".btn-container")

BUTTONS.map((item) =>{
    let btn = document.createElement("BUTTON")
    btn.id = item.toLowerCase()
    btn.innerHTML = item
    btnContainer.append(btn)
    btn.classList.add('btn-item')
})

let cardlistFunc = function(items){
  items.map( (item) => {
    let divcard = document.createElement("div")
    divcard.style.width = "18rem"
    divcard.classList.add('card', 'text-center')
    divcard.id = "card" + item.id
    CARDLIST_DOM.append(divcard)
    const DIVCARD_DOM = document.querySelector('#card'+item.id)

    let img = document.createElement("img")
    img.classList.add("card-img-top", "card-img-w-h")
    img.src = item.img
    DIVCARD_DOM.append(img)

    let divcardbody = document.createElement("div")
    divcardbody.classList.add("card-body")
    DIVCARD_DOM.append(divcardbody)

    const DIVCARDBODY_DOM = document.querySelector('#card'+item.id+' .card-body')
    let h3 = document.createElement('h3')
    h3.innerHTML = item.title
    DIVCARDBODY_DOM.append(h3)

    let p = document.createElement('p')
    p.classList.add('card-text')
    p.innerHTML = item.desc
    DIVCARDBODY_DOM.append(p)

    let divcardfooter = document.createElement("div")
    divcardfooter.classList.add('card-footer')

    let h2 = document.createElement('h2')
    h2.innerHTML = item.price

    DIVCARD_DOM.append(divcardfooter)
    divcardfooter.append(h2)
  })
}

const BTN_ALL = document.querySelector('#all')
const BTN_KOREA = document.querySelector('#korea')
const BTN_JAPAN = document.querySelector('#japan')
const BTN_CHINA = document.querySelector('#china')

BTN_ALL.addEventListener('click', function(){
  CARDLIST_DOM.innerHTML = ""
  cardlistFunc(menu)
})

BTN_KOREA.addEventListener('click', function(){
  CARDLIST_DOM.innerHTML = ""
  let korea = menu.filter((item) => {
    return item.category == "Korea"
  })
  cardlistFunc(korea)
})

BTN_JAPAN.addEventListener('click', function(){
  CARDLIST_DOM.innerHTML = ""
  let japan = menu.filter((item) => {
    return item.category == "Japan"
  })
  cardlistFunc(japan)
})

BTN_CHINA.addEventListener('click', function(){
  CARDLIST_DOM.innerHTML = ""
  let china = menu.filter((item) => {
    return item.category == "China"
  })
  cardlistFunc(china)
})