/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
TEAM SHUFFLER - SECOND SOLUTION
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

const team = {
    members: [
        'Alex', 'John', 'Ta', 'Leo', 'Andre', 'Julia'
    ],
    teams: [
        {team: 1, members: []},
        {team: 2, members: []},
    ],
    randomize() {
        //set initial variables
        let maxTeamSize = this.members.length / this.teams.length;

        //loop through all teams
        this.teams.forEach((team) => {
            do {
                //sort a random member
                let n = Math.floor(Math.random() * maxTeamSize * 2);
                let sortedMember = this.members[n], memberAssigned = false;

                //check if this random member is not assigned to any team yet
                this.teams.map((t) => {
                   t.members.filter((member) => {
                        if (member == sortedMember) {
                            memberAssigned = true;
                        }
                    });
                });

                if (!memberAssigned) {
                    team.members.push(sortedMember);
                }
            }
                //try to assign the member until theres no slot left
            while (team.members.length < maxTeamSize);
        })
    }
};

team.randomize();

console.log(team.teams[0].members);
console.log(team.teams[1].members);
