
// alert("You're connected")

var treasureLocation = Math.floor(Math.random() * 12)
var bombLocation = Math.floor(Math.random() * 12)

  console.log(treasureLocation)

   const treasure = (location) => {
      if(location === treasureLocation) {
        document.getElementById("game").innerHTML =  "Congratulation!"
           alert(" You found treasure. 💎 ")
      } else if(location === bombLocation) {
        document.getElementById("game").innerHTML =  "You lose ! Try again "
           alert("You found bomb. 💣 ")
      } else {
           alert("Treasure isn't here. Try again")
      }
    }
