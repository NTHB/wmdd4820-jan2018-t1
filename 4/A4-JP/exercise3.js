const car = {
    speed: Math.floor(Math.random()*300),
    park() {
        console.log('Parking!');
    },
    stop() {

        console.log("Stopping!");

        if(this.speed > 120) {

            let mystring = '';
            for(let i = 0; i < this.speed; i++) {
                mystring += 'e';
            }

            console.log(`Scr${mystring}tch!!`);
        } else if(this.speed > 80 && this.speed <= 120) {
            console.log('RRrch.')
        } else if(this.speed < 80) {
            console.log('sh');
        } else {
            console.log("Yikes, I don't know how fast I'm going!!!");
        }


     }

};

car.park();
car.stop();