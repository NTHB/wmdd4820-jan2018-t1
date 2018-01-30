/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
TEAM SHUFFLER! - FIRST SOLUTION
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
const team = {
    members: [
        {id: 1, name: 'Joao', status: 'unassigned'},
        {id: 2, name: 'Felipe', status: 'unassigned'},
        {id: 3, name: 'Alex', status: 'unassigned'},
        {id: 4, name: 'Param', status: 'unassigned'},
        {id: 5, name: 'Gean', status: 'unassigned'},
        {id: 6, name: 'Mirlad', status: 'unassigned'},
    ],
    teams: [
        //lets create the teams below
    ],
    randomize() {


        question = `How do you want to shuffle your team? (1=team count, 2=number per team)`;

        let option = window.prompt(question);

        switch (option) {

            case '1'://team count

                numberTeams = window.prompt("Ok, so how many teams do you like to create?");

                if (numberTeams > this.members.length) {
                    alert(`You cannot select a number larger than the number of team members (${this.members.length})`);
                    return false;
                }

                for (let i = 0; i < +numberTeams; i++) {
                    this.teams[i] = {id: i, team: 'Team ' + (i + 1), members: []}
                }

                //set max team members
                maxTeamMembers = Math.ceil(this.members.length / this.teams.length);


                break;

            case '2'://number per team

                let teamMembers = window.prompt("Ok, what's the maximum members per team do you like to have?");

                if (teamMembers > this.members.length) {
                    alert(`You cannot select a number larger than ${this.members.length}`);
                    return false;
                }

                let teamsToCreate = Math.ceil(this.members.length / teamMembers);

                maxTeamMembers = +teamMembers;

                for (let i = 0; i < teamsToCreate; i++) {
                    this.teams[i] = {id: i, team: 'Team ' + (i + 1), members: []}
                }

                break;

            default:
                alert('Please, select 1 or 2 as option! Try again');
                window.prompt(question);
                break;
        }

        // console.log(this.teams);
        // console.log(`maxTeamMembers:${maxTeamMembers}`);

        do {
            for (let team of this.teams) {

                // console.log(`*** ASSIGNING TO TEAM: ${team.team}`);

                // lets use array filter to get the unassigned members
                uMembers = this.members.filter((member) => {
                    return member.status === 'unassigned'
                });


                //pick a random member and assign to this team
                if (uMembers.length > 0) {//if theres someone to add...

                    let n = Math.floor(Math.random() * uMembers.length);

                    //check if this member was already added on the team
                    checkMembers = team.members.filter((member) => {
                        if (member.id === uMembers[n].id) {
                            return member.id
                        }
                    });
                    //if member wasnt added yet, lets add him to a group
                    if (checkMembers.length === 0) {

                        //update member status to assigned
                        uMembers[n].status = 'assigned';
                        // console.log(`Assigning member: ${uMembers[n].name}`);
                        team.members.push(uMembers[n]); //push him to team obj array

                        // console.log(`Assigneds: ${assigneds} / ${this.members.length}`);

                        // console.log(`Team members length: ${team.members.length} / maxTeamMembers ${maxTeamMembers}`)

                    }
                }

            }

        } while (uMembers.length > 0) //while theres someone to add..


    }
};

team.randomize();

console.log(team.teams);