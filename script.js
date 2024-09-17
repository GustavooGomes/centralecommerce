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
