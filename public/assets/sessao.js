function salvarSessao(id, nome, email) {
    sessionStorage.setItem("ID_USUARIO",    id);
    sessionStorage.setItem("NOME_USUARIO",  nome);
    sessionStorage.setItem("EMAIL_USUARIO", email);

    localStorage.setItem("ID_USUARIO",    id);
    localStorage.setItem("NOME_USUARIO",  nome);
    localStorage.setItem("EMAIL_USUARIO", email);
}

function obterSessao() {
    let id    = sessionStorage.getItem("ID_USUARIO")    || localStorage.getItem("ID_USUARIO");
    let nome  = sessionStorage.getItem("NOME_USUARIO")  || localStorage.getItem("NOME_USUARIO");
    let email = sessionStorage.getItem("EMAIL_USUARIO") || localStorage.getItem("EMAIL_USUARIO");

    if (id && !sessionStorage.getItem("ID_USUARIO")) {
        sessionStorage.setItem("ID_USUARIO",    id);
        sessionStorage.setItem("NOME_USUARIO",  nome);
        sessionStorage.setItem("EMAIL_USUARIO", email);
    }

    return { id, nome, email };
}

function validarSessao() {
    let sessao = obterSessao();
    if (!sessao.id) {
        window.location = "login.html";
    }
    return sessao;
}

function sair() {
    sessionStorage.clear();
    localStorage.clear();
    window.location = "login.html";
}