/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
DATAJS SIMULATOR

>  >  >  REQUIRES: NODE JS INSTALLED TO RUN

run it like: node database.js (cd to the folder first)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
DATABASE CLASS STRUCTURES
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class Database {
    constructor(tables) {
        this.tables = tables;
    }


    select(queryObj) {

        // console.log(queryObj);


        switch (queryObj.hasWhere) {
            case false://SELECT * FROM tablename;
                try {
                    return this.tables.filter((table) => {

                        if (table.name === queryObj.table) {
                            return table;
                        }

                    });
                } catch (error) {
                    return 'Oops! Check your SELECT syntax and try again!';
                }

                break;


            case true://SELECT * FROM tablename WHERE id = 1;


                try {
                    for (let table of this.tables) {
                        if (table.name == queryObj.table) {

                            return table.rows.filter((row) => {
                                let data = HelperFunctions.getQueryPropValue(queryObj.query);
                                if (row[data.property] == data.value) {
                                    return row;
                                }


                            });


                        }
                    }

                } catch (error) {
                    return "There's an error in your SELECT SQL syntax. Check it and try again!"
                }
                break;

        }


    }

    insert(queryObj) {

        for (let table of this.tables) {

            if (table.name === queryObj.table) {

                let courseStrings = queryObj.queryValues[3].split('|');

                let courseData = courseStrings.map((courseString) => {

                    let c = courseString.split(":");

                    return {course: c[0], grade: c[1]};

                });

                // //insert data into the row
                table.rows.push({
                    id: queryObj.queryValues[0],
                    name: queryObj.queryValues[1],
                    email: queryObj.queryValues[2],
                    course: courseData,
                });
            }
        }
    }

    delete(queryObj) {


        this.tables.map((table) => {

            if (table.name === queryObj.table) {//table selection

                table.rows = table.rows.filter((row) => {  //filter the rows that we selected through WHERE

                    if (queryObj.hasWhere) {

                        let data = HelperFunctions.getQueryPropValue(queryObj.query);

                        if (row[data.property] != data.value) {

                            return row;

                        }

                    } else {
                        //todo delete without where === death
                    }


                });


            }

        });


    }


}


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CONSOLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


class Console {


    init() {
        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return rl;

    }

    execute(rl, starterInfo = false) {

        rl.question(starterInfo ? `
|||||||||||||||||||||||||||OPTIONS|||||||||||||||||||||||||||||||
| help: show these options again                                |
| l: Display all students in the database with id beside them.  |
| n: Enter new student data.                                    |
| s:  It will prompt you to display more details about a student|
| by entering its id from the                                   |
| listing in the previous command.                              |
| d: It will prompt you to delete a student by its id.          |
| exit/q: Exit console                                          | 
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
` : '', (answer) => {

            switch (answer) {


                case 'help': //show help info
                    this.execute(rl, true); // just enable user for reinput commands

                    break;

                case 'l':

                    let q = HelperFunctions.queryInterpreter('SELECT * FROM Students;');

                    if (q) {
                        console.log("SELECT * FROM Students;");
                        console.log(JSON.stringify(db.select(q), null, 1));
                    }
                    this.execute(rl, true); // just enable user for reinput commands

                    break;

                case 'n':

                    rl.question(`
INSERT DATA USING THE SYNTAX BELOW:

INSERT INTO Student VALUES(id,'name','email','courseName:grade|courseName:grade');

example: INSERT INTO Students VALUES(5,'Test Name','test@gmail.com','Math:10|CS:7');


`, (answer) => {


                            let q = HelperFunctions.queryInterpreter(answer);
                            db.insert(q);
                              console.log("New data inserted successfully");

                            let a = HelperFunctions.queryInterpreter("SELECT * FROM Students;");
                            console.log(JSON.stringify(db.select(a), null, 1));

                            this.execute(rl, true);

                    });


                    break;

                case 's':


                    rl.question(`
SELECT DATA USING THE SINTAX BELOW:

SELECT * FROM Tablename WHERE property = value;

example: SELECT * FROM Students WHERE id = 1;


`, (answer) => {

                        let q = HelperFunctions.queryInterpreter(answer);
                        if (q) {
                            // console.log(q);
                            console.log(JSON.stringify(db.select(q), null, 1));
                        }


                        this.execute(rl, true);


                        // rl.close();


                    });


                    break;

                case 'd':


                    rl.question(`
DELETE DATA USING THE SINTAX BELOW:

DELETE FROM Tablename WHERE property = value;

example: DELETE FROM Students WHERE name = 'Ta';

`, (answer) => {

                        let q = HelperFunctions.queryInterpreter(answer);

                        if (q) {
                            // console.log(q);
                            console.log(`Deleted record from ${q.table}`);
                            db.delete(q);
                            let a = HelperFunctions.queryInterpreter(`SELECT * FROM ${q.table};`);
                            console.log(JSON.stringify(db.select(a), null, 1));


                        }
                        this.execute(rl, true);//reboot options


                    });

                    break;


                case 'exit':
                    console.log('Goodbye!');
                    rl.close();

                    break;


                case 'q':
                    console.log('Goodbye!');
                    rl.close();
                    break;


                default:

                    this.execute(rl, true);
                    console.log("Please, use some of the option commands above!");


                    break;


            }

        });
    }

}


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
HELPER FUNCTIONS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

const helperFunctions = require("./helperFunctions/helperFunctions.js");

let HelperFunctions = new helperFunctions.HelperFunctions();


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CONSOLE STRUCTURE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


console.log(`
********************************************************************
            Welcome to databaseJS SQL Simulator - by John
********************************************************************
`);

db = new Database([

    {//table structure
        name: 'Students', rows: [
            {
                id: 1, name: 'Joao', email: 'joaopaulofurtado@live.com', courses: [
                    {id: 1, name: 'Introduction to Web Programming', grade: 9},
                    {id: 2, name: 'Introduction to HTML/CSS', grade: 8},
                ]
            }, //row

            {
                id: 2, name: 'Ta', email: 'ta@thailand.com', courses: [
                    {id: 1, name: 'Introduction to Web Programming', grade: 10},
                ]
            }//row
        ]
    },
    {
        name: 'Professors', rows: [
            {id: 1, name: 'Jacob', course: 1},
            {id: 2, name: 'Kevin', course: 2},
        ]
    }


]);

// let q = HelperFunctions.queryInterpreter("INSERT INTO Students VALUES(5,'Jacob','jacob@langara.ca','Math:10|CS:7');");
// // console.log(q);
// db.insert(q);
//
// let a = HelperFunctions.queryInterpreter("SELECT * FROM Students;");
// console.log(JSON.stringify(db.select(a), null, 1));


const c = new Console();
let rl = c.init();
c.execute(rl, true);

