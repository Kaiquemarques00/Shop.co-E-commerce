/* 
Tive que adicionar uma função callback ao adicionar um elemento, pois ao fazer a validação
eu tenho que esperar a seção que contem o formulario de envio carregar para acessar os elementos.
*/
const loadComponent = (
  componentPath: string,
  elementId: string,
  callback?: () => void
) => {
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
        if (callback) callback();
      }
    })
    .catch((err) => {
      console.warn("Error loading component: ", err);
    });
};

// Função de inicialização da validação do formulário.
const initializeFormValidation = () => {
  const formEmail = document.getElementById(
    "formEmail"
  ) as HTMLFormElement | null;
  const inputEmail = document.getElementById(
    "inputEmail"
  ) as HTMLInputElement | null;

  if (!formEmail || !inputEmail) {
    console.warn("Email form or input not found!");
    return;
  }

  const message = document.createElement("p");
  message.style.marginTop = "10px";
  message.style.opacity = "0";
  message.style.transition = "opacity 0.5s ease-in-out";
  formEmail.appendChild(message);

  function isValidEmail(email: string): boolean {
    // Regex stackoverflow - 1 validação - pelo menos 1 caractere e sem espaço ou @.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Função test usada para testar se uma expressão regular é contida em uma string.
    return emailRegex.test(email);
  }

  formEmail.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const email = inputEmail.value.trim();

    if (isValidEmail(email)) {
      message.textContent = "✔ Valid email! You have successfully subscribed.";
      message.style.color = "green";
    } else {
      message.textContent =
        "✖ Invalid email. Please enter a correct email address.";
      message.style.color = "red";
    }

    message.style.opacity = "1";

    setTimeout(() => {
      message.style.opacity = "0";
      setTimeout(() => {
        message.textContent = "";
      }, 100);
    }, 3000);
  });
};

// Carrega os componentes e só executa a validação depois que o footer for carregado.
window.onload = () => {
  loadComponent("./components/header.html", "header");
  loadComponent("./components/presentation.html", "presentation");
  loadComponent("./components/new_arrivals.html", "new-arrivals");
  loadComponent("./components/top_selling.html", "top-selling");
  loadComponent("./components/reviews.html", "reviews");
  loadComponent("./components/browse.html", "browse");
  loadComponent("./components/footer.html", "footer", initializeFormValidation);
};