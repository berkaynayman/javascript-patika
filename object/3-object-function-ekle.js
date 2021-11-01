let user1 = {
    firsName : "Berkay",
    lastName : "Nayman",
    score    : [1, 2, 3, 4],
    isActive : true,
    shortName: function(){
        return `${this.firsName} ${this.lastName}`
    }
}

console.log(user1.shortName())