const questions = await fetch('../../.netlify/functions/slstPhysical/slstphysical1').then(response=> response.json())
// Global variables to store student information
let studentName = '';
let studentEmail = '';
let studentSubject = '';
let studentSchool = '';
let minutes = 90; // Numer of minutes for the exam
let indexes = ["(A)","(B)","(C)","(D)"]

//Global Variables to set positive and negative markings
let negativePerQuestion = 0  //negative marking per Question
let positivePerQuestion = 1; //marks for per question

// Quiz state variables (initialized after successful login)
let questionStates = []; // Will be initialized with questions.length after login
let userAnswers = {}; // Will be initialized after login

let currentQuestionIndex = 0;
const questionsPerPage = 1; // !Important dont change this

// DOM elements for login
const loginContainer = document.getElementById('login-container');
const loginForm = document.getElementById('login-form');
const studentNameInput = document.getElementById('student-name');
const studentEmailInput = document.getElementById('student-email');
const studentSchoolInput = document.getElementById('student-school');
const studentSubjectInput = document.getElementById('student-subject');
// DOM elements for quiz
const quizMainContainer = document.getElementById('quiz-main-container');
const examContainer = document.getElementById('exam-container');
const submitQuizBtn = document.getElementById('submit-quiz');
const scoreCard = document.getElementById('score-card');
const scoreDisplay = document.getElementById('score-display');
const resultMessage = document.getElementById('result-message');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const clearSelectionBtn = document.getElementById('clear-selection-btn');
const markForReviewBtn = document.getElementById('mark-for-review-btn');

// DOM elements for quiz
const downloadPdfBtn = document.getElementById('download-pdf-btn')

// Timer elements and variables
const timeDisplay = document.getElementById('time-display');
let timeLeft = minutes * 60; // 60 minutes in seconds
let timerInterval;
let quizSubmitted = false;

// Modal elements
const confirmationModal = document.getElementById('confirmation-modal');
const confirmSubmitBtn = document.getElementById('confirm-submit');
const cancelSubmitBtn = document.getElementById('cancel-submit');

// Question Palette elements
const questionPalette = document.getElementById('question-palette');
const paletteGrid = document.getElementById('palette-grid');
const questionPaletteToggleBtn = document.getElementById('question-palette-toggle-btn');
const closePaletteBtn = document.getElementById('close-palette-btn');


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if essential DOM elements are found
    console.log('DOMContentLoaded fired.');
    console.log('loginContainer found:', !!loginContainer);
    console.log('loginForm found:', !!loginForm);
    console.log('quizMainContainer found:', !!quizMainContainer);

    // Only MathJax typesetting for now, quiz starts after login
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
    // Debug: Check if questions array is loaded.
    // This will log 'undefined' if quiz1.js isn't being loaded as a module correctly,
    // or if the export in quiz1.js isn't correct.
    console.log("Script loaded. Questions array:", questions);
    if (!questions || questions.length === 0) {
        console.error("CRITICAL ERROR: 'questions' array is not loaded or is empty. Please ensure 'quiz1.js' is correctly set up as a module and contains the 'export const questions = [...]' array.");
        // Optionally, disable login form if questions are not available
        if (loginForm) {
            loginForm.querySelector('button[type="submit"]').disabled = true;
            alert("Quiz questions could not be loaded. Please check the console for details.");
        }
    }
});

// Add a beforeunload event listener to warn the user
window.addEventListener('beforeunload', (event) => {
    // Only warn if the quiz has started and not yet submitted
    if (quizMainContainer && quizMainContainer.classList.contains('active-quiz') && !quizSubmitted) { // Check for 'active-quiz' class and if element exists
        event.preventDefault();
        event.returnValue = ''; // Required for Chrome to show the prompt
        return 'You have an active quiz session. Are you sure you want to leave? Your progress may be lost.';
    }
});

