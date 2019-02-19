"used strict";

(function (){


function startGame() {
  let play = confirm("You are about to take on the mighty Grant at... THE GAME!!");
  let playerName;

  if (play === true) {
    playerName = prompt("Who are yee that competes against thee?");
    startCombat();
  } else if (play === false){
    console.log(`don't be lame play the game, refresh the page and then engage`);
  }



  function startCombat() {

    let userHealth = 40;
    let grantHealth = 10;
    let grantLives = 0;

    function getDamage() {
      userHealth -= Math.floor((Math.random() * 5) + 1);
      grantHealth -= Math.floor((Math.random() * 5) + 1);
    }

      while (userHealth > 0  && grantLives <= 2) {
          getDamage();


          if (userHealth > 0) {
            console.log(`${playerName} has ${userHealth} health left.`);
            console.log(`The Grant the Almighty Chicken has ${grantHealth} health left`);
          }

          if (grantHealth <= 0) {
            grantLives +=1;
          }

          if (grantLives < 3 && grantHealth <= 0) {
              console.log(`Grant the Almighty Chicken has Fallen. But.... whats this? He has respawned.`);
          } else if (grantLives === 3) {
            console.log(`IT'S ALL OVER! Grant the Almighty Chicken has 0 health and 0 remaining lives. ${playerName} wins!`);
          }

          if (grantHealth <= 0) {
              grantHealth = 10;
          }

          if (userHealth <= 0) {
            console.log(`${playerName} has ${userHealth} health left. Grant the Almighty Chicken has defeated you!`);
          }

          let rounds = confirm("Press 'OK' to ATTACK! or press 'CANCEL' to quit");

          if (rounds === false) {
            console.log(`don't be lame play the game, refresh the page and then engage`);
            break;
          }


      }

  }
}
startGame();
})();
