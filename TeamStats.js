const team = {
    _players:[
        {fistName: "Lalo",
        lastName: "Perez",
        age: 28},
        
        {firstName:"Gorge",
        lastName: "Campos",
        age:38},
        
        {fistName:"Ricardo",
        lastName:"Fernandez",
        age: 33},
    ],
    _games:[
        {opponent: "Popo",
        teamPoints: 69,
        opponentPoints: 79},
        
        {opponent: "Los Pipis",
        teamPoints: 58,
        opponentPoints: 23},

        {opponent:"Canibis",
        teamPoints:99,
        opponentPoints:35}
    ],

    get games(){
        return this._games;
    },

    get players(){
        return this._players;
    },

    addPlayer(fistName, lastName, age){
        let player = {
            fistName: fistName,
            lastName: lastName,
            age: age
        }
        this._players.push(player);
    },

    addGame(opponent,teamPoints,opponentPoints){
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this.games.push(game);
    }
}
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs","Bunny", 76);
team.addGame("coco",54,88)
console.log(team)