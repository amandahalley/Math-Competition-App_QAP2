const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
    test("Returns a question in the correct format (a, operator, b)", () => { 
        const question = getQuestion();
        expect(typeof question).toBe("string"); // check for string
        expect(question.split(' ').length).toBe(3); // checks for correct format
    }); 

    test("Uses a valid operator (+, -, *, /)", () => {
        const question = getQuestion();
        const operator = question.split(' ')[1];
        expect(['+', '-', '*', '/']).toContain(operator);
    });


});





describe("Tests for isCorrectAnswer", () => {
    
});