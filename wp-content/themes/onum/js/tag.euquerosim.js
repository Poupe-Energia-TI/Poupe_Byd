// Tag Pagina EuQueroSim
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PS8D8M5');


function submitForm(e) {
    e.preventDefault();

    var form = document.getElementById('news-mail');
    // Aqui você pode adicionar lógica adicional para processar o formulário
    // Por exemplo, você pode enviar os dados do formulário para o servidor usando XMLHttpRequest ou fetch API.

    // Aqui está um exemplo simples de como você pode exibir os dados do formulário no console.
    var email = form.querySelector('input[type="email"]').value;
    console.log("E-mail digitado: ", email);
    $('#mail').val('');
    alert("Email cadastrado com sucesso.");
}