const readline = require("readline-sync");
const playerName = readline.question("What is your name: ");
console.log(`Welcome to the Colossal RPG Adventure game ${playerName}!`);

function Player(playerName, healthPoint, inventory) {
  (this.playerName = playerName),
    (this.healthPoint = healthPoint),
    (this.inventory = inventory);
}

const inventory = ["sword", "propeller", "pistol"];
const player = new Player(playerName, 20, inventory);

const enemy1 = new Player("Sue", 8, ["stick", "arrow", "M16"]);
const enemy2 = new Player("Jack", 9, ["M4", "missile", "rocketlauncher"]);
const enemy3 = new Player("Max", 8, ["gun", "rope", "saw"]);
const maxdamagepoint = 5;
const mindamagepoint = 1;
const enemylist = [enemy1, enemy2, enemy3];
let countenemykilled = 0;
let enemylistkilled = [];
let gameend = false;
while (!gameend) {
  let choice = readline.question("Enter w to walk or p to print the Player's current profile ");

  switch (choice) {
    case "w":
      //Random number generator to get enemy only 1/3 chance.
      let enemychoice = Math.floor(Math.random() * 9);
      console.log(enemychoice);
      if (enemychoice > 2) {
        console.log("No enemy");
      } else {
        while (true) {
          if (
            enemylistkilled.includes(enemylist[enemychoice]) ||
            enemychoice > 2
          ) {
            enemychoice = Math.floor(Math.random() * 9);
          } else {
            break;
          }
        }

        console.log(enemylist[enemychoice]);
        let enemy = enemylist[enemychoice];

        let questiontorunorattack = readline.question(
          "Do you want to attack or run "
        );

        let foundwinner = false;
        if (questiontorunorattack === "attack") {
          enemylistkilled.push(enemy);
          while (!foundwinner) {
            let playerpointattack =
              Math.floor(
                Math.random() * (maxdamagepoint - mindamagepoint + 1)
              ) + mindamagepoint;
            let enemypointattack =
              Math.floor(
                Math.random() * (maxdamagepoint - mindamagepoint + 1)
              ) + mindamagepoint;

            if (player.healthPoint <= 0) {
              console.log("you lost because you do not have enough points to fight with");
              foundwinner = true;
              gameend = true;
              break;
            } else {
              enemy.healthPoint = enemy.healthPoint - playerpointattack;
              player.healthPoint = player.healthPoint - enemypointattack;
              console.log(`you attacked with ${playerpointattack} points`)
              console.log(`Enemy attacked with ${enemypointattack} points`)
              console.log(`enemy ${enemy.playerName}  ${enemy.healthPoint}`);
              console.log(`player ${player.playerName} ${player.healthPoint}`);
              if (enemy.healthPoint <= 0) {
                console.log("you won");
                player.inventory.push(enemy.inventory[0])
                foundwinner = true;
                countenemykilled++;
                if (countenemykilled === 3) {
                  gameend = true;
                  console.log(enemylistkilled);
                }
                break;
              }
            }
          }
        } else {
          //When Player runs

          let escapechoice = Math.floor(Math.random() * 2);
          if (escapechoice === 0) {
            console.log("you escaped");
          } else {
            console.log("enemy attacked");

            console.log(enemylistkilled);
            console.log(`enemychoice ${enemychoice}`);
         

            while (true) {
              if (
                enemylistkilled.includes(enemylist[enemychoice]) ||
                enemychoice > 2
              ) {
                enemychoice = Math.floor(Math.random() * 9);
              } else {
                break;
              }
            }
            enemylistkilled.push(enemylist[enemychoice]);
            let runfoundwinner = false;
            while (!runfoundwinner) {
              let playerpointattack =
                Math.floor(
                  Math.random() * (maxdamagepoint - mindamagepoint + 1)
                ) + mindamagepoint;
              let enemypointattack =
                Math.floor(
                  Math.random() * (maxdamagepoint - mindamagepoint + 1)
                ) + mindamagepoint;

              if (player.healthPoint <= 0) {
                console.log("you lost because you do not have enough points to fight with");
                foundwinner = true;
                gameend = true;
                break;
              } else {
                enemy.healthPoint = enemy.healthPoint - playerpointattack;
                player.healthPoint = player.healthPoint - enemypointattack;
                console.log(`you attacked with ${playerpointattack} points`)
                console.log(`Enemy attacked with ${enemypointattack} points`)
                console.log(`enemy ${enemy.playerName}  ${enemy.healthPoint}`);
                console.log(`player ${player.playerName} ${player.healthPoint}`);
                if (enemy.healthPoint <= 0) {
                  
                  console.log("you won");
                  player.inventory.push(enemy.inventory[0])
                  runfoundwinner = true;
                  countenemykilled++;
                  if (countenemykilled === 3) {
                    gameend = true;
                    console.log(enemylistkilled);
                  }
                  break;
                }
              }
            }
          }
        }
      }

      break;
    case "p":
        console.log(player)
    default:
    // gameend=true
  }
}
