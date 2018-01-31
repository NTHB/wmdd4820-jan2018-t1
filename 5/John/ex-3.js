/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
CREATED BY: JOHN - JOAO PAULO
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class FizzBuzz {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    run() {
        let numbers = [];
        for (let i = 0; i <= 100; i++) {
            numbers.push(i);
        }

        //reassign checking module
        numbers = numbers.map((number) => {

            if ((number % this.number1 === 0) && (number % this.number2 === 0)) {
                return number = 'FizzBuzz';
            } else if (number % this.number1 === 0) {
                return number = 'Fizz';
            } else if (number % this.number2 === 0) {
                return number = 'Buzz';
            } else {
                return number;
            }

        });
        console.log(numbers);
    }

    changeNumber(number, value) {

        switch (number) {
            case '1':
                this.number1 = value;
                break;

            case '2':
                this.number2 = value;
                break
        }

    }


}

let fb = new FizzBuzz(3, 5);

fb.run();
fb.changeNumber('1',10);
fb.changeNumber('2',20);
fb.run();