let ativado = false;

function menu() {

    if (ativado === false) {
        ativado = true;
        abrir_menu();
    }
    else {
        ativado = false;
        fehecar_menu();
    }
}

function abrir_menu() {
    document.getElementById("show_menu").style.width = "250px";
    document.getElementById("fundo").classList.add("show_fundo");
}

function fehecar_menu() {
    document.getElementById("show_menu").style.width = "0px";
    document.getElementById("fundo").classList.remove("show_fundo");
}


 

function regulamento(){
    document.getElementById("regulamento").classList.add("conteiner_regulamento_exibido");
}