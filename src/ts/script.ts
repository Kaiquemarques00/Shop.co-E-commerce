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
  loadComponent("./components/presentation.html", "presentation");
  loadComponent("./components/new_arrivals.html", "new-arrivals");
  loadComponent("./components/top_selling.html", "top-selling");
  loadComponent("./components/reviews.html", "reviews");
  loadComponent("./components/browse.html", "browse");
  loadComponent("./components/footer.html", "footer");
};