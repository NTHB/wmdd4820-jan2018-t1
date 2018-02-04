app.service('bkgMusicService', function ($interval) {

    this.init = function () {

        playlist = [];

        for(let i = 1; i <= 5; i++) {
            playlist.push(new Audio('sfx/music/'+i+'.mp3'))
        }


        playlist = this.shuffle(playlist);

        console.log(playlist);


         current = null;
         idx = 0;
    };


    this.playSound = function() {
        if (current === null || current.ended) {
            // go to next
            current = playlist[idx++];

            // check if is the last of playlist and return to first
            if (idx >= playlist.length)
                idx = 0;

            // return to begin
            current.currentTime=0;

            // play
            current.play();
        }

    }

    this.shuffle = function(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }



});