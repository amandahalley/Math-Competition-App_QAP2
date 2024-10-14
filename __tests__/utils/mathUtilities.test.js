const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
    test("Returns a question in the correct format (a, operator, b)", () => { 
        const question = getQuestion();
        expect(typeof question).toBe("string"); //check for string
        expect(question.split(' ').length).toBe(3); //checks for correct format
    }); 

    test("Uses a valid operator (+, -, *, /)", () => {
        const question = getQuestion();
        const operator = question.split(' ')[1]; //gets operator
        expect(['+', '-', '*', '/']).toContain(operator); //check that operator is valid
    });

    //possibly add testing for generating a random question
});



describe("Tests for isCorrectAnswer", () => {
    test("Detects a correct answer and gives back true", () => {
        const question = "10 * 5";
        const answer = 50;
        const result = isCorrectAnswer(question, answer);
        expect(result).toBe(true);
    });

    test("detect a false answer is given and gives back false", () => {
        const question = "10 * 5";
        const answer = 20
        const result = isCorrectAnswer(question, answer);
        expect(result).toBe(false);
    });

});