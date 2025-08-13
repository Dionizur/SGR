document.addEventListener("DOMContentLoaded", () => {
    const showRegisterBtn = document.getElementById("showRegister");
    const showLoginBtn = document.getElementById("showLogin");
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const formTitle = document.getElementById("formTitle");

    showRegisterBtn.addEventListener("click", () => {
        formTitle.textContent = "Cadastro de Usuário";
        registerForm.classList.add("form-visible");
        registerForm.classList.remove("form-hidden");
        loginForm.classList.add("form-hidden");
        loginForm.classList.remove("form-visible");

        showRegisterBtn.classList.add("active");
        showLoginBtn.classList.remove("active");
    });

    showLoginBtn.addEventListener("click", () => {
        formTitle.textContent = "Login no Sistema";
        loginForm.classList.add("form-visible");
        loginForm.classList.remove("form-hidden");
        registerForm.classList.add("form-hidden");
        registerForm.classList.remove("form-visible");

        showLoginBtn.classList.add("active");
        showRegisterBtn.classList.remove("active");
    });

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("regUsername").value.trim();
        const password = document.getElementById("regPassword").value.trim();

        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        alert(data.message);
        if (res.ok) registerForm.reset();
    });

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("logUsername").value.trim();
        const password = document.getElementById("logPassword").value.trim();

        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        alert(data.message);

        if (res.ok) {
            // Redirecionar para painel
            // window.location.href = "painel.html";
        }
    });
});
