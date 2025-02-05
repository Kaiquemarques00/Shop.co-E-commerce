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
    loadComponent("./components/main.html", "main");
    loadComponent("./components/footer.html", "footer");
};
