function add(numOne, numTwo){
    return numOne + numTwo;
}
function divide(numOne, numTwo){
    return numOne / numTwo;
}
let countNumber = 0;
function count(){
    countNumber++;
    return countNumber;
}
module.exports = {
    add: add,
    divide: divide,
    count: count,
};