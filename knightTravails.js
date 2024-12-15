


class Cell {
    constructor(x, y){
        this.preCell = null;
        this.coords = [x,y];
    }

    
}

export default class knightTravails {
    constructor () {
        this.finish = null;
        this.board = this.buildBoard();
        this.knightMoves = [
            [1, 2],
            [1, -2],
            [2, 1],
            [2, -1],
            [-1, 2],
            [-1, -2],
            [-2, 1],
            [-2, -1],
        ];
    }

    buildBoard(){
        let board = [];

        for (let i = 0; i < 8; i++){
            board[i] = []
            for(let j = 0; j < 8; j++){
                board[i][j] = new Cell(j, i);
            }
        }
        return board;
    }

    availableMoves(currCoords){
        let availableCells = []

        this.knightMoves.forEach(move => {
            const x = currCoords[0] + move[0];
            const y = currCoords[1] + move[1];

            if (x < 8 && x >= 0 && y < 8 && y >= 0 ){
                const cell = new Cell(x,y);
                availableCells.push(cell);
            }
        })
        return availableCells;
    }

}