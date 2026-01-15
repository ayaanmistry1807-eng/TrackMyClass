/* ===============================
   GLOBAL VARIABLE
================================ */
let selectedRole = "";

/* ===============================
   OPEN LOGIN POPUP
================================ */
function openLogin(role) {
    selectedRole = role; // store which card user clicked
    const popup = document.getElementById("popup");
    popup.classList.add("show");
    document.getElementById("loginTitle").innerText = role + " Login";
}

/* ===============================
   CLOSE LOGIN POPUP
================================ */
function closeLogin() {
    document.getElementById("popup").classList.remove("show");
}

/* ===============================
   TOGGLE PASSWORD VISIBILITY
================================ */
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

/* ===============================
   CLOSE POPUP WHEN CLICK OUTSIDE
================================ */
function outsideClick(event) {
    if (event.target.id === "popup") {
        closeLogin();
    }
}

/* ===============================
   FORGOT PASSWORD (TEMP)
================================ */
function forgotPassword() {
    alert("Password reset link will be sent to your registered email.");
}

/* ===============================
   HANDLE LOGIN (REDIRECT)
================================ */
function handleLogin() {

    // Later: validate email & password from backend

    if (selectedRole === "Admin") {
        window.location.href = "admin.html";
    } 
    else if (selectedRole === "Teacher") {
        window.location.href = "teacher.html";
    } 
    else if (selectedRole === "Parent") {
        window.location.href = "parent.html";
    } 
    else if (selectedRole === "Student") {
        window.location.href = "student.html";
    } 
    else {
        alert("Please select a role");
    }
}
