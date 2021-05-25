// A dictionary to map the grid to a tile system so each square can be recognized
const dictionary = {
    0: null,
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J"
}

  // A function that creates each ship as an object and sets their relevant fields
    const makeShips = () => {
    return [
    {
        type: 'Carrier',
        size: 5,
        positions: []
    },
    {
        type: "Battleship",
        size: 4,
        positions: []
    },
    {
        type: "Cruiser",
        size: 3,
        positions: []
    },
    {
        type: "Submarine",
        size: 3,
        positions: []
    },
    {
        type: "Destroyer",
        size: 2,
        positions: []
    }
    ];
}

  // A function that generates the grid to be used as the battlefield
    const gridGenerator = () => {
        // Declaring the grid as an empty array
        let grid = [];

    // Declaring the length to be 11, accounting for the square at position 0, which is null
    let length = 11;

    // Loop that builds the grid
    for (let i = 0; i < length; i++) {

      // Declaring row as an empty array within the loop
        let row = [];

      // Nested loop 
        for (let j = 0; j < length; j++) {

        // On the first run of the loop ..
        if (i === 0) {

          // Push an object to the empty 'row' array containing the status as the "label" and the label as the dictionary with the value of j
            row.push({ status: "label", label: dictionary[j] })

          // Otherwise, if it's not the first run of the main loop, but it is the first run of the nested loop..
            } else if (i !== 0 && j === 0) {

          // Push an object containing 2 fields; status and label, with status being set to "label" and label set to the value of i (1)
            row.push({ status: "label", label: i });

          // Otherwise, (if its not the first run through of either loop)
            } else {

          // push an object to the row containing 4 fields;
          // status, hover, hit, and type, with their initial values set to "empty", false, false and null, respectively
            row.push({ status: "empty", hover: false, hit: false, type: null });        
        }
        }
    
        // Push row to the empty grid array
            grid.push(row);
            }

        // return the newly constructed grid
            return grid;
        };

    // A function that creates everything a player needs to play the game; grid, ships, etc
    const createPlayer = () => {
    return {
        shipsGrid: gridGenerator(),
        movesGrid: gridGenerator(),
        ships: makeShips(),
        currentShip: 0,
        shipsSet: false,
        sunkenShips: 0
    }
    }

    // An object that contains welcome messages to be displayed
    const welcomeMessage = { 
        turn: "Welcome to battleship!",
        messages: ["Players first choose the positions that they would like their battleships to be on the Ship grids below. Once the second player has chosen ship positions, players have a few seconds to head up to the battle grids to fight.", "The Battle Grid identifies a miss with gray, a hit with light green, and a sunken ship with dark green. You can not hit the same spot twice.", "Once a player sinks all of the opponent's ships, the game is over!"]
    }


    module.exports = {
        createPlayer,
        welcomeMessage
    }