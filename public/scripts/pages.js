let accountAccess = "/src/views/login.html";
let loginButton = document.querySelector('#user-icon');

function redirect(url) {
    window.location.href = url;
}

loginButton.addEventListener("click", () => {
    redirect(accountAccess);
});

