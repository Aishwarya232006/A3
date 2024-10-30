const password = "password123";
let score = 0;
let currentQuestionIndex = 0;
let timer;
let timeLeft = 300; // 5 minutes

const questions = [
    {
        question: "What is the command to make a directory?",
        options: ["mkdir", "Definitely Weekend", "You should go for weekend", "Okay It's Weekend"],
        answer: 0
    },
    {
        question: "How can you talk?",
        options: ["By singing", "By Sleeping", "By expressions", "By Speaking"],
        answer: 3
    },
    {
        question: "What command do you use to create an empty file?",
        options: ["ls", "comm", "touch", "vi file_name"],
        answer: 2
    },
    {
        question: "Which command do you give to list all the directories in a long list in LINUX/UNIX?",
        options: ["ls", "ls -ld", "ls -l", "ls -alt"],
        answer: 2
    }
];

// Initialize Progress Bar
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container"); // Reference progress container

// Authentication
document.getElementById("login-btn").addEventListener("click", function() {
    const userInput = document.getElementById("password").value;
    const authMessage = document.getElementById("auth-message");

    if (userInput === password) {
        authMessage.textContent = "Login successful!";
        authMessage.style.color = "green";
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "flex";
        progressContainer.style.display = "block"; // Show progress bar container
        displayQuestion();
        startTimer();
    } else {
        authMessage.textContent = "Incorrect password!";
        authMessage.style.color = "red";
    }
});

// Sidebar toggle functionality
document.getElementById("home-btn").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
});

// Timer function
function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult(); // Automatically show results if time runs out
        } else {
            timeLeft--;
            document.getElementById("timer").textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// Display questions
function displayQuestion() {
    const questionContainer = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(li);
    });

    updateProgressBar(); // Update the progress bar every time a question is displayed
    updateQuestionCount();

    // Show or hide previous button based on the question index
    document.getElementById("prev-btn").style.display = currentQuestionIndex > 0 ? "inline" : "none";
}

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    const nextQuestionBtn = document.getElementById("next-question-btn");

    if (selectedIndex === currentQuestion.answer) {
        feedback.textContent = "Correct!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        score++;
    } else {
        feedback.textContent = "Incorrect!";
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
    }

    feedback.style.display = "block";
    nextQuestionBtn.style.display = "block"; // Show next question button
    updateAttemptedCount();
}

function updateAttemptedCount() {
    const attemptedQuestions = document.getElementById("attempted-questions");
    attemptedQuestions.textContent = `Questions Attempted: ${currentQuestionIndex + 1}`;
}

function updateQuestionCount() {
    const remainingQuestions = document.getElementById("remaining-questions");
    remainingQuestions.textContent = `Questions Remaining: ${questions.length - currentQuestionIndex - 1}`;
}

// Go to the next question
document.getElementById("next-question-btn").addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("feedback").style.display = "none"; // Hide feedback
        this.style.display = "none"; // Hide next question button
    } else {
        showResult();
    }
});

// Go to the previous question
document.getElementById("prev-btn").addEventListener("click", function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        document.getElementById("feedback").style.display = "none"; // Hide feedback
        document.getElementById("next-question-btn").style.display = "none"; // Hide next question button
        updateAttemptedCount();
        updateQuestionCount();
    }
});

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${Math.round(progress)}%`;
}

function showResult() {
    clearInterval(timer);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("final-score").textContent = `Your final score is ${score} out of ${questions.length}.`;
}

// Retry button
document.getElementById("retry-btn").addEventListener("click", function() {
    // Reset the quiz for a retry
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 300; // Reset time
    document.getElementById("result-container").style.display = "none";
    document.getElementById("auth-container").style.display = "block"; // Show login again
    progressBar.style.width = `0%`; // Reset progress bar
    progressContainer.style.display = "none"; // Hide progress bar on retry
    document.getElementById("attempted-questions").textContent = "Questions Attempted: 0"; // Reset attempted count
    document.getElementById("remaining-questions").textContent = `Questions Remaining: ${questions.length}`; // Reset remaining count
    document.getElementById("prev-btn").style.display = "none"; // Hide previous button
});
