app.controller('boardCtrl', ($scope, $rootScope, bkgMusicService, ngDialog) => {

    console.log("Orientation type is " + screen.orientation.type);
    console.log("Orientation angle is " + screen.orientation.angle);







    /* ------------------------------------------------------------|
    | BACKGROUND MUSIC
    *-------------------------------------------------------------*/
    bkgMusicService.init();
    bkgMusicService.playSound();

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    BOARD STRUCTURE
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


    //create board data structure

    class Board {
        constructor(max_columns, max_rows) {
            this.max_columns = max_columns;
            this.max_rows = max_rows;
            this.rows = [];


            /* ------------------------------------------------------------|
            | LANDSCAPE
            *-------------------------------------------------------------*/

            if(screen.orientation.type.indexOf('portrait') > -1) {

                this.showMessage('show landscape message',false);

                screen.orientation.lock('landscape');

            }


            $rootScope.turn = 0; //white turn

            /* RANDOM TURN BEGIN =========================================== */
            let n = Math.floor(Math.random() * 10);
            (n > 5 ? $rootScope.turn = 'Player White' : $rootScope.turn = 'Player Dark');

            console.log($scope.turn);

            //create columns
            let sqColor = 'dark-square';
            for (let i = 0; i < this.max_columns; i++) {
                //create rows
                let squares = [];

                (sqColor === 'dark-square' ? sqColor = 'white-square' : sqColor = 'dark-square');

                for (let r = 0; r < this.max_rows; r++) {

                    (sqColor === 'dark-square' ? sqColor = 'white-square' : sqColor = 'dark-square');

                    squares.push({
                        y: i,
                        x: r,
                        className: sqColor,
                        piece: {},
                        droppable: false, //to put pieces there
                        enemyPiece: false, //to mark if theres an enemy in this position
                        blood:false
                    })

                }

                this.rows.push({
                    y: i,
                    squares: squares
                });
            }

        }

        returnSquare(x, y) {

            //update square at the new position

            for (let row of $rootScope.board.rows) {

                if (row.y === y) {

                    let s = row.squares.filter((square) => {

                        if (square.x === x) {

                            return square;


                        }


                    });

                    return s[0];

                }


            }

        }


        showMessage(msg, simple = true) {
            /* ------------------------------------------------------------|
            | DIALOG SETUP
            *-------------------------------------------------------------*/

            if(simple === true) {
                $rootScope.theme = 'ngdialog-theme-default';

                ngDialog.open({
                    template: '<h2 style="text-align:center;" class="zindex">'+msg+'</h2>',
                    className: 'ngdialog-theme-default',
                    plain: true,
                    overlay: false,
                    windowClass: 'zindex'
                });
            } else {

                    $rootScope.theme = 'ngdialog-theme-plain custom-width';

                    ngDialog.open({
                        template: 'firstDialogId',

                        className: 'ngdialog-theme-default custom-width',

                        closeByDocument: true,
                        closeByEscape: true
                    });
                };




        }


        changeSquareAttr(x, y, attr, value) {


            this.returnSquare(x, y)[attr] = value;

            // console.log('changing attr of square...');
            // console.log(target);
            $scope.$applyAsync(); //force update

            // console.log(`Changing square ${x}/${y} attribute ${attr} to "${value}"`)


            // console.log($rootScope.board);


        }


        highlight(obj, highlight) {

            let squares = obj.allowedSquares; //previously calculated moves (see ddCtrl.js)

            if (obj.firstMove == false) {
                // console.log(obj.firstMoveSquares);
                squares = obj.firstMoveSquares; //pawn case
            }

            switch (highlight) {

                case true:

                    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    ATTACK HIGHLIGHTS (only for Pawn)
                    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

                    if (obj.name === 'Pawn') {

                        obj.calculateAttackMoves();

                        for (let asq of obj.attackSquares) {

                            this.changeSquareAttr(asq.x, asq.y, 'droppable', true);
                            this.changeSquareAttr(asq.x, asq.y, 'enemyPiece', true);

                        }
                    }


                    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                     MOVEMENT HIGHLIGHTS
                     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

                    if (typeof squares === 'undefined') {
                        return false;
                    }


                    for (let square of squares) {
                        // console.log(square);
                        if (square.x >= 0 && square.y >= 0) {


                            this.changeSquareAttr(square.x, square.y, 'droppable', true);


                            //lets CHECK at this square position, if theres an enemy

                            let squarePiece = obj.returnPiece(square.x, square.y);

                            if (squarePiece) { //if theres an piece on the way

                                if (squarePiece.id !== obj.id) { //if its not myself

                                    if (squarePiece.team !== obj.team) { //if its an enemy


                                        if (obj.walkAndAttack === true) { //only highligh for attack on pieces that can walk and attack (not the case of pawn)
                                            this.changeSquareAttr(square.x, square.y, 'enemyPiece', true); //test


                                        } else {
                                            this.changeSquareAttr(square.x, square.y, 'droppable', false);
                                        }


                                    } else {
                                        this.changeSquareAttr(square.x, square.y, 'droppable', false);

                                    }

                                }

                            }

                        }
                    }


                    break;


                case false: // turn off highlight
                    if (typeof squares !== 'undefined') {
                        for (let square of squares) {
                            // console.log(square);
                            if (square.x >= 0 && square.y >= 0) {
                                // console.log(`Unhighli square ${square.x}/${square.y}`);
                                this.changeSquareAttr(square.x, square.y, 'droppable', false); //test
                                this.changeSquareAttr(square.x, square.y, 'enemyPiece', false); //test

                            }
                        }

                    }


                    break;


            }


        }


        checkObjTurn(obj) {


            switch ($rootScope.turn) {

                case 'Player White':
                    return obj.team === 'white';
                    break;

                case 'Player Dark':
                    return obj.team === 'black';
                    break;

            }


        }


    }




    $scope.checkBlood = function(square) {

        let css = {
            "background-image": "url('../gfx/blood/"+square.blood+".png') ",
        "background-repeat": "no-repeat",
        "background-position": "1rem 1.3rem"
        };

        if(square.blood) {
            return css;
        } else {
            return false;
        }


    }


    //create a 8x8 board
    $rootScope.board = new Board(8, 8);


    console.log($rootScope.board);


});
