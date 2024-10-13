const express = require('express');
const { getQuestion, isCorrectAnswer } = require('./utils/mathUtilities');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static('public')); // To serve static files (e.g., CSS)

let quizState = {
    currentQuestion: null,
    streak: 0,
    topStreaks: []
};

//Some routes required for full functionality are missing here. Only get routes should be required
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/quiz', (req, res) => {
    const question = getQuestion();
    quizState.currentQuestion = question; // store question in global state
    res.render('quiz', {question, streak: quizState.streak});
});

app.get('/leaderboards', (req, res) => {
    res.render('leaderboards', {topStreaks: quizState.topStreaks, streak: quizState.streak});
})

app.get('/complete', (req, res) => { 
    res.render('complete', {streak: quizState.streak});
})


//Handles quiz submissions.
app.post('/quiz', (req, res) => {
    const { answer } = req.body; //get the user's answer from the request
    const question = quizState.currentQuestion; //get the current question from the state

    if (question) {
        //check if the answer is correct
        const isCorrect = isCorrectAnswer(question, parseFloat(answer));
        if (isCorrect) {
            quizState.streak += 1; //update streak by 1 if the answer is correct
            res.redirect('/quiz'); //redirect to the completion page
        } else {
            //if the answer is incorrect, update the leaderboard with streak
            if (quizState.streak > 0) {
                quizState.topStreaks.push({ 
                    streak: quizState.streak, 
                    date: new Date().toLocaleDateString() //stores current date of each streak
                });
                quizState.topStreaks.sort((a, b) => b - a); //have top 10 streaks show in descending order
                quizState.topStreaks = quizState.topStreaks.slice(0, 10); //keep only the top 10 streaks
            }

            quizState.streak = 0; //reset the streak if answer is incorrect
            res.redirect('/complete'); //redirect back to the quiz page
        }
    } else {
        res.redirect('/'); //redirect to the home page
    }

    console.log(`Answer: ${answer}, Current Streak: ${quizState.streak}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});