
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
TEAM SHUFFLER! - FIRST SOLUTION
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


const team = {
    members: [
        {id: 1, name: 'Joao', status: 'unassigned'},
        {id: 2, name: 'Felipe', status: 'unassigned'},
        {id: 3, name: 'Alex' , status: 'unassigned'},
        {id: 4, name: 'Param', status: 'unassigned'},
        {id: 5, name: 'Gean', status: 'unassigned'},
        {id: 6, name: 'Mirlad', status: 'unassigned'},
    ],
    teams: [
        {id: 1, team: 'Team 1', members: []},
        {id: 2, team: 'Team 2', members: []},
    ],
    randomize() {
        let maxTeamMembers = this.members.length / this.teams.length;
        for (let team of this.teams) {

// lets use array filter to get the unassigned members
            uMembers = this.members.filter((member)=>{ return member.status == 'unassigned'});
//pick a random member and assign to this team
            for(let u in uMembers) {
                if(team.members.length < maxTeamMembers){


                    do {
                        let n = Math.floor(Math.random()*uMembers.length);


                        //check if this member was already added on the team
                        checkMembers = team.members.filter((member)=>{
                            if(member.id == uMembers[n].id){
                                return member.id
                            }
                        });
                        //if member wasnt added yet, lets add him to a group
                        if(checkMembers.length == 0) {

                            //update member status to assigned
                            uMembers[n].status = 'assigned';
                            team.members.push(uMembers[n]); //push him to team obj array

                        }

                    }while(team.members.length < maxTeamMembers)


                }
            }
        }
    }
};

team.randomize();

console.log(team.teams);