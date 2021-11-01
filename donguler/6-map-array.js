const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS)

const USERS_OBJ = USERS.map( item => {
    return {
        userName  :  item,
        shortName : `${item[0]}.`,
        newName   : `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }
})

console.log(USERS_OBJ)

const SALARY =  [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];

const NEW_SALARY_OBJ = SALARY.map( item => {
    return {
        oldSalary: item,
        newSalary: item>3000 ? item*1.15 : item*1.25
    }
})

console.log(NEW_SALARY_OBJ)
