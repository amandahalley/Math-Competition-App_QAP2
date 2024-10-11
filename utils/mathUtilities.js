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

    let a, b;

    //make sure numbers for division are only up to 100
    if (randomOperator === '/') {
        b = Math.floor(Math.random() * 10) + 1; 
        a = b * (Math.floor(Math.random() * 10) + 1); // makes sure 'a' is a multiple of 'b' of to 100

    } else {
        //randomly generates a number for each variable between 1 & 100
        a = Math.floor(Math.random() * 100) + 1;
        b = Math.floor(Math.random() * 100) +1;
    }

    return `${a} ${randomOperator} ${b}`;
}

console.log(getQuestion());

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {string} question The question being answered
 * @param {number} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
    //split question
    const [a, operator, b] = question.split();
     
    //convert numbers to integer from string
    const num1 = parseInt(a, 100);
    const num2 = parseInt(b, 100);

    // get value of the result of the question based on which operator is used
    let correctAnswer;
    switch(operator) {
        case '*':
            correctAnswer = num1 + num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '+':
        correctAnswer = num1 + num2;
        break;
        
        default:
            return false;
    }

    return correctAnswer === answer;
}
// // Example usage of isCorrectAnswer
// const question = getQuestion();
// console.log(question); // To see the generated question
// console.log(isCorrectAnswer(question,3)); // Replace 42 with a sample answer for testing


module.exports = {
    getQuestion,
    isCorrectAnswer
}