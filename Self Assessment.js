// Initialize variables
let isRegistering = true;

// Toggle between registration and login
function toggleAuth() {
    isRegistering = !isRegistering;
    document.getElementById("auth-header").innerText = isRegistering ? "Register" : "Login";
    document.getElementById("auth-button").innerText = isRegistering ? "Register" : "Login";
    document.getElementById("auth-toggle").innerHTML = isRegistering ? 
        'Already have an account? <a href="#" onclick="toggleAuth()">Login here</a>' : 
        'Don\'t have an account? <a href="#" onclick="toggleAuth()">Register here</a>';
}

// Register or login the user
function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (isRegistering) {
        // Registration process
        if (localStorage.getItem(username)) {
            alert("Username already exists. Please choose a different one.");
        } else {
            localStorage.setItem(username, password);
            alert("Registration successful! Please log in.");
            toggleAuth();
        }
    } else {
        // Login process
        const storedPassword = localStorage.getItem(username);
        if (password === storedPassword) {
            alert("Login successful!");
            showAssessment();
        } else {
            alert("Invalid username or password.");
        }
    }
}

// Show the self-assessment form
function showAssessment() {
    document.getElementById("auth-container").classList.add("hidden");
    document.getElementById("assessment-container").classList.remove("hidden");
    loadQuestions();
}

// Load the self-assessment questions
function loadQuestions() {
    const questions = [
        "I often feel anxious or on edge.",
        "I find it hard to focus on daily tasks.",
        "I often feel overwhelmed with responsibilities.",
        "I have trouble sleeping or staying asleep.",
        "I frequently feel sad or down without a clear reason.",
        "I feel disconnected from friends and family.",
        "I have lost interest in activities I used to enjoy.",
        "I struggle with feelings of hopelessness.",
        "I find it hard to control my worries or fears.",
        "I often feel physically fatigued without physical exertion."
    ];

    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = "";

    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p>${index + 1}. ${question}</p>
            <input type="radio" name="q${index + 1}" value="1"> Never
            <input type="radio" name="q${index + 1}" value="2"> Rarely
            <input type="radio" name="q${index + 1}" value="3"> Sometimes
            <input type="radio" name="q${index + 1}" value="4"> Often
            <input type="radio" name="q${index + 1}" value="5"> Always
        `;
        questionsContainer.appendChild(questionElement);
    });
}

// Calculate and display the results
function calculateResults() {
    let totalScore = 0;
    for (let i = 1; i <= 10; i++) {
        const response = document.querySelector(`input[name="q${i}"]:checked`);
        if (!response) {
            alert("Please answer all questions.");
            return;
        }
        totalScore += parseInt(response.value);
    }

    const results = document.getElementById("results");
    if (totalScore <= 20) {
        results.innerHTML = "Your stress levels are low. Keep maintaining healthy habits. Visit our <a href='#'>resources page</a> for more well-being tips.";
    } else if (totalScore <= 35) {
        results.innerHTML = "Your stress levels are moderate. Consider exploring our <a href='#'>resources page</a> for helpful support.";
    } else {
        results.innerHTML = "Your stress levels are high. We recommend visiting our <a href='#'>resources page</a> for assistance and further help.";
    }
}
