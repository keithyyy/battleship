// Helper function to determine if a square is being occupied by a ship or not. Accounts for ships that are rotated and unrotated
const isOccupied = (grid, row, col, rotated, ships, currentShip) => {

    // Declare bool isTaken to be false
      let isTaken = false;
    
      // If the ship isn't rotated..
      if (!rotated) {
    
        // .. and if the row, as well as the current ship's size are 11 or less ..
        if (row + ships[currentShip].size <= 11) {
    
          // .. create a loop that increments up to the current ship's size
          for (let i = 0; i < ships[currentShip].size; i++) {
    
            // .. if the row as well as the size of ship's along with the column's status is set to "occupied" ..
            if (grid[row + i][col].status === "occupied") {
    
              // .. set isTaken bool to true 
              isTaken = true;
            }
          }
        }
    
        // Otherwise, (if the ship IS rotated) ..
      } else {
        // .. if the column, as well as the size of the current ship are less than 11 ..
        if (col + ships[currentShip].size <= 11) {
    
          // .. create a loop that increments up to the size of the current ship ..
          for (let i = 0; i < ships[currentShip].size; i++) {
    
            // .. if the row, as well as the size of the ship combined with the column has a status that is equal to "occupied" ..
            if (grid[row][col + i].status === "occupied") {
    
              // .. Set bool isTaken to true.
              isTaken = true;
            }
          }
        }
      }
    
      // Return the occupied squares
      return isTaken;
    };
    
    
    // A Helper function to handle placing a ship onto the grid
    const placeShip = ({ grid, row, col, rotated, ships, currentShip }) => {
    
      // If a square is occupied, return null; A square that is occupied cannot have a ship placed onto it
      if (isOccupied(grid, row, col, rotated, ships, currentShip)) {
        return null;
    
        // Otherwise, (if a square isn't occupied) ..
      } else {
    
        // and If not rotated, ..
        if (!rotated) {
    
          // .. if the row combined with the current ship's size is less than 11 ..
          if (row + ships[currentShip].size <= 11) {
    
            // .. create a loop that will increment until it reaches the size of the current ship ..
            for (let i = 0; i < ships[currentShip].size; i++) {
    
              // Set each square within the ship's size to have a status of "occupied"
              grid[row + i][col].status = "occupied";
    
              // Set each square within the ship's size to share the ship type as the current ship being placed
              grid[row + i][col].type = ships[currentShip].type;
    
              // Remove the hover effect on each square within the ship's size
              grid[row + i][col].hover = false;
    
              // Set the position of the current ship by pushing it's coordinates to it's position, and set it's hit flag to false
              ships[currentShip].positions.push({ row: row + i, col, hit: false });
            }
    
            // Return updated grid and ship 
            return {
              grid,
              ships
            };
          }
    
          // Otherwise, (if rotated) ..
        } else {
    
          // .. if the column, as well as the current ship's combined size is 11 or less ..
          if (col + ships[currentShip].size <= 11) {
    
            // .. create a loop that will continue to incremement as far as the size of the current ship ..
            for (let i = 0; i < ships[currentShip].size; i++) {
    
              // Set each square in the ship's length to "occupied"
              grid[row][col + i].status = "occupied";
              // Set each square in the ship's length to be the same type as the current ship
              grid[row][col + i].type = ships[currentShip].type;
              // Remove the hover effect on each square in the ship's length
              grid[row][col + i].hover = false;
              // push the ship's coordinates to it's position, as well as set the hit flag to false
              ships[currentShip].positions.push({ row, col: col + i, hit: false });
            }
    
            // Return the updated grid and ship
            return {
              grid,
              ships
            };
          }
        }
      }
      // Otherwise do nothing
      return null;
    };
    
    // Helper function to highlight squares that are being hovered over
    const hoverUpdate = ({ grid, row, col, rotated, type, ships, currentShip }) => {
    
      // Declare a boolean variable storing if enter has been pressed or not
      const bool = type === "enter" ? true : false;
    
      // If not rotated, 
      if (!rotated) {
    
        // .. and if the current ship's size combined with the row are equal to or less than 11 ..
        if (row + ships[currentShip].size <= 11) {
    
          // .. create a loop that continues to increment as far as the current ship's size ..
          for (let i = 0; i < ships[currentShip].size; i++) {
    
            // Each square in the row with the ship's size, as well as the column the ship is on's hover is set to the state of bool;
            grid[row + i][col].hover = bool;
          }
        }
    
        // Otherwise, (if rotated) ..
      } else {
    
        // .. and if the column combined with the size of the current ship is 11 or less ..
        if (col + ships[currentShip].size <= 11) {
    
          // create a loop that continues to increment as far as the current ship's size
          for (let i = 0; i < ships[currentShip].size; i++) {
    
            // Set each square that occupies the ship's size combined with the column and row its on's hover state to the state of bool
            grid[row][col + i].hover = bool;
          }
        }
      }
      // return the updated grid
      return grid;
    };
    
    const classUpdate = square => {
      let classes = "grid-square ";
      if (square.status === "occupied" && square.hover) {
        classes += "active-occupied";
      } else if (square.hover) {
        classes += "active";
      } else if (square.status === "occupied") {
        classes += "occupied";
      } else if (square.status === "hit") {
        classes += "hit";
      } else if (square.status === "sunk") {
        classes += "sunk";
      }
      return classes;
    };
    
    module.exports = {
      placeShip,
      hoverUpdate,
      classUpdate
    };
    