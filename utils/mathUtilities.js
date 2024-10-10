/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {string} The randomly generated math question
 */
function getQuestion() {
    //define possible opperators
    const operators= ['*', '/', '-', '+'];

    //randomly choose one of the defined operators
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];


    //randomly generate a number for each variable between 1 & 10
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;

    return `${a} ${randomOperator} ${b}`;
}

console.log(getQuestion());

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
    return false;
}

module.exports = {
    getQuestion,
    isCorrectAnswer
}