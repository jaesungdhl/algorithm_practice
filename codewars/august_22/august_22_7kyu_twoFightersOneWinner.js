Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let winner;
    while(true) {
      if(firstAttacker == fighter1.name) {
        fighter2.health -= fighter1.damagePerAttack;
          if(fighter2.health <= 0) {
            winner = fighter1.name;
            break;
          }
        firstAttacker = fighter2.name;
      } else {
        fighter1.health -= fighter2.damagePerAttack;
          if(fighter1.health <= 0) {
            winner = fighter2.name;
            break;
          }
        firstAttacker = fighter1.name;
      }
    }
    return winner;
  }

  function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    } else {
      return firstAttacker;
    }
  }