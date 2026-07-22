function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function isLoggedIn() {
    return localStorage.getItem("currentUser") !== null;
}

function registerUser(name, email, password) {
    let users = getUsers();

    let exists = users.find(u => u.email === email);
    if (exists) {
        return { status: false, message: "User already exists" };
    }

    let newUser = {
        id: Date.now(),
        name,
        email,
        password
    };

    users.push(newUser);
    saveUsers(users);

    return { status: true, message: "Registered successfully" };
}

function loginUser(email, password) {

    const users = getUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return {
            status: false,
            message: "Invalid Email or Password"
        };
    }

    setCurrentUser(user);

    const redirect =
        localStorage.getItem("redirectAfterLogin");

    if (redirect) {
        localStorage.removeItem(
            "redirectAfterLogin"
        );

        window.location.href = redirect;
    } else {
        window.location.href = "index.html";
    }

    return {
        status: true,
        message: "Login successful"
    };
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}