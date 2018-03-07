// 5.
//
// Build a simple student database program that does the following:
//
//     When you first start the program it will give you the option to enter commands:
//
//     l Display all students in the database with id beside them.
//
//     n Enter new student data.
//
//     s It will prompt you to display more details about a student by entering its
//      id from the listing in the previous command.
//
//     d It will prompt you to delete a student by its id.
//
//     When you want to enter a new student (n command), it will prompt you for the
//      following: name, email, courses(separated by commas). After that, it will
//       prompt you to enter the grade on every course entered for that student.
//
//     At any point, you can type exit to stop the program.
//
//     After finishing any command it will go back to step 1, listing all possible
//      commands.
//
// Make sure to use classes to structure your code.
//
// Consider building a class for the student database that'll have a variety of
//  methods to add students, display students, etc. The database can be abstracted
//   by an array assigned to an instance variable:
//
// class StudentDB {
//   constructor() {
//     this.students = [];
//   }
//   // a bunch of other methods
// }
//
// A student can also be represented by a class:
//
// class Student {
//   constructor() {
//  this.id = 0;
//  this.name = "";
//  this.email = "";
//  }
//
//   // methods
// }
// Consider saving instances of the Student class in the StudentDB's "database".
//
// One last note, try to get user data using methods.
//
// P.S. There are many ways to solve this.

class StudentDB {
  constructor (students) {
    this.students = students; // populating the DB.
  }

  static prompt (promptText) {
    const inputData = window.prompt(promptText);
    if (inputData === 'exit' || inputData === null) {
      throw 'Not an error, just exiting the program.';
    } else {
      return inputData;
    }
  }

  init () {
    this.userInterface(StudentDB.prompt(
      `Please, input one of the following commands:

      l .... List all students

      n .... New student data

      s .... Student details

      d .... Delete student data

      Type 'exit' or click 'cancel' to close the program.`
    ));
  }

  userInterface (userInput) {
    if (userInput === 'l') { // Input 'l'.
      for (const student of this.students) {
        console.log(`ID: ${student.id} | Name: ${student.name}`);
      }
      console.log('------------------ \n');
    } else if (userInput === 'n') { // Input 'n'.
      const studentID = (this.students[this.students.length - 1].id + 1),
      studentName = StudentDB.prompt(`Enter the student's name:`),
      studentEmail = StudentDB.prompt(`Enter the student's email address:`),
      studentCourseIDs = StudentDB.prompt(`Enter the IDs (separated by a comma) of the courses the student is enrolled in:`).replace(/\s/g,'').split(',').sort((a, b) => (a - b));
      let studentCourses = [];
      for (const courseID of studentCourseIDs) {
        studentCourses.push({
          id: courseID,
          grade: StudentDB.prompt(`Enter the student's grade for the ${courseID} course:`)
        });
      }
      const newStudent = new Student(studentID, studentName, studentEmail, studentCourses);
      this.students.push(newStudent);
    } else if (userInput === 's') { // Input 's'.
      const studentID = StudentDB.prompt(`Enter the student's ID:`);
      for (const student of this.students) {
        if (student.id === parseInt(studentID)) {
          // I had to break tabulation here to make the output looks good on the console.
          console.log(`Name ..... ${student.name}
ID ....... ${student.id}
E-mail ... ${student.email}
Courses ${student.courses.map(e => `
        ID: ${e.id} | Grade: ${e.grade}`).join('')}`);
          console.log('------------------ \n');
        }
      }
    } else if (userInput === 'd') { // Input 'd'.
      const studentID = StudentDB.prompt(`Enter the student's ID:`);
      if (window.confirm(`Are you sure you want to remove the student with the ID: ${studentID} from the database?`)) {
        for (const [index, student] of this.students.entries()) {
          if (student.id === parseInt(studentID)) {
            this.students.splice(index, 1);
          }
        }
      }
    } else if (userInput !== '') { // Catch invalid commands. '' happens when the user doesn't input anything.
      window.alert(`Error: '${userInput}' is not a valid comand.`);
    }
    this.init();
  }
}

class Student {
  constructor (id, name, email, courses) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.courses = courses;
  }
}

const myDB = new StudentDB([
  {
    id: 100,
    name: 'John',
    email: 'jdoe@gmail.com',
    courses: [{
      id: '4805',
      grade: 'B'
    }, {
      id: '4820',
      grade: 'A'
    }]
  },
  {
    id: 101,
    name: 'Sarah',
    email: 'sarah93@gmail.com',
    courses: [{
      id: '4805',
      grade: 'B-'
    }, {
      id: '4815',
      grade: 'B+'
    }, {
      id: '4820',
      grade: 'A+'
    }]
  },
  {
    id: 102,
    name: 'Bob',
    email: 'bobthebob@gmail.com',
    courses: [{
      id: '4810',
      grade: 'A-'
    }, {
      id: '4820',
      grade: 'B-'
    }]
  }
]);

// myDB.init();
