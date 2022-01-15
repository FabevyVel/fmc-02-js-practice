let playerName = 'Rohit';

let iplPlayers = {
    1: {
        playerName,
        isKeeper: false
    },
    2: {
        playerName: 'Warner',
        isKeeper: false
    },
    3: {
        playerName: 'Marcus Harris',
        isKeeper: false
    },
    4: {
        playerName: 'Labuschagne',
        isKeeper: false
    },
    5: {
        playerName: 'Steven Smith',
        isKeeper: true
    },
    6: {
        playerName: 'Khawaja',
        isKeeper: false
    },
    7: {
        playerName: 'Green',
        isKeeper: false
    },
    8: {
        playerName: 'Alex Carey',
        isKeeper: false
    },
    9: {
        playerName: 'Cummins',
        isKeeper: false
    },
    10: {
        playerName: 'Starc',
        isKeeper: false
    },
    11: {
        playerName: 'Lyon',
        isKeeper: false
    },
    12: {
        playerName: 'Warner123',
        isKeeper: false
    },
    13: {
        playerName: 'Marcus Harris123',
        isKeeper: true
    },
    14: {
        playerName: 'Labuschagne123',
        isKeeper: false
    },
    15: {
        playerName: 'Steven Smith123',
        isKeeper: false
    },
    16: {
        playerName: 'Khawaja123',
        isKeeper: false
    },
    17: {
        playerName: 'Green123',
        isKeeper: false
    },
    18: {
        playerName: 'Alex Carey123',
        isKeeper: true
    },
    19: {
        playerName: 'Cummins123',
        isKeeper: false
    },
    20: {
        playerName: 'Starc123',
        isKeeper: false
    },
    21: {
        playerName: 'Rohit123',
        isKeeper: true
    },
    22: {
        playerName: 'Warner321',
        isKeeper: false
    }
};

let innings = 1,
    balls = 0;
const maxWickets = 10;
const maxBalls = 20;

let formTeam = (...playersId) =>{
    let team = {
        players: [],
        runs: 0,
        wickets: 0,
        keeperId: -1
    }

    playersId.forEach(id => {
        team.players.push(iplPlayers[id]);
    });

    //Choose Wicket Keeper
    let keepers = team.players.map((player, index)=>{
        if(player.isKeeper)
            return index;
    });

    keepers.forEach(id => {
        if(id != undefined && team.keeperId == -1){
            team.keeperId = id;
        }
    });

    return team;
}

let getRandomScore = () => {
    /*
        1. Score 0, 1, 2, 3, 4, 6
        2. Wicket 7, 8
        3. 5 => 1
        4. 9 => 0
    */
    let radomNumber = Math.random() * 10;
    radomNumber = parseInt(radomNumber);

    if(radomNumber == 9){
        radomNumber = 0;
    } else if(radomNumber == 5){
        radomNumber = 1;
    }

    return radomNumber;
}

let addRun = (a, b, run = 0) => {
    console.log(run);
    if(innings == 1){
        team1.runs = team1.runs + run;
    }else{
        team2.runs = team2.runs + run;
    }
}

let addWicket = () => {
    if(innings == 1){
        team1.wickets++;
    }else{
        team2.wickets++;
    }
}

let displayScoreCard = () => {
    if(innings == 1){
        console.log(team1.runs + ' - ' + team1.wickets);
        console.log(`${team1.runs} - ${team1.wickets}`);
    }else{
        console.log(team2.runs + ' - ' + team2.wickets);
    }
}

let isInningsOver = () => {
    if(innings == 1){
        if(balls >= maxBalls || team1.wickets >= maxWickets){
            console.log('Innings Over');
        }
    }else{
        if(balls >= maxBalls || team2.wickets >= maxWickets){
            console.log('Innings Over');
        }
    }
}

let getScore = () => {

    let randomNumber = getRandomScore();

    if(randomNumber == 0){
        addRun();
    }else if(randomNumber <= 6 ){
        addRun(randomNumber)
    }else{
        addWicket();
    }
    
    balls++;

    displayScoreCard();

    isInningsOver();

}

let getKeeperInfo = team => team.players[team.keeperId];

let team1 = formTeam(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21);

let team2 = formTeam(2, 4, 6 ,8, 10, 12, 14, 16, 18, 20, 22);

// console.log(team1);
// console.log(team2);

// console.log(getKeeperInfo(team1));

