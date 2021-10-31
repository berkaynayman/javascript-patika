const MEYVELER = ["Armut", "Seftali", "Muz", "Elma", "Ayva"]

for(let i=0 ; i < MEYVELER.length ; i++){
    if(i === 3){
        continue
    }
    console.log(i)

}

cikis_ddketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
      if (j == 2) {
        break cikis_ddketi;
      }
      console.log("break iç döngüden j :" + j);
    }
   }


gec_etiketi: for (var i = 0; i <=5; i++) {
    for (var j = 0; j <= 4; j++) {
      if (j == 2) {
        continue gec_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }