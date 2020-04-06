Terminal game bug squashing
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

let health = 100,
    position = 0,
    coins = 0

function main () {
  const actions = [rollDice,move,combat,getCoins,buyHealth,printStatus];
  actions.forEach(e => e());
}