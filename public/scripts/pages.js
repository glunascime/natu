let accountAccess = "/src/views/login.html";
let loginButton = document.querySelector('#user-icon');

function redirect(url) {
    window.location.href = url;
}

loginButton.addEventListener("click", () => {
    redirect(accountAccess);
});



window.onload = function() {
    let componentBtn = document.getElementById('component');
    let useTipsBtn = document.getElementById('useTips');
    let component = document.getElementById('componentContent');
    let useTips = document.getElementById('useTipsContent');
    

    componentBtn.addEventListener("click", () => {
        componentBtn.classList.add("active");
        component.classList.remove("hide");

        useTipsBtn.classList.remove("active");
        useTips.classList.add("hide");
    });

    useTipsBtn.addEventListener("click", () => {
        useTipsBtn.classList.add("active");
        useTips.classList.remove("hide");

        componentBtn.classList.remove("active");
        component.classList.add("hide");
    });

    cartOnLoad();

}

