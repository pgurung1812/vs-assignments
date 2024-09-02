class player{

    constructor(name,totalCoins,status,hasStar){
          this.name=name
          this.totalCoins=totalCoins
          this.status=status
          this.hasStar=hasStar
    }
     

    setName(namePicked){
        this.name=namePicked
    }

    gotHit(status){
       if(status==="Powered Up"){
          status="Big"
       }else if(status==="Big"){
        status="Small"

       } else if(status==="Small"){
        status="Dead"
       }else{
        status==="Powered Up"
        this.gotPowerup(status)

       }
    }

    gotPowerup(status){
         if(status==="Powered Up"){
            status="star"
            this.hasStar=true
         }
    }

    addCoin(coin){
      this.totalCoins=this.totalCoins+coin
    }

    print(){
        console.log(`Player name: ${this.name} Total Coins: ${this.totalCoins} Status: ${this.status}  Star: ${this.hasStar}`)
    }



}

let player1= new player("Prasan",10,"Powered Up",false)
player1.print()