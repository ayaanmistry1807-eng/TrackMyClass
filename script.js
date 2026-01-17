// ================================
// GLOBAL VARIABLES
// ================================
let selectedRole = "";

// ================================
// OPEN LOGIN POPUP
// ================================
function openLogin(role) {
    selectedRole = role;

    document.getElementById("popup").classList.add("show");
    document.getElementById("roleTitle").innerText = role + " Login";

    // clear inputs & error
    document.getElementById("loginId").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginError").innerText = "";
}

// ================================
// CLOSE LOGIN POPUP
// ================================
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

// ================================
// SHOW / HIDE PASSWORD
// ================================
function togglePassword() {
    const passInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// ================================
// HANDLE LOGIN (CONNECTED TO BACKEND)
// ================================
function handleLogin() {

    const loginId = document.getElementById("loginId").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("loginError");

    errorBox.innerText = "";

    if (loginId === "" || password === "") {
        errorBox.innerText = "Please enter ID and Password";
        return;
    }

    fetch("https://backend-yy19.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            role: selectedRole,
            id: loginId,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {

        if (data.success) {

            if (data.role === "Admin") {
                window.location.href = "admin.html";
            }
            else if (data.role === "Teacher") {
                window.location.href = "teacher.html";
            }
            else if (data.role === "Parent") {
                window.location.href = "parent.html";
            }
            else if (data.role === "Student") {
                window.location.href = "student.html";
            }

        } else {
            errorBox.innerText = "Invalid ID or Password ❌";
        }

    })
    .catch(err => {
        console.error(err);
        errorBox.innerText = "Server not reachable ❌ (wait & retry)";
    });
}


