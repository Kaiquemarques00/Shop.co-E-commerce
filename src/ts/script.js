var loadComponent = function (componentPath, elementId) {
    fetch(componentPath)
        .then(function (response) { return response.text(); })
        .then(function (html) {
        var element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    })
        .catch(function (err) {
        console.warn("Erro ao carregar o componente: ", err);
    });
};
window.onload = function () {
    loadComponent("./components/header.html", "header");
    loadComponent("./components/presentation.html", "presentation");
    loadComponent("./components/new_arrivals.html", "new-arrivals");
    loadComponent("./components/top_selling.html", "top-selling");
    loadComponent("./components/reviews.html", "reviews");
    loadComponent("./components/newsletter.html", "newsletter");
    loadComponent("./components/browse.html", "browse");
    loadComponent("./components/footer.html", "footer");
};
