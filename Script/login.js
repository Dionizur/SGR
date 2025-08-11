document.addEventListener("DOMContentLoaded", () => {
  const showRegisterBtn = document.getElementById("showRegister");
  const showLoginBtn = document.getElementById("showLogin");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const formTitle = document.getElementById("formTitle");

  function getUsuarios() {
      const data = localStorage.getItem("usuarios");
      console.log("localStorage usuarios raw:", data);
      return data ? JSON.parse(data) : [];
  }

  function setUsuarios(usuarios) {
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      console.log("Usuarios salvos:", usuarios);
  }

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

  registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("regUsername").value.trim();
      const password = document.getElementById("regPassword").value.trim();

      console.log("Tentando cadastrar:", username, password);

      if (!username || !password) {
          alert("Por favor, preencha todos os campos.");
          return;
      }

      let usuarios = getUsuarios();

      if (usuarios.find(u => u.username === username)) {
          alert("Usuário já existe!");
          return;
      }

      usuarios.push({ username, password });
      setUsuarios(usuarios);

      alert("Usuário cadastrado com sucesso!");
      registerForm.reset();
  });

  loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("logUsername").value.trim();
      const password = document.getElementById("logPassword").value.trim();

      console.log("Tentando login:", username, password);

      if (!username || !password) {
          alert("Por favor, preencha todos os campos.");
          return;
      }

      let usuarios = getUsuarios();
      let usuario = usuarios.find(u => u.username === username && u.password === password);

      if (usuario) {
          alert("Login realizado com sucesso!");
          // Aqui pode redirecionar para painel
      } else {
          alert("Usuário ou senha incorretos!");
      }

      loginForm.reset();
  });
});
