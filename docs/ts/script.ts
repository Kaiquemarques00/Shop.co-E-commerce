const loadComponent = (componentPath: string, elementId: string) => {
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
      }
    })
    .catch((err) => {
      console.warn("Erro ao carregar o componente: ", err);
    });
};

window.onload = () => {
  loadComponent("./components/header.html", "header");
  loadComponent("./components/main.html", "main");
  loadComponent("./components/footer.html", "footer");
};
