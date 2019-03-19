//Main JS file
function getDefaultUser() {
  return {
    level1: {//forks
      repelled: 0,
      amount: [1],
      costs: [10],
      max: 1,
    },
    level2: {//keys
      amount: 0,
      conversion: [2, 1000],
      ups: [0, 0, 0],
      costs: [10, 100, 1000],
      increase: [0, 0, 1.2],
    },
    level3: {//cakes
      amount: 0,
      conversion: [2.5, "1e6"],
      ups: [0, 0, 0, 0],
      costs: [10, 100, 1000, "1e6"],
      increase: [0, 0, 1.3, 25],
      flakeBreak: false,
    },
    level4: {//karma
      amount: 0,
      conversion: [3, "1e9"],
      ups: [0, 0, 0, 0],
      costs: [10, 100, 1000, 500],
      increase: [0, 0, 1.4, 0],
    },
    level5: {//time
      amount: 0,
      conversion: [3.5, "1e12"],
      ups: [0, 0, 0],
      costs: [10, 100, 1000],
      increase: [0, 1.25, 1.5],
    },
    level6: {//memories
      amount: 0,
      onversion: [4, "1e15"],
      ups: [0, 0, 0],
      costs: [10, "1e6", 1000],
      increase: [0, 15, 1.6],
      reminiscing: false,
      remems: 0,
    },
    level7: {//knowledge
      amount: 0,
      conversion: [4.2, "1e18"],
      ups: [0, 0, 0, 0],
      costs: [10, 100, 1000, 30000],
      increase: [0, 0, 1.7, 0],
    },
  };
}

let user = getDefaultUser();

function produce(time) {
  let len = user.level1.forkRepellents.length;
  let base = 10;
  let total = 0;
  while(time>=1){
    for(int i=0;i<len;i++){
      total += user.level1.amount[i]*Math.pow(1.2,i)*getBoost(i);
    }
    time--;
  }
  user.level1.repelled += total;
}

function getBoost(num) {
  let total = 1;
  if(user[1][2][0]>0) total*=1+log10(user[1][0]);
  if(user[1][2][1]>0) total*=Math.pow(1.05,Math.floor(user[0][1][num]/10));
  if(user[2][2][0]>0) total*=1+log15(user[2][0]);
  if(user[2][2][1]>0) total*=Math.pow(1.08,Math.floor(user[0][1][num]/25));
  if(user[3][2][0]>0) total*=1+log20(user[3][0]);
  if(user[3][2][1]>0) total*=Math.pow(1.15,Math.floor(user[0][1][num]/50));
  if(user[4][2][0]>0) total*=1+log25(user[4][0]);
  if(user[4][2][1]>0) total*=Math.pow(1.25,Math.floow(user[0][1][num]/100));
  if(user[5][2][0]>0) total*=1+log30(user[5][0]);
  if(user[6][2][0]>0) total*=1+log32(user[6][0]);
  if(user[6][2][1]>0) total*=Math.min(1+log1point2(user[1][0]),"1e6");
  return total;
}

function reset(level) {
  for(int i=0;i<level;i++){
    if(i==level-1){
      let prestigeAmount = user["level"+i][0];
      let conversion = user["level"+level][1];
      let addedPrestige = Math.root(Math.divide(prestigeAmount,conversion[0]), conversion[1]);
      if(user[i][2][2]>0) addedPrestige*Math.pow(1.05,user[i][2][2]);
      user["level"+level][0] = user["level"+level][0]+addedPrestige;
    }
    user["level"+i] = getDefaultUser["level"+i];
  }
}

function update() {
  for(int i=7;i>-1;i--){
    update(i);
  }
}

function update(level) {
  update("level"+level+"amount",user[level].amount);
}

function start() {
  update();
  setInterval(produce(1),1000);
}
