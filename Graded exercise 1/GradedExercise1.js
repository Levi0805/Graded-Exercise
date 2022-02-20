const prompts = require('prompts');
class objectInGame {
    constructor(hitpoints, attackdamage, chanceOfAttackHit){
    this.hitpoints = hitpoints;
    this.attackdamage = attackdamage;
    this.chanceOfAttackHit = chanceOfAttackHit;
    }
    lookAround() {
        console.log('-----------------');
        console.log('You look around');
        console.log('You are in The dungeon and it is a big and damn room with broken statues all around');
        console.log(' ');
        console.log('There are doorways leading to:');
        console.log('Hallway');
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log('-----------------');
}
attackInDungeon(){
  console.log('There nothing to attack here!');
}
    async goToRoom() {
    let continueGame = true;
    const initialActionChoices = [
      {title: 'Hallway', value: 'hallway'},
    ];
    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Which room you want to go to?',
      choices: initialActionChoices
    });
    console.log('You choose ' + response.value);
    switch(response.value) {
      case 'hallway':
          continueGame = false;
          player.goToHallway();
          break;
    }

    if (continueGame) {
      goToRoom();
    }
}
goToTheDungeonEntrance(){
  console.log('You move back to the dungeon entrance');
  gameLoop();
}
attackSmallSewerRat() {
  console.log('You bravely attack Small sewer rat with your Sharp sword');
  if (Math.floor(Math.random() * 4) == 0){
    console.log('Player attack The small sewer rat');
    console.log('Player attack missed');
    console.log("Small sewer rat isn't hit and the small sewer rat isn't destroyed");
  }
  else {
    rat.hitpoints -= 2;
    console.log('Player hits Small sewer rat with 2 points!');
    console.log('Small sewer rat is hit and is destroyed!')
  }
  gameLoopInHallway();
  
}
async attackInHallway(){
      let continueAttack = true;
      const initialActionChoices = [
        {tittle: 'Small sewer rat', value: 'Small sewer rat'},
      ];
      const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Which enemy you want to attack?',
        choices: initialActionChoices
      });
      console.log('You choose ' + response.value);
      switch(response.value) {
        case 'Small sewer rat':
          continueAttack = false;
            player.attackSmallSewerRat();
          break;
      }

      if (continueAttack) {
        attackInHallway();
      }
}
    lookAroundInTheHallway() {
      console.log('-----------------');
      console.log('You look around');
      console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls');
      console.log(' ');
      console.log('There are doorways leading to:');
      console.log('The dungeon');
      console.log('Chamber');
      console.log(' ');
      console.log(' ');
      console.log(' ');
      if(rat.hitpoints == 0){
        console.log('And there is nothing else to attack!');
      }
      else{
      console.log('You see a Small sewer rat');
      console.log('Small sewer rat attacks Player with its sharp teeths');
      if (Math.floor(Math.random() * 2) == 0){
        console.log('Small sewer rat attack misses!');
      }
      else {
        player.hitpoints -= 1;
        console.log('Small sewer rat attack hit!');
        console.log('Player is hit and has '+ player.hitpoints +' remaining');
      }
      console.log('-----------------');
    }
  }
    goToHallway() {
      console.log('You move to Hallway');
     gameLoopInHallway();
    }
    async goToRoomInTheHallway() {
      let continueGame = true;
        const initialActionChoices = [
            {title: 'The dungeon entrance', value: 'thedungeonentrance'},
            {title: 'Chamber', value: 'chamber'},
        ];
        const response = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which room you want to go to?',
            choices: initialActionChoices
        });
        console.log('You choose ' + response.value);
        switch(response.value) {
            case 'thedungeonentrance':
                continueGame = false;
                player.goToTheDungeonEntrance();
                break;
            case 'chamber':
                continueGame = false;
                player.goToChamber();
                break;
        }

        if (continueGame) {
            goToRoom();
        }
    }
    goToChamber(){
      console.log('You move to Chamber');
      gameLoopInChamber();
    }
    lookAroundInTheChamber() {
      console.log('-----------------');
      console.log('You look around');
      console.log('You are in the Chamber and it is a small chamber, which is illuminated by a glowing portal of somekind');
      console.log('');
      console.log('There are doorways leading to:');
      console.log('Hallway');
      console.log('Glowing portal');
      console.log('');
      console.log('');
      console.log('');
      console.log('You see a Giant Dragon');
      console.log('Giant Dragon attacks Player with it Sharp claws and fire breath');
      if (Math.floor(Math.random() * 10) == 0){
        console.log('Giant Dragon attack missed');
      }
      else {
        player.hitpoints -= 8;
        console.log('Giant Dragon hits player with 8 points!');
        console.log('Player is hit and has ' + player.hitpoints + ' remaining');
      }
    }
    async goToRoomInTheChamber() {
      let continueGame = true;
        const initialActionChoices = [
            {title: 'Hallway', value: 'hallway'},
            {title: 'The Glowing Portal', value: 'theglowingportal'},
        ];
        const response = await prompts({
            type: 'select',
            name: 'value',
            message: 'Which room you want to go to?',
            choices: initialActionChoices
        });
        console.log('You choose ' + response.value);
        switch(response.value) {
            case 'hallway':
                continueGame = false;
                player.goToHallway();
                break;
            case 'theglowingportal':
                continueGame = false;
                console.log('You move to Glowing Portal');
                console.log('Congratulations, you make through the dungeon!');
                break;
        }

        if (continueGame) {
            goToRoomInTheChamber();	
        }
    }
    async attackInChamber(){
      let continueAttack = true;
      const initialActionChoices = [
        {tittle: 'Giant Dragon', value: 'Giant Dragon'},
      ];
      const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Which enemy you want to attack?',
        choices: initialActionChoices
      });
      console.log('You choose ' + response.value);
      switch(response.value) {
        case 'Giant Dragon':
          continueAttack = false;
            player.attackGiantDragon();
          break;
      }

      if (continueAttack) {
        attackInHallway();
      }
}
    attackGiantDragon(){
      console.log('You bravely attack Giant Dragon with your Sharp sword!');
      if (Math.floor(Math.random() * 4) == 0){
        console.log('Player attack The Giant Dragon');
        console.log('Player attack missed');
        console.log("Giant Dragon isn't hit and the Giant Dragon isn't destroyed");
      }
      else {
        dragon.hitpoints -= 2;
        console.log('Player hits Giant Dragon with 2 points!');
        if (dragon.hitpoints == 0){
        console.log('Giant Dragon is hit and is destroyed!')}
        else {
          console.log('Giant Dragon is hit and it has ' + dragon.hitpoints + ' remaining!')
        }
      }
      gameLoopInChamber();
    }
}
let player = new objectInGame(10, 2, 75);
let rat = new objectInGame(2, 1, 50);
let dragon = new objectInGame(4, 8, 90);
async function gameLoop() {
    let continueGame = true;
    const initialActionChoices = [
        { title: 'Look Around', value: 'lookAround' },
        { title: 'Go to room', value: 'goToRoom' },
        { title: 'Attack', value: 'attack' },
        { title: 'Exit game', value: 'exit' }
    ];
    const response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose your action',
        choices: initialActionChoices
      });
      console.log('You selected ' + response.value);
      switch(response.value) {
        case 'lookAround':
          player.lookAround();
          break;
        
        case 'goToRoom':
          continueGame = false;
          player.goToRoom();
          break;
        
        case 'attack':
          player.attackInDungeon();
          break;
        
        case 'exit':
          continueGame = false;
          break;
      }
      
      if(continueGame) {
        gameLoop();
      }    
}
async function gameLoopInHallway() {
  let continueGame = true;
  const initialActionChoices = [
      { title: 'Look Around', value: 'lookAround' },
      { title: 'Go to room', value: 'goToRoom' },
      { title: 'Attack', value: 'attack' },
      { title: 'Exit game', value: 'exit' }
  ];
  const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'lookAround':
        player.lookAroundInTheHallway();
        break;
      
      case 'goToRoom':
        continueGame = false;
        player.goToRoomInTheHallway();
        break;
      
      case 'attack':
        continueGame = false;
        if (rat.hitpoints == 2){
        player.attackInHallway();
        }
        else {
          console.log('There is nothing to attack here')
          gameLoopInHallway();
        }
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      gameLoopInHallway();
    }   
}
async function gameLoopInChamber() {
  let continueGame = true;
  const initialActionChoices = [
      { title: 'Look Around', value: 'lookAround' },
      { title: 'Go to room', value: 'goToRoom' },
      { title: 'Attack', value: 'attack' },
      { title: 'Exit game', value: 'exit' }
  ];
  const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices
    });
    console.log('You selected ' + response.value);
    switch(response.value) {
      case 'lookAround':
        player.lookAroundInTheChamber();
        break;
      
      case 'goToRoom':
        continueGame = false;
        player.goToRoomInTheChamber();
        break;
      
      case 'attack':
        continueGame = false;
        if (dragon.hitpoints != 0){
          player.attackInChamber();
          }
        else {
            console.log('There is nothing to attack here')
            gameLoopInChamber();
          }
        break;
      
      case 'exit':
        continueGame = false;
        break;
    }
    
    if(continueGame) {
      gameLoopInChamber();
    }   
}
process.stdout.write('\033c');
console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('You walk down the stairs to the dungeons')
gameLoop();