function seed() {
  // let argArr = [...arguments]
  // return argArr
  return [...arguments]
}

function same([x, y], [j, k]) {
  if(x === j && y === k){
    return true;
  }
  return false
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  return this.some(element => element.toString() === cell.toString())
}

const printCell = (cell, state) => {
  if(contains.call(state, cell)){
    return '\u25A3'
  }
  return '\u25A2'
};

const corners = (state = []) => {
  if(state.length > 1 ){
    let max = [0,0], min = [state[0][0],state[0][1]];
    state.forEach( element => {
      if(element[0] > max[0]){
        max[0] = element[0]
      }
      if(element[1] > max[1]){
        max[1] = element[1]
      }
      if(element[0] < min[0]){
        min[0] = element[0]
      }
      if(element[1] < min[1]){
        min[1] = element[1]
      }
    })
    return{
      topRight: [max[0],max[1]],
      bottomLeft: [min[0], min[1]]
    }
  }
  return {
    topRight: [0,0],
    bottomLeft: [0,0]
  }
};

const printCells = (state) => {
  let rectangle = corners(state)
  let max = rectangle.topRight, min = rectangle.bottomLeft;
  let cellsStr = "";

  for(let i = max[1]; i >= min[1]; i--){
    for(j = min[0]; j <= max[0]; j++){
      cellsStr = cellsStr + printCell([j,i], state)
      if(j === max[0]){
        cellsStr = cellsStr + "\n"
      }else {
        cellsStr = cellsStr + " "
      }
    }
  }
  return( cellsStr)
};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;