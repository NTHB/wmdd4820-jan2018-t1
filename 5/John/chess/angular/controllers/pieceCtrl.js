app.controller('pieceCtrl', ($scope, $rootScope, pieceMovementService) => {

    //create piece data structure


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    CHESS PIECE STRUCTURE
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    //create piece data structure

    $scope.pieces = [
        {name: 'Pawn', imgUrl: 'gfx/chess-pawn-'},
        {name: 'Rook', imgUrl: 'gfx/chess-rook-'}
    ];
    $scope.numberPieces = 0;
    $scope.activePieces = [];


    class ChessPiece {
        constructor(x, y, team) {

            //add object to active pieces list (used to control highlight on checkPositionAvailable())
            $scope.activePieces.push(this);

            this.id = $scope.numberPieces;
            this.x = x;
            this.y = y;
            this.team = team;
            this.walkAndAttack = true;
            this.walkOver = false; // only knight walk over
            $scope.numberPieces++;


            //INSERT CHESS PIECE ON MAP
            //loop through all rows
            for (let row of $rootScope.board.rows) {
                if (row.y === this.y) {
                    //find row

                    row.squares.map((square) => {

                        //find square
                        if (square.x === this.x) {

                            //then set this piece data there

                            square.piece = this;
                        }
                    });
                }
            }


        }

        returnPiece(x, y) {

            // console.log($scope.activePieces);

            return $scope.activePieces.find((piece) => {

                if (piece.x === x && piece.y === y) {
                    return piece;
                }

            });

        }

        killPiece(target) {


            console.log('killing piece');
            console.log(target);
            //remove from active pieces
            $scope.activePieces = $scope.activePieces.filter((piece) => {
                if (piece.id !== target.id) {
                    return piece;
                }
            });


            console.log(this);

            console.log($scope.activePieces);

            //remove highlights
            console.log('blood image');
            let n = Math.ceil(Math.random() * 3);
            console.log(n);
            $rootScope.board.changeSquareAttr(target.x, target.y, 'piece', null);
            $rootScope.board.changeSquareAttr(target.x, target.y, 'blood', n);
            $rootScope.board.changeSquareAttr(target.x, target.y, 'droppable', false);

            console.log($rootScope.board.returnSquare(target.x,target.y));

            if (this.name === 'Pawn') {
                this.turnOffAttackHighlights();
            }

            let audio = new Audio(`sfx/attack/${this.name.toLowerCase()}-attack.wav`);
            audio.play();


        }

        changePosition(newX, newY) {

            if (this.x === newX && this.y === newY) {
                return false;
            }


            //play sound
            var audio = new Audio('sfx/chess.wav');
            audio.play();


            //remove piece from the old position
            $rootScope.board.changeSquareAttr(this.x, this.y, 'piece', null);


            //update changes on chess piece data
            this.x = newX;
            this.y = newY;

            //for pawn only
            this.firstMove = true; //lose first move advantage (pawn will only move 1 per turn)


            //update changes on board data
            //new position
            $rootScope.board.changeSquareAttr(newX, newY, 'piece', this);

            //change its position on activePieces var

            for (let piece of $scope.activePieces) {
                if ((piece.id === this.id)) {
                    piece.x = this.x;
                    piece.y = this.y;
                }
            }

            //recalculate moves

            this.allowedSquares = this.calculateMoves(this.x, this.y, false);


            $scope.$applyAsync(); //force update


        }

        checkPositionAvailable(x, y, enemiesAsBlocks = false) {

            //by default, prevent obj to move to same spot as team members, and allow to move into enemies (unless enemiesAsblocks = true)

            let positionPiece = this.returnPiece(x, y);


            if (positionPiece) { //if theres someone

                if (positionPiece.id === this.id) {
                    return false; //cannot move to same spot
                } else {
                    //if its some other piece

                    if (positionPiece.team === this.team) {
                        return false; //cannot move into same team members
                    } else {

                        if (enemiesAsBlocks === true) {
                            return false; //cannot move to enemy slot
                        } else {

                            return true; //can move to enemy slot
                        }

                    }

                }

            } else {
                return true;//empty slot
            }


        }

        updateAttr(attr, value) {

            this[attr] = value;


        }

        containMovesInBoard(moves) {

            return moves.filter((move) => {
                if (typeof move !== 'undefined') {
                    if ((move.x >= 0 && move.x < $rootScope.board.max_columns) && (move.y >= 0 && move.y < $rootScope.board.max_rows)) {
                        return move;
                    }
                }

            });

        }


    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    PIECES CLASSES
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    class Pawn extends ChessPiece {
        constructor(x, y, team) {
            super(x, y, team); // super call parent constructor methods
            this.name = 'Pawn';
            this.firstMove = false;
            this.firstMoveSquares = [];
            this.allowedSquares = [];
            this.walkAndAttack = false; //pawn does not walk and attack! They only attack in diagonal
            this.attackSquares = [];
            this.id = $scope.numberPieces;
            this.imgUrl = 'gfx/chess-pawn-';


        }


        calculateFirstMoves(x = this.x, y = this.y) {

            switch (this.team) {

                case 'white':

                    $scope.moves = [];

                    if (this.checkPositionAvailable(this.x, this.y - 1, true)) {


                        $scope.moves.push({x: this.x, y: this.y - 1});

                        if (this.checkPositionAvailable(this.x, this.y - 2, true)) {
                            $scope.moves.push({x: this.x, y: this.y - 2});
                        }


                    } else {
                        return [];
                    }

                    this.firstMoveSquares = $scope.moves;


                    break;


                case 'black':

                    $scope.moves = [];

                    if (this.checkPositionAvailable(this.x, this.y + 1, true)) {


                        if (this.y < $rootScope.board.max_rows - 1) {
                            $scope.moves.push({x: this.x, y: ((this.y + 1) > 7 ? 7 : this.y + 1)}); //max y = 7

                            if (this.checkPositionAvailable(this.x, this.y + 2, true)) {


                                $scope.moves.push({x: this.x, y: ((this.y + 2) > 7 ? 7 : this.y + 2)}); //set max y = 7
                            }
                        } else {
                            return [];
                        }


                    } else {
                        return [];
                    }

                    this.firstMoveSquares = $scope.moves;

                    break;


            }

        }

        calculateMoves(x = this.x, y = this.y) {

            switch (this.team) {
                case 'white':
                    $scope.moves = [];

                    if (this.checkPositionAvailable(this.x, this.y - 1, true)) {

                        $scope.moves.push({x: this.x, y: this.y - 1});

                    } else {
                        return [];
                    }

                    $scope.moves = this.containMovesInBoard($scope.moves);


                    this.allowedSquares = $scope.moves;
                    break;

                case 'black':

                    $scope.moves = [];

                    if (this.y < $rootScope.board.max_rows - 1) {
                        $scope.moves.push({x: this.x, y: ((this.y + 1) > 7 ? 7 : this.y + 1)}); //max y = 7

                    } else {
                        return [];
                    }


                    $scope.moves = this.containMovesInBoard($scope.moves);

                    this.allowedSquares = $scope.moves;


                    break;
            }

        }

        calculateAttackMoves() {

            if (typeof this.attackSquares === 'undefined') {
                this.attackSquares = [];//reset array if this bug happens
            }

            switch (this.team) {

                case 'white':

                    // console.log('calculating attack moves for obj id: '+this.id);

                    if (this.checkPositionAvailable(this.x - 1, this.y - 1)) {
                        $scope.targetSq = this.returnPiece(this.x - 1, this.y - 1);
                        if ($scope.targetSq) {
                            if ($scope.targetSq.team !== this.team) { // if its an enemy
                                this.attackSquares.push({x: this.x - 1, y: this.y - 1});
                            }
                        }
                    }

                    if (this.checkPositionAvailable(this.x + 1, this.y - 1)) {
                        $scope.targetSq = this.returnPiece(this.x + 1, this.y - 1);
                        if ($scope.targetSq) {
                            if ($scope.targetSq.team !== this.team) { // if its an enemy
                                this.attackSquares.push({x: this.x + 1, y: this.y - 1});
                            }
                        }
                    }


                    break;


                case 'black':

                    if (this.checkPositionAvailable(this.x - 1, this.y + 1)) {
                        $scope.targetSq = this.returnPiece(this.x - 1, this.y + 1);
                        if ($scope.targetSq) {
                            if ($scope.targetSq.team !== this.team) { // if its an enemy
                                this.attackSquares.push({x: this.x - 1, y: this.y + 1});
                            }
                        }
                    }

                    if (this.checkPositionAvailable(this.x + 1, this.y + 1)) {
                        $scope.targetSq = this.returnPiece(this.x + 1, this.y + 1);
                        if ($scope.targetSq) {
                            if ($scope.targetSq.team !== this.team) { // if its an enemy
                                this.attackSquares.push({x: this.x + 1, y: this.y + 1});
                            }
                        }
                    }
                    break;


            }


        }

        turnOffAttackHighlights() {

            for (let asq of this.attackSquares) {
                $rootScope.board.changeSquareAttr(asq.x, asq.y, 'enemyPiece', false);
                $rootScope.board.changeSquareAttr(asq.x, asq.y, 'droppable', false);
            }

            //clear attack squares
            this.attackSquares = [];

        }

        calculatePossibleAttackSquares() {

            //only for checkMate purposes...

            let possibleAttackSq = [];

            if (this.team === 'black') {

                possibleAttackSq = [
                    {x: this.x - 1, y: this.y + 1},
                    {x: this.x + 1, y: this.y + 1},
                ];
            }

            if (this.team === 'white') {

                possibleAttackSq = [
                    {x: this.x - 1, y: this.y - 1},
                    {x: this.x + 1, y: this.y - 1},
                ];
            }


            return possibleAttackSq;


        }

    }

    class Rook extends ChessPiece {
        constructor(x, y, team) {
            super(x, y, team); // super call parent constructor methods
            this.name = 'Rook';
            this.allowedSquares = [];
            this.id = $scope.numberPieces;
            this.imgUrl = 'gfx/chess-rook-';

        }

        calculateMoves(x, y) {

            if (typeof this.allowedSquares === 'undefined') {
                this.allowedSquares = [];
            }


            //store the moves
            let moves = [];

            //vertical up moves


            for (let movement of pieceMovementService.generateMovement(this, ['vertical-up', 'vertical-down', 'horizontal-left', 'horizontal-right'])) {
                moves.push(movement);
            }

            //vertical down moves


            moves = this.containMovesInBoard(moves);

            // console.log(moves);


            return this.allowedSquares = moves;
        }


    }

    class Bishop extends ChessPiece {
        constructor(x, y, team) {
            super(x, y, team); // super call parent constructor methods
            this.name = 'Bishop';
            this.allowedSquares = [];
            this.id = $scope.numberPieces;
            this.imgUrl = 'gfx/chess-bishop-';

        }

        calculateMoves(x, y) {

            if (typeof this.allowedSquares === 'undefined') {
                this.allowedSquares = [];
            }


            //store the moves
            let moves = [];

            //vertical up moves

            for (let movement of pieceMovementService.generateMovement(this, ['diagonal-left-up', 'diagonal-right-up', 'diagonal-right-down', 'diagonal-left-down'])) {
                moves.push(movement);
            }

            //vertical down moves


            moves = this.containMovesInBoard(moves);

            // console.log(moves);

            return this.allowedSquares = moves;
        }


    }

    class Queen extends ChessPiece {
        constructor(x, y, team) {
            super(x, y, team); // super call parent constructor methods
            this.name = 'Queen';
            this.allowedSquares = [];
            this.id = $scope.numberPieces;
            this.imgUrl = 'gfx/chess-queen-';

        }

        calculateMoves(x, y) {

            if (typeof this.allowedSquares === 'undefined') {
                this.allowedSquares = [];
            }


            //store the moves
            let moves = [];

            //vertical up moves

            for (let movement of pieceMovementService.generateMovement(this, [
                'diagonal-left-up', 'diagonal-right-up', 'diagonal-right-down', 'diagonal-left-down',
                'vertical-up', 'vertical-down', 'horizontal-left', 'horizontal-right'])) {
                moves.push(movement);
            }

            //vertical down moves


            moves = this.containMovesInBoard(moves);

            // console.log(moves);

            return this.allowedSquares = moves;
        }


    }

    class Knight extends ChessPiece {
        constructor(x, y, team) {
            super(x, y, team); // super call parent constructor methods
            this.name = 'Knight';
            this.allowedSquares = this.calculateMoves(this.x, this.y, false);
            this.id = $scope.numberPieces;
            this.imgUrl = 'gfx/chess-knight-';
            this.walkOver = true;

        }

        calculateMoves(x, y) {

            $scope.moves = [];

            if (this.checkPositionAvailable(this.x - 1, this.y - 2)) {
                $scope.moves.push({
                    x: this.x - 1,
                    y: this.y - 2
                });
            }

            if (this.checkPositionAvailable(this.x + 1, this.y - 2)) {
                $scope.moves.push({
                    x: this.x + 1,
                    y: this.y - 2
                });
            }

            if (this.checkPositionAvailable(this.x - 2, this.y - 1)) {
                $scope.moves.push({
                    x: this.x - 2,
                    y: this.y - 1
                });
            }

            if (this.checkPositionAvailable(this.x + 2, this.y - 1)) {
                $scope.moves.push({
                    x: this.x + 2,
                    y: this.y - 1
                });
            }

            if (this.checkPositionAvailable(this.x - 2, this.y + 1)) {
                $scope.moves.push({
                    x: this.x - 2,
                    y: this.y + 1
                });
            }

            if (this.checkPositionAvailable(this.x + 2, this.y + 1)) {
                $scope.moves.push({
                    x: this.x + 2,
                    y: this.y + 1
                });
            }

            if (this.checkPositionAvailable(this.x - 1, this.y + 2)) {
                $scope.moves.push({
                    x: this.x - 1,
                    y: this.y + 2
                });
            }

            if (this.checkPositionAvailable(this.x + 1, this.y + 2)) {
                $scope.moves.push({
                    x: this.x + 1,
                    y: this.y + 2
                });
            }


            $scope.moves = this.containMovesInBoard($scope.moves);


            return $scope.moves;


        }


    }

    class King extends ChessPiece {
        constructor(x, y, team) {
            super(x, y, team); // super call parent constructor methods
            this.name = 'King';
            this.allowedSquares = [];
            this.id = $scope.numberPieces;
            this.imgUrl = 'gfx/chess-king-';
            this.avoidSqs = [];
        }

        calculateMoves(x, y) {

            if (typeof this.allowedSquares === 'undefined') {
                this.allowedSquares = [];
            }


            //store the moves
            let moves = [];

            //vertical up moves

            for (let movement of pieceMovementService.generateMovement(this, ['up', 'diagonal-up-left', 'diagonal-up-right', 'left', 'right', 'down', 'diagonal-down-left', 'diagonal-down-right'])) {
                moves.push(movement);
            }

            //vertical down moves


            moves = this.containMovesInBoard(moves);

            // console.log(moves);

            return this.allowedSquares = moves;
        }

        calculateCheckMate() {


            /* ------------------------------------------------------------|
            | Loop through all pieces, calculate each movement of them,
            | and avoid going into that squares
            *-------------------------------------------------------------*/

            let avoidSquares = [];


            for (let piece of $scope.activePieces) {

                if (piece.team !== this.team && piece.id !== this.id) { //only avoid enemy possible movement squares


                    /* PAWN CASE =========================================== */
                    if (piece.name === 'Pawn') {

                        let atqSqs = piece.calculatePossibleAttackSquares();
                        for (let atqSq of atqSqs) {
                            avoidSquares.push(atqSq);
                        }
                    } else { /* END PAWN =========================================== */


                        /* OTHER PIECES =========================================== */
                        // console.log(piece.name);
                        //force a movement calculation
                        let sqs = piece.calculateMoves(piece.x, piece.y);
                        for (let sq of sqs) {
                            if (typeof sq !== 'undefined') {
                                avoidSquares.push(sq);
                            }
                        }
                    }
                }
            }
            this.avoidSqs = this.containMovesInBoard(avoidSquares);  //filter wrong movements and return the correct ones
        }


        checkPositionCheckMate(x, y) {
            let checkMateMovements = this.avoidSqs;

            if (checkMateMovements !== 'undefined') {
                let output = checkMateMovements.find((forbiddenSq) => {
                    if (forbiddenSq.x === x && forbiddenSq.y === y) {
                        return forbiddenSq;
                    }
                });

                return typeof output !== 'undefined';
            }


        }
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    TEAM POSITIONING
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /* WHITE TEAM =========================================== */

    new Rook(0, 7, 'white');
    new Rook(7, 7, 'white');

    for (let i = 0; i <= 7; i++) {
        new Pawn(i, 6, 'white');
    }

    new Knight(6, 7, 'white');
    new Knight(1, 7, 'white');


    new Bishop(2, 7, 'white');
    new Bishop(5, 7, 'white');

    new Queen(3, 7, 'white');

    new King(4, 7, 'white');

    /* BLACK TEAM =========================================== */

    new Rook(0, 0, 'black');
    new Rook(7, 0, 'black');


    for (let i = 0; i <= 7; i++) {
        new Pawn(i, 1, 'black');
    }

    new Knight(1, 0, 'black');
    new Knight(6, 0, 'black');


    new Bishop(2, 0, 'black');
    new Bishop(5, 0, 'black');

    new Queen(3, 0, 'black');
    new King(4, 0, 'black');


});
