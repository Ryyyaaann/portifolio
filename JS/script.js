const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Opcional: remover a classe para animar toda vez que entra na tela
            entry.target.classList.remove('show');
        }
    });
});

// Seleciona todos os elementos que devem ser animados
const hiddenElements = document.querySelectorAll('.hidden');

// Observa cada um dos elementos selecionados
hiddenElements.forEach((el) => observer.observe(el));