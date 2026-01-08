function showRegister() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
}

function showLogin() {
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}

function goToWelcome() {
    window.location.href = "welcome.html";
}
