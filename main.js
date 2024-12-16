import KnightTravails from "./knightTravails.js"



const knightTravails = new KnightTravails();



const path = knightTravails.knightMove([5,7],[6,3]);
console.log("You made it in " + JSON.stringify(path.split("-->").length - 1) + " moves.");
console.log(path) 