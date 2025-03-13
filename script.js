document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('visible'); // Adiciona a classe 'visible' a todas as seções
    });
});

// Efeito de mudança de cor no header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efeito de onda no botão do hero
const heroBtn = document.querySelector('.hero .btn');
heroBtn.addEventListener('click', () => {
    heroBtn.classList.add('wave');
    setTimeout(() => {
        heroBtn.classList.remove('wave');
    }, 1000);
});

// Envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Alterna o menu e o overlay ao clicar no botão
    menuToggle.addEventListener('click', () => {
        const isActive = menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('#menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuOverlay.classList.remove('active');
        });
    });

    // Fecha o menu ao clicar no overlay
    menuOverlay.addEventListener('click', () => {
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});