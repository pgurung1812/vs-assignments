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
  let choice = readline.question(
    "Enter w to walk or p to print the Player's current profile:  "
  );

  switch (choice) {
    case "w":
      //Random number generator to get enemy only 1/3 chance.
      let enemychoice = Math.floor(Math.random() * 9);
      // console.log(enemychoice);
      if (enemychoice > 2) {
        console.log("No enemy");
      } else {
        enemychoice = checkenemykilledlist(
          enemylistkilled,
          enemychoice,
          enemylist
        );

        // console.log(enemylist[enemychoice]);
        console.log(
          `You need to Kill ${enemylist[enemychoice].playerName} to move forward on the adventure`
        );
        let enemy = enemylist[enemychoice];

        let questiontorunorattack = readline.question(
          "Do you want to Attack or Run , Press A to Attack and R to run:  "
        );

        if (questiontorunorattack === "A") {
          enemylistkilled.push(enemy);

          gameend = endOfRound(
            maxdamagepoint,
            mindamagepoint,
            player,
            gameend,
            enemy,
            countenemykilled
          );
        } else {
          //When Player runs

          let escapechoice = Math.floor(Math.random() * 2);
          if (escapechoice === 0) {
            console.log("you escaped");
          } else {
            console.log("enemy attacked");

            console.log(enemylistkilled);

            enemychoice = checkenemykilledlist(
              enemylistkilled,
              enemychoice,
              enemylist
            );

            enemylistkilled.push(enemylist[enemychoice]);

            gameend = endOfRound(
              maxdamagepoint,
              mindamagepoint,
              player,
              gameend,
              enemy,
              countenemykilled
            );
          }
        }
      }

      break;
    case "p":
      console.log(player);
    default:
  }
}

function checkenemykilledlist(enemylistkilled, enemychoice, enemylist) {
  while (true) {
    if (enemylistkilled.includes(enemylist[enemychoice]) || enemychoice > 2) {
      enemychoice = Math.floor(Math.random() * 9);
    } else {
      break;
    }
  }
  return enemychoice;
}

function endOfRound(
  maxdamagepoint,
  mindamagepoint,
  player,
  gameend,
  enemy,
  countenemykilled
) {
  let foundwinner = false;
  while (!foundwinner) {
    let playerpointattack =
      Math.floor(Math.random() * (maxdamagepoint - mindamagepoint + 1)) +
      mindamagepoint;
    let enemypointattack =
      Math.floor(Math.random() * (maxdamagepoint - mindamagepoint + 1)) +
      mindamagepoint;

    if (player.healthPoint <= 0) {
      console.log(
        "you lost because you do not have enough points to fight with"
      );
      foundwinner = true;
      gameend = true;
      return gameend;
      // break;
    } else {
      enemy.healthPoint = enemy.healthPoint - playerpointattack;
      player.healthPoint = player.healthPoint - enemypointattack;
      console.log(`you attacked with ${playerpointattack} points`);
      console.log(`Enemy attacked with ${enemypointattack} points`);
      console.log(
        `Enemy ${enemy.playerName} has ${enemy.healthPoint} healthpoints remaining`
      );
      console.log(`You have ${player.healthPoint} healthpoints remaining`);
      if (enemy.healthPoint <= 0) {
        console.log(
          `Great job, you defeated ${enemy.playerName} Keep going until you kill all 3 enemies`
        );
        player.inventory.push(enemy.inventory[0]);
        console.log(
          `Enemy ${enemy.playerName} surrendered their weapon ${enemy.inventory[0]}`
        );
        foundwinner = true;
        countenemykilled++;
        if (countenemykilled === 3) {
          gameend = true;
          // console.log(enemylistkilled);
          console.log("Congratulations you killed all of your enemies");
          return gameend;
        }
        // break;
      }
    }
  }
}