// --- Login Form Handling ---
if (loginForm) { // Ensure loginForm exists before adding event listener
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log("Login form submitted event fired.");

        studentName = studentNameInput.value.trim();
        studentEmail = studentEmailInput.value.trim();
        studentSchool = studentSchoolInput.value.trim();
        studentSubject = studentSubjectInput.value.trim();

        if (studentName && studentEmail) {
                        
            // Hide the login form
            if (loginContainer) {
                loginContainer.classList.add('hidden');
                console.log("loginContainer hidden.");
            } else {
                console.error("loginContainer not found for hiding.");
            }

            // Show the quiz container
            if (quizMainContainer) {
                quizMainContainer.classList.remove('hidden');
                quizMainContainer.classList.add('active-quiz'); // Add an 'active-quiz' class for state tracking
                console.log("quizMainContainer shown and active-quiz class added.");
            } else {
                console.error("quizMainContainer not found for showing.");
            }
            
            // Check if questions array is valid before initializing quiz components
            if (questions && questions.length > 0) {
                // Initialize quiz state variables AFTER questions are loaded
                questionStates = Array(questions.length).fill().map(() => ({
                    answered: false,
                    markedForReview: false,
                    visited: false
                }));
                userAnswers = {};
                
                // Initialize and start the quiz
                renderQuestionPalette(); // Render palette once
                loadQuestions(); // Load the first question
                startTimer(); // Start the timer
                console.log("Quiz started successfully.");
            } else {
                console.error("Cannot start quiz: 'questions' array is not loaded or is empty.");
                alert("Cannot start quiz: Questions are unavailable. Please contact support.");
            }

        } else {
            alert('Please enter both your name and email to start the quiz.');
            console.log("Login failed: Missing name or email.");
        }
    });
} else {
    console.error("Login form (ID: 'login-form') not found in the DOM.");
}

//Function for clear selection
clearSelectionBtn.addEventListener('click', () => {
    if (!quizSubmitted) {
        // Remove the answer for the current question
        delete userAnswers[currentQuestionIndex];
        // Mark the question as not answered
        questionStates[currentQuestionIndex].answered = false;

        // Visually uncheck the selected radio button for the current question
        const currentQuestionCard = document.getElementById(`question-${currentQuestionIndex}`);
        if (currentQuestionCard) {
            const selectedRadio = currentQuestionCard.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
            if (selectedRadio) {
                selectedRadio.checked = false;
            }
        }
        updateMarkForReviewButtonText(); // Update button text if current question state changes
        updatePaletteButtonStates(); // Update palette button immediately
    }
});
// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeDisplay.textContent = "Time's Up!";
            if (!quizSubmitted) {
                autoSubmitQuiz();
            }
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Function to auto-submit the quiz when time runs out
function autoSubmitQuiz() {
    quizSubmitted = true;
    calculateScore();
    displayResults();
    disableQuiz();
    // Optionally, show a message that the quiz was auto-submitted
    resultMessage.textContent = "Time's up! Your quiz has been automatically submitted.";
    resultMessage.className = 'mt-2 text-red-600 font-bold';
    scoreCard.style.display = 'block';
    hideModal(confirmationModal); // Ensure modal is hidden if open
}


