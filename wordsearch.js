const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    
    return false;
}

const transpose = function (matrix) {
    let transposedMatrix = [];
    for (let j = 0; j < matrix[0].length; j++) {
        let row = [];
        for (let i = 0; i < matrix.length; i++){
            row.push(matrix[i][j]);
        }
        transposedMatrix.push(row);
    }
    return transposedMatrix;
};

module.exports = wordSearch




