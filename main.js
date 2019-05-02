//Main JS file
function getDefaultUser() {
  return {
    level1: {//叉
      repelled: new Decimal(0),
      amount: [new Decimal(1)],
      costs: [new Decimal(10)],
      max: 1,
    },
    level2: {//鑰匙
      amount: new Decimal(0),
      conversion: [new Decimal(2), new Decimal(1000)],
      ups: [0, 0, new Decimal(0)],
      costs: [10, 100, new Decimal(1000)],
      increase: [0, 0, new Decimal(1.2)],
    },
    level3: {//蛋糕
      amount: new Decimal(0),
      conversion: [new Decimal(2.5), new Decimal(1e6)],
      ups: [0, 0, 0, 0],
      costs: [10, 100, new Decimal(1000), new Decimal(1e6)],
      increase: [0, 0, new Decimal(1.3), new Decimal(25)],
      flakeBreak: false,
    },
    level4: {//業
      amount: new Decimal(0),
      conversion: [new Decimal(3), new Decimal(1e9)],
      ups: [0, 0, 0, 0],
      costs: [10, 100, new Decimal(1000), 500],
      increase: [0, 0, new Decimal(1.4), 0],
    },
    level5: {//時間
      amount: 0,
      conversion: [3.5, new Decimal(1e12)],
      ups: [0, 0, 0],
      costs: [10, new Decimal(100), new Decimal(1000)],
      increase: [0, new Decimal(1.25), new Decimal(1.5)],
    },
    level6: {//記憶
      amount: new Decimal(0),
      conversion: [4, new Decimal(1e15)],
      ups: [0, 0, 0],
      costs: [10, new Decimal(1e6), new Decimal(1000)],
      increase: [0, new Decimal(15), new Decimal(1.6)],
      reminiscing: false,
      remems: 0,
    },
    level7: {//知識
      amount: new Decimal(0),
      conversion: [4.2, new Decimal(1e18)],
      ups: [0, 0, 0, 0],
      costs: [10, 100, new Decimal(1000), 30000],
      increase: [0, 0, new Decimal(1.7), 0],
    },
  };
}

let user = getDefaultUser();

function produce(time) {
  let len = user.level1.forkRepellents.length;
  let base = 10;
  let total = new Decimal(0);
  while(time>=1){
    for(int i=0;i<len;i++){
      total = total.add(user.level1.amount[i].times(Decimal.power(i, 1.2)).times(getBoost(i));
    }
    time--;
  }
  user.level1.repelled = user.level1.repelled.plus(total);
}

function getBoost(num) {
  let total = new Decimal(1);
  if(user[1][2][0]>0) total = total.times(user[1][0].log10());
  if(user[1][2][1]>0) total = total.times(Decmial.power(Decimal.floor(user[0][1][num].div(10)),1.05);
  if(user[2][2][0]>0) total = total.times(1+user[2][0].log(15));
  if(user[2][2][1]>0) total = total.times(Decimal.power(Decimal.floor(user[0][1][num].div(25)),1.08);
  if(user[3][2][0]>0) total = total.times(1+user[3][0].log(20));
  if(user[3][2][1]>0) total = total.times(Decimal.power(Decimal.floor(user[0][1][num].div(50)),1.15);
  if(user[4][2][0]>0) total = total.times(1+user[4][0].log(25));
  if(user[4][2][1]>0) total = total.times(Decimal.power(Decimal.floor(user[0][1][num].div(100)),1.25);
  if(user[5][2][0]>0) total = total.times(1+user[5][0].log(30));
  if(user[6][2][0]>0) total = total.times(1+user[6][0].log(32));
  if(user[6][2][1]>0) total = total.times(Decimal.min(1+user[1][0].log(1.2),new Decimal(1e6));
  return total;
}

function reset(level) {
  for(int i=1;i<=level;i++){
    if(i==level-1){
      let prestigeAmount = user["level"+i][0];
      let conversion = user["level"+level][1];
      let addedPrestige = prestigeAmount.div(conversion[0]).root(conversion[1]);
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
