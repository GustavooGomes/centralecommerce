// Ofuscação básica da senha
const encodedPassword = btoa('ecom2024'); // Substitua 'senhaSegura123' pela sua senha

function checkPassword() {
    const inputPassword = document.getElementById('password-input').value;
    if (btoa(inputPassword) === encodedPassword) {
        Swal.fire({
            title: 'Senha correta',
            text: 'Você será transferido para a tela de controle.',
            icon: 'success',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                const overlay = document.getElementById('password-overlay');
                overlay.style.transition = 'opacity 1s';
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    document.getElementById('main-content').style.display = 'block';
                }, 1000);
            }
        });
    } else {
        Swal.fire({
            title: 'Senha incorreta',
            text: 'Por favor, tente novamente.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

function navigateTo(page) {
    let pageTitle = '';
    let pageUrl = '';

    if (page === 'dashboards') {
        pageTitle = 'Visualizar dashboards E-Commerce';
        pageUrl = 'https://gustavoogomes.github.io/controleecom/';
    } else if (page === 'pedidos') {
        pageTitle = 'Consultar pedidos em Aberto';
        pageUrl = 'https://gustavoogomes.github.io/controlepedidos/';
    }

    Swal.fire({
        title: `Você deseja ir para a página de ${pageTitle}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Você será encaminhado em 5 segundos',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    window.location.href = pageUrl;
                }
            });
        }
    });
}
