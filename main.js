//Main JS file
function getDefaultUser() {
  return {
    level1: {
      forksRepelled: 0,
      fRs: [1],
      fRCosts: [10],
      fRMax: 1,
    },
    level2: {
      keys: 0,
      keyConversion: [2, 1000],
      keyUps: [0, 0, 0],
    },
    level3: {
      cakes: 0,
      cakeConversion: [2.5, "1e6"],
      flakeBreak: false,
      cakeUps: [0, 0, 0, 0],
    },
    level4: {
      karma: 0,
      karmaConversion: [3, "1e9"],
      karmaUps: [0, 0, 0, 0],
    },
    level5: {
      time: 0,
      timeConversion: [3.5, "1e12"],
      timeUps: [0, 0, 0],
    },
    level6: {
      memories: 0,
      memoryConversion: [4, "1e15"],
      memoryUps: [0, 0, 0],
      reminiscing: false,
      remems: 0,
    },
    level7: {
      knowledge: 0,
      knowledgeConversion: [4.2, "1e18"],
      knowlUps: [0, 0, 0, 0],
    },
  };
}

let user = getDefaultUser();

function produce(time) {
  let len = user.level1.forkRepellents.length;
  let base = 10;
  let total = 0;
  while(time>1){
    for(int i=0;i<len;i++){
      total += user.level1.forkRepellents[i]*Math.pow(1.2,i)*getBoost(i);
    }
  }
  user.level1.forksRepelled += total;
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
      let conversion = user["level"+level"][1];
      let addedPrestige = Math.root(Math.divide(prestigeAmount,conversion[0]), conversion[1]);
      if(user[1][2][2]>0) addedPrestige*Math.pow(1.05,user[1][2][2]);
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
  