// Function to load and display questions
function loadQuestions() {
    if (!questions || questions.length === 0) {
        console.error("loadQuestions called but 'questions' array is empty or not loaded.");
        return;
    }
    examContainer.innerHTML = ''; // Clear previous questions

    // Mark the current question as visited
    if (!quizSubmitted) {
        questionStates[currentQuestionIndex].visited = true;
    }

    const startIndex = currentQuestionIndex;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);

    for (let i = startIndex; i < endIndex; i++) {
        const q = questions[i];
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = `question-${i}`; // Unique ID for each question card

        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.innerHTML = `Q${i + 1}: ${q.question}`; // Use innerHTML for MathJax

        questionCard.appendChild(questionText);

        q.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'option-label';

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question-${i}`;
            radioInput.value = optionIndex; // Store the index as the value
            radioInput.id = `question-${i}-option-${optionIndex}`;

            // Set checked state if user has already answered
            if (userAnswers[i] !== undefined && userAnswers[i] === optionIndex) {
                radioInput.checked = true;
            }

            // Only allow changing answers if quiz is not submitted
            if (!quizSubmitted) {
                radioInput.addEventListener('change', (event) => {
                    userAnswers[i] = parseInt(event.target.value); // Parse the value back to an integer
                    questionStates[i].answered = true; // Mark as answered
                    updateMarkForReviewButtonText(); // Update button text if current question state changes
                    updatePaletteButtonStates(); // Update palette button immediately
                });
            } else {
                radioInput.disabled = true; // Disable if already submitted
            }


            const optionSpan = document.createElement('span');
            optionSpan.innerHTML = indexes[optionIndex]+" " + option; // Use innerHTML for MathJax

            optionLabel.appendChild(radioInput);
            optionLabel.appendChild(optionSpan);
            questionCard.appendChild(optionLabel);
        });
        examContainer.appendChild(questionCard);
    }

    // Update MathJax rendering for newly added questions
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([examContainer]);
    }
    updateNavigationButtons();
    updateMarkForReviewButtonText(); // Update button text for the newly loaded question
    updatePaletteButtonStates(); // Highlight current question in palette and update all states
}

// Function to update navigation button states
function updateNavigationButtons() {
    if (quizSubmitted) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        markForReviewBtn.disabled = true;
        markForReviewBtn.classList.add('opacity-50', 'cursor-not-allowed');
        return;
    }
    prevBtn.disabled = currentQuestionIndex === 0;
    if (prevBtn.disabled) {
        prevBtn.classList.add('text-gray-400', 'hover:text-gray-400', 'cursor-not-allowed');
        prevBtn.classList.remove('text-blue-500', 'hover:text-blue-700');
        prevBtn.title = 'You are at the first question';
    } else {
        prevBtn.classList.remove('text-gray-400', 'hover:text-gray-400', 'cursor-not-allowed');
        prevBtn.classList.add('text-blue-500', 'hover:text-blue-700'); // Revert to original styles
        prevBtn.title = 'Go to previous question';
    }
    nextBtn.disabled = currentQuestionIndex >= questions.length - questionsPerPage;
    if (nextBtn.disabled){
        nextBtn.classList.add('text-gray-400', 'hover:text-gray-400', 'cursor-not-allowed');
        nextBtn.classList.remove('text-blue-500', 'hover:text-blue-700');
        nextBtn.title = 'You are at the last question';
    }else{
        nextBtn.classList.remove('text-gray-400', 'hover:text-gray-400', 'cursor-not-allowed');
        nextBtn.classList.add('text-blue-500', 'hover:text-blue-700'); // Revert to original styles
        nextBtn.title = 'Go to next question';
    }
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    if (!quizSubmitted && currentQuestionIndex > 0) {
        currentQuestionIndex -= questionsPerPage;
        loadQuestions();
    }
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    if (!quizSubmitted && currentQuestionIndex < questions.length - questionsPerPage) {
        currentQuestionIndex += questionsPerPage;
        loadQuestions();
    }
});

// Event listener for Mark for Review button
markForReviewBtn.addEventListener('click', () => {
    if (!quizSubmitted) {
        questionStates[currentQuestionIndex].markedForReview = !questionStates[currentQuestionIndex].markedForReview;
        updateMarkForReviewButtonText(); // Update button text immediately
        updatePaletteButtonStates(); // Update palette button immediately
    }
});

// Function to update the text of the Mark for Review button
function updateMarkForReviewButtonText() {
    if (questionStates[currentQuestionIndex].markedForReview) {
        //markForReviewBtn.textContent = "Unmark for Review";
        markForReviewBtn.title = "Unmark for Review";
        markForReviewBtn.classList.add('text-purple-500', 'hover:text-purple-700');
        markForReviewBtn.classList.remove('text-yellow-500', 'hover:text-yellow-600');
    } else {
        //markForReviewBtn.textContent = "Mark for Review";
        markForReviewBtn.title = "Mark for Review";
        markForReviewBtn.classList.add('text-yellow-500', 'hover:text-yellow-600');
        markForReviewBtn.classList.remove('text-purple-500', 'hover:text-purple-600');
    }
}


// Function to show the modal
function showModal(modalElement) {
    modalElement.style.display = 'flex';
}

// Function to hide the modal
function hideModal(modalElement) {
    modalElement.style.display = 'none';
}

// Event listener for Submit Quiz button
submitQuizBtn.addEventListener('click', () => {
    if (!quizSubmitted) {
        showModal(confirmationModal);
    }
});

// Event listener for Confirm Submit button in modal
confirmSubmitBtn.addEventListener('click', () => {
    hideModal(confirmationModal);
    quizSubmitted = true;
    clearInterval(timerInterval); // Stop the timer
    calculateScore();
    displayResults();
    disableQuiz();
    // At this point, you have studentName, studentEmail, score, questions.length (full marks)
    // You can now send this data to a Google Sheet or another backend.
    console.log("Quiz Submitted!");
    console.log("Student Name:", studentName);
    console.log("Student Email:", studentEmail);
    console.log("Score:", scoreDisplay.textContent);
    console.log("Full Marks:", questions.length);
});

// Event listener for Cancel Submit button in modal
cancelSubmitBtn.addEventListener('click', () => {
    hideModal(confirmationModal);
});

// --- NEW FUNCTIONALITY START ---
// Function to calculate score, display results, and send data
function calculateScore() {
    const negativeMarking = negativePerQuestion; // Set the negative marking value here
    const positiveMarking = positivePerQuestion; //Marks per Question
    let score = 0;
    let noOfCorrect =0;
    let noOfWrong = 0;
    let noOfSkipped = questions.length;
    const fullMarks = questions.length * positiveMarking;
    questions.forEach((q, index) => {
        if (userAnswers[index] !== undefined) { // Check if an answer was provided
            if (userAnswers[index] === q.answer) {
                score+= positiveMarking;
                noOfCorrect+= 1;
                noOfSkipped-= 1;
            } else {
                score -= negativeMarking;
                noOfWrong+= 1;
                noOfSkipped-= 1;
            }
        }
    });

    const percentage = (score / fullMarks) * 100;
    const submissionTime = new Date().toLocaleString();

    // Send data to Google Sheet
    sendToGoogleSheet({
        name: studentName,
        email: studentEmail,
        subject: studentSubject,
        school: studentSchool,
        correct: noOfCorrect,
        wrong: noOfWrong,
        skipped: noOfSkipped,
        score: score,
        fullMarks: fullMarks,
        percentage: percentage.toFixed(2),
        timestamp: submissionTime
    });


    // Update the UI
    scoreDisplay.textContent = score;
    scoreDisplay.textContent = `Hi ${studentName}, You scored ${score} out of ${fullMarks}! Your percentage is ${percentage.toFixed(2)}%.`;

    if (score === fullMarks) {
        resultMessage.textContent = "Excellent! You got all the answers correct!";
        resultMessage.className = 'mt-2 text-green-600 font-bold';
    } else if (score >= fullMarks * 0.7) {
        resultMessage.textContent = "Great job! You passed with flying colors!";
        resultMessage.className = 'mt-2 text-blue-600 font-bold';
    } else if (score >= fullMarks * 0.5) {
        resultMessage.textContent = "Good effort! Keep practicing to improve.";
        resultMessage.className = 'mt-2 text-yellow-600 font-bold';
    } else {
        resultMessage.textContent = "You can do better! Review the topics and try again.";
        resultMessage.className = 'mt-2 text-red-600 font-bold';
    }

   // scoreCard.style.display = 'block'; // Show the score card
}

// Function to send data to the Google Apps Script
async function sendToGoogleSheet(data) {
    // ⚠️ IMPORTANT: Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' with your actual deployed script URL.
 
const gasURL = 'https://script.google.com/macros/s/AKfycbz0WIGL00LfMqZ4fwyRlKQoD6Lk0gb2jKX_czcAGKQqi-jzCNuiy1frLi2N7icxS9lL/exec';
    try {
        const response = await fetch(gasURL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log('Data sent successfully to Google Sheet.', response);
    } catch (error) {
        console.error('Error sending data to Google Sheet:', error);
    }
}
// --- NEW FUNCTIONALITY END ---

// Function to display correct/incorrect answers and explanations
function displayResults() {
    // Reload all questions to ensure correct/wrong answers are highlighted for all questions,
    // not just the currently displayed ones.
    scoreCard.style.display = 'block'; // Show the score card
    examContainer.innerHTML = ''; // Clear the current question view
    //Creating div and inside this a h2 containing All questions heading
    const resultHeadContainer = document.createElement('div');
    resultHeadContainer.className = 'result-head-div';
    const resultHeadText = document.createElement('h2');
    resultHeadText.className = 'result-head-h2';
    resultHeadText.innerHTML = 'Report of All Questions'
    resultHeadContainer.appendChild(resultHeadText);
    

    const allQuestionsContainer = document.createElement('div');
    allQuestionsContainer.id = 'all-questions-results'; // Temporary container
    allQuestionsContainer.appendChild(resultHeadContainer)
    questions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = `result-question-${index}`; // Unique ID for result view

        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.innerHTML = `Q${index + 1}: ${q.question}`;
        questionCard.appendChild(questionText);

        q.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'option-label';

            const optionSpan = document.createElement('span');
            optionSpan.innerHTML = indexes[optionIndex]+" "+option;

            optionLabel.appendChild(optionSpan);

            // Mark correct answer based on index
            if (optionIndex === q.answer) {
                optionLabel.classList.add('correct-answer');
                const correctTextSpan = document.createElement('span');
                correctTextSpan.className = 'correct-text ml-2';
                correctTextSpan.innerHTML = ' (Correct Answer)';
                optionLabel.appendChild(correctTextSpan);
            }

            // Mark user's wrong answer based on index
            if (userAnswers[index] !== undefined && userAnswers[index] === optionIndex && userAnswers[index] !== q.answer) {
                optionLabel.classList.add('wrong-answer');
                const wrongTextSpan = document.createElement('span');
                wrongTextSpan.className = 'wrong-text ml-2';
                wrongTextSpan.innerHTML = ' (Your Answer)';
                optionLabel.appendChild(wrongTextSpan);
            }

            questionCard.appendChild(optionLabel);
        });
        
        allQuestionsContainer.appendChild(questionCard);
    });

    //examContainer.innerHTML = ''; // Clear the current question view
    examContainer.appendChild(allQuestionsContainer); // Add all questions for review

    // Update MathJax rendering for newly added questions in result view
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([allQuestionsContainer]);
    }

    // Update palette buttons for results
    updatePaletteResultsState();
}

// Function to disable quiz interaction after submission
function disableQuiz() {
    submitQuizBtn.disabled = true;
    submitQuizBtn.classList.add('opacity-50', 'cursor-not-allowed');
    prevBtn.style.display = 'none'; // Hide navigation buttons after submission
    submitQuizBtn.style.display = 'none';
    clearSelectionBtn.style.display = 'none'; // Hide clear selection button
    questionPaletteToggleBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    markForReviewBtn.style.display = 'none'; // Hide mark for review button

    // Disable all radio buttons on the current question view (if still present)
    const currentQuestionRadios = examContainer.querySelectorAll('input[type="radio"]');
    currentQuestionRadios.forEach(radio => radio.disabled = true);

    // Also disable question palette interaction
    questionPaletteToggleBtn.disabled = true;
    questionPaletteToggleBtn.classList.add('opacity-50', 'cursor-not-allowed');
    closePaletteBtn.disabled = true;

    // Disable all buttons in the palette
    const paletteButtons = paletteGrid.querySelectorAll('.palette-question-btn');
    paletteButtons.forEach(btn => btn.disabled = true);
}


// --- Question Palette Functions ---

// Function to render all question numbers in the palette
function renderQuestionPalette() {
    if (!questions || questions.length === 0) {
        console.error("renderQuestionPalette called but 'questions' array is empty or not loaded.");
        return;
    }
    paletteGrid.innerHTML = ''; // Clear existing palette buttons
    questions.forEach((_, index) => {
        const qNumBtn = document.createElement('button');
        qNumBtn.className = 'palette-question-btn';
        qNumBtn.textContent = index + 1;
        qNumBtn.dataset.questionIndex = index; // Store index for navigation
        qNumBtn.addEventListener('click', () => {
            if (!quizSubmitted) {
                goToQuestion(index);
                toggleQuestionPalette(); // Close palette after navigating
            }
        });
        paletteGrid.appendChild(qNumBtn);
    });
    updatePaletteButtonStates(); // Set initial states
}

// Function to navigate to a specific question
function goToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestions();
}

// Function to toggle the visibility of the question palette
function toggleQuestionPalette() {
    questionPalette.classList.toggle('show');
    // Adjust the toggle button's position based on palette state
    if (questionPalette.classList.contains('show')) {
        questionPaletteToggleBtn.style.transform = 'translateX(100%)';
        questionPaletteToggleBtn.style.left = '16rem'; // Width of palette + some spacing
        questionPaletteToggleBtn.style.backgroundColor = '#ef4444'; // Red for "close"
    } else {
        questionPaletteToggleBtn.style.transform = 'translateX(0)';
        questionPaletteToggleBtn.style.left = '0';
        questionPaletteToggleBtn.style.backgroundColor = '#3b82f6'; // Blue for "open"
    }
}

// Function to handle PDF generation using the browser's print dialog
function generatePDF() {
    // The window.print() method opens the browser's print dialog.
    window.print();
}

// Event listener for the download button
if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', generatePDF);
} else {
    console.error("Download PDF button not found.");
}

// Update state of individual palette buttons (answered, current, marked for review)
function updatePaletteButtonStates() {
    if (!questions || questions.length === 0 || questionStates.length === 0) {
        console.warn("updatePaletteButtonStates called but quiz data/state is not ready.");
        return;
    }
    const paletteButtons = paletteGrid.querySelectorAll('.palette-question-btn');
    paletteButtons.forEach((btn, index) => {
        btn.classList.remove('answered', 'marked-for-review', 'current'); // Clean up all state classes
        btn.style.backgroundColor = ''; // Reset background to default from CSS
        btn.style.borderColor = ''; // Reset border to default from CSS
        btn.style.color = ''; // Reset color to default from CSS

        const state = questionStates[index];

        if (state.answered && state.markedForReview) {
            btn.classList.add('answered', 'marked-for-review'); // Both classes for specific styling
        } else if (state.answered) {
            btn.classList.add('answered');
        } else if (state.markedForReview) {
            btn.classList.add('marked-for-review');
        } else if (state.visited) {
            // No specific styling for visited but not answered/marked, falls to default grey
        } else {
            // Not visited, default grey from CSS (from style.css)
        }

        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        }
    });
}

// Update palette buttons for result display (correct/incorrect/not attempted)
function updatePaletteResultsState() {
    if (!questions || questions.length === 0 || questionStates.length === 0) {
        console.warn("updatePaletteResultsState called but quiz data/state is not ready.");
        return;
    }
    const paletteButtons = paletteGrid.querySelectorAll('.palette-question-btn');
    paletteButtons.forEach((btn, index) => {
        btn.classList.remove('current', 'answered', 'marked-for-review'); // Clear all previous states
        btn.style.backgroundColor = ''; // Reset to allow result classes to take over
        btn.style.borderColor = '';
        btn.style.color = '';

        btn.disabled = true; // Disable clicks on palette after submission

        if (userAnswers[index] === questions[index].answer) {
            btn.classList.add('result-correct'); // Green
        } else if (userAnswers[index] !== undefined) {
            btn.classList.add('result-wrong'); // Red
        } else {
            btn.classList.add('result-not-attempted'); // Grey
        }
    });
}


// Event listeners for palette toggle
if (questionPaletteToggleBtn) { // Check if element exists
    questionPaletteToggleBtn.addEventListener('click', toggleQuestionPalette);
} else {
    console.error("questionPaletteToggleBtn not found.");
}

if (closePaletteBtn) { // Check if element exists
    closePaletteBtn.addEventListener('click', toggleQuestionPalette);
} else {
    console.error("closePaletteBtn not found.");
}
