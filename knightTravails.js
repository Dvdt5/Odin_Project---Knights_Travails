


class Cell {
    constructor(x, y){
        this.preCell = null;
        this.coords = [x,y];
    }

    
}

export default class knightTravails {
    constructor () {
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

    

    availableMoves(currCell){
        let availableCells = []

        this.knightMoves.forEach(move => {
            const x = currCell.coords[0] + move[0];
            const y = currCell.coords[1] + move[1];

            if (x < 8 && x >= 0 && y < 8 && y >= 0 ){
                const cell = new Cell(x,y);
                cell.preCell = currCell;
                availableCells.push(cell);
            }
        })
        return availableCells;
    }


    // Builds the path into string.
    path(cell){
        if (cell.preCell === null){
            return JSON.stringify(cell.coords);
        }
        return this.path(cell.preCell) + "-->" + JSON.stringify(cell.coords);
    }

    knightMove(start, finish){

        if (JSON.stringify(start) == JSON.stringify(finish)) {
            return start;
        }

        // Starts the queue from first cell
        const startCell = new Cell(start[0],start[1]);
        let queue = [startCell];

        let seenCells = new Set(); 
        
        while (queue) {
            const cell = queue.shift();
            const coordsJSON = JSON.stringify(cell.coords);

            if (!seenCells.has(coordsJSON)){
                seenCells.add(coordsJSON);
            }

            if (JSON.stringify(cell.coords) === JSON.stringify(finish)){
                return this.path(cell);
            } else {
                const availableCells = this.availableMoves(cell);
                queue = [...queue , ...availableCells]
            }

        }
    }

}