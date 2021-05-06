const transpose = function(matrix) {
    let output = [];
    for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++) {
        if (output[j] === undefined) output[j] = []; 
        output[j][i] = matrix[i][j];
      
      }
    }
    return output;
  };
  

const wordSearch = (letters, word) => { 

    // if letters is empty
    if (letters.length === 0 ) {
        return false;
    }
    // this looks for word horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    } 
    // this looks for word vertically
    const transArray = [];
    for (let i = 0; i < letters.length; i++){
        for (let j = 0; j < letters[i].length; j++) {
          if (transArray[j] === undefined) transArray[j] = []; 
          transArray[j][i] = letters[i][j];
        }
      }
    for (let l of transArray) {
        if (l.includes(word)) return true
    } 
    return false
}

module.exports = wordSearch;



const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')
