window.onload = function () {

    let names = ["botafogo", "Flamengo", "bahia", "Vasco", "coritiba", "Corinthians"];
    let logos = ["https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg", "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg", "https://s.sde.globo.com/media/organizations/2018/03/11/bahia.svg", "https://s.sde.globo.com/media/organizations/2021/09/04/vasco_SVG.svg", "https://s.sde.globo.com/media/organizations/2018/03/11/coritiba.svg", "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg"];
    let dataJogos = ["SÁB 13/05/2023","SÁB 13/05/2023","SÁB 13/05/2023"];
    let localJogos = ["ITAIPAVA ARENA FONTE NOVA","ITAIPAVA ARENA FONTE NOVA","ITAIPAVA ARENA FONTE NOVA"];
    let horaJogos = ["16:00","16:00","16:00"];
    const times = {
        name: names,
        logo: logos,
        data : dataJogos,
        hora : horaJogos,
        local : localJogos
    }

    const timesDados = []
    timesDados[0] = {
        p: gerarNumeroAleatorio(),
        j: gerarNumeroAleatorio(),
        v: gerarNumeroAleatorio(),
        e: gerarNumeroAleatorio(),
        d: gerarNumeroAleatorio(),
        gp: gerarNumeroAleatorio(),
        gc: gerarNumeroAleatorio(),
        sg: gerarNumeroAleatorio(),
        porcentagem: gerarNumeroAleatorio(),
        ultimosJogos: [gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres()],
    }
    timesDados[1] = {
        p: gerarNumeroAleatorio(),
        j: gerarNumeroAleatorio(),
        v: gerarNumeroAleatorio(),
        e: gerarNumeroAleatorio(),
        d: gerarNumeroAleatorio(),
        gp: gerarNumeroAleatorio(),
        gc: gerarNumeroAleatorio(),
        sg: gerarNumeroAleatorio(),
        porcentagem: gerarNumeroAleatorio(),
        ultimosJogos: [gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres()],
    }
    timesDados[2] = {
        p: gerarNumeroAleatorio(),
        j: gerarNumeroAleatorio(),
        v: gerarNumeroAleatorio(),
        e: gerarNumeroAleatorio(),
        d: gerarNumeroAleatorio(),
        gp: gerarNumeroAleatorio(),
        gc: gerarNumeroAleatorio(),
        sg: gerarNumeroAleatorio(),
        porcentagem: gerarNumeroAleatorio(),
        ultimosJogos: [gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres()],
    }
    timesDados[3] = {
        p: gerarNumeroAleatorio(),
        j: gerarNumeroAleatorio(),
        v: gerarNumeroAleatorio(),
        e: gerarNumeroAleatorio(),
        d: gerarNumeroAleatorio(),
        gp: gerarNumeroAleatorio(),
        gc: gerarNumeroAleatorio(),
        sg: gerarNumeroAleatorio(),
        porcentagem: gerarNumeroAleatorio(),
        ultimosJogos: [gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres()],
    }
    timesDados[4] = {
        p: gerarNumeroAleatorio(),
        j: gerarNumeroAleatorio(),
        v: gerarNumeroAleatorio(),
        e: gerarNumeroAleatorio(),
        d: gerarNumeroAleatorio(),
        gp: gerarNumeroAleatorio(),
        gc: gerarNumeroAleatorio(),
        sg: gerarNumeroAleatorio(),
        porcentagem: gerarNumeroAleatorio(),
        ultimosJogos: [gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres()],
    }
    timesDados[5] = {
        p: gerarNumeroAleatorio(),
        j: gerarNumeroAleatorio(),
        v: gerarNumeroAleatorio(),
        e: gerarNumeroAleatorio(),
        d: gerarNumeroAleatorio(),
        gp: gerarNumeroAleatorio(),
        gc: gerarNumeroAleatorio(),
        sg: gerarNumeroAleatorio(),
        porcentagem: gerarNumeroAleatorio(),
        ultimosJogos: [gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres(), gerarNumeroAleatorioDeUmATres()],
    }



    for (let i = 0; i <= 5; i++) {

        let resultado = gerarNumeroAleatorioDeUmATres();
        let linha = document.createElement("tr");
        let nomeTime = document.createElement("td");
        let logoTime = document.createElement("img");
        let pontuacao = document.createElement("td");
        let identificador = document.createElement("td");
        let conteinerLogo = document.createElement("td");
        let resultadoConteiner = document.createElement("td");
        let resultadoIcon = document.createElement("img");

        identificador.setAttribute("class", "celula_tabela_classificacao_numero_azul");
        nomeTime.setAttribute("class", "celula_tabela_classificacao_time");
        pontuacao.setAttribute("class", "celula_tabela_classificacao_pontuacao");
        logoTime.setAttribute("src", times.logo[i]);
        logoTime.setAttribute("class", "imagemLogo");
        conteinerLogo.setAttribute("class", "imagemCentralizada");

        if (resultado === 1) {

            resultadoIcon.setAttribute("class", "celula_tabela_classificacao_icon resultado_ganhou");
            resultadoIcon.setAttribute("src", "image/seta-para-cima.png");

        }
        else if (resultado === 2) {

            resultadoIcon.setAttribute("class", "celula_tabela_classificacao_icon resultado_perdeu");
            resultadoIcon.setAttribute("src", "image/seta-para-baixo.png");
        }
        else {
            resultadoIcon.setAttribute("class", " celula_tabela_classificacao_icon resultado_empatou");
            resultadoIcon.setAttribute("src", "image/square.svg");
        }


        identificador.innerText = i + 1;
        nomeTime.innerText = times.name[i];
        pontuacao.innerText = "0";
        logoTime.innerText = times.logo[i];


        tabela_classificacao.appendChild(linha);
        linha.appendChild(identificador);
        linha.appendChild(nomeTime);
        linha.appendChild(pontuacao);
        linha.appendChild(conteinerLogo);
        conteinerLogo.appendChild(logoTime);
        linha.appendChild(resultadoConteiner);
        resultadoConteiner.appendChild(resultadoIcon);
    }

    for (let i = 0; i <= 5; i++) {
        let linha = document.createElement("tr");
        let P = document.createElement("td");
        let J = document.createElement("td");
        let V = document.createElement("td");
        let E = document.createElement("td");
        let D = document.createElement("td");
        let GP = document.createElement("td");
        let GC = document.createElement("td");
        let SG = document.createElement("td");
        let porcentagem = document.createElement("td");
        let ultimosJogos = document.createElement("td");

        let bola1 = document.createElement("span");
        let bola2 = document.createElement("span");
        let bola3 = document.createElement("span");
        let bola4 = document.createElement("span");
        let bola5 = document.createElement("span");
        let bolas = [bola1, bola2, bola3, bola4, bola5]

        P.setAttribute("class", "celula_pontos celula_pontos_negrito");
        J.setAttribute("class", "celula_pontos");
        V.setAttribute("class", "celula_pontos");
        E.setAttribute("class", "celula_pontos");
        D.setAttribute("class", "celula_pontos");
        GP.setAttribute("class", "celula_pontos");
        GC.setAttribute("class", "celula_pontos");
        SG.setAttribute("class", "celula_pontos");
        porcentagem.setAttribute("class", "celula_pontos");
        ultimosJogos.setAttribute("class", "celula_pontos_bolinha")





        P.innerText = timesDados[i].p;
        J.innerText = timesDados[i].j;
        V.innerText = timesDados[i].v;
        E.innerText = timesDados[i].e;
        D.innerText = timesDados[i].d;
        GP.innerText = timesDados[i].gp;
        GC.innerText = timesDados[i].gc;
        SG.innerText = timesDados[i].sg;
        porcentagem.innerText = timesDados[i].porcentagem;



        tabela_resultados.appendChild(linha);
        linha.appendChild(P);
        linha.appendChild(J);
        linha.appendChild(V);
        linha.appendChild(E);
        linha.appendChild(D);
        linha.appendChild(GP);
        linha.appendChild(GC);
        linha.appendChild(SG);
        linha.appendChild(porcentagem);
        linha.appendChild(ultimosJogos);


        for (let j = 0; j < 5; j++) {
            if (timesDados[i].ultimosJogos[j] == 1) {
                bolas[j].setAttribute("class", "bolinha_ultimos_jogos bolinha_ultimos_jogos_ganhou");
            }
            else if (timesDados[i].ultimosJogos[j] == 2) {
                bolas[j].setAttribute("class", "bolinha_ultimos_jogos bolinha_ultimos_jogos_perdeu");
            }
            else {
                bolas[j].setAttribute("class", "bolinha_ultimos_jogos bolinha_ultimos_jogos_empatou");
            }
        }
        ultimosJogos.appendChild(bola1);
        ultimosJogos.appendChild(bola2);
        ultimosJogos.appendChild(bola3);
        ultimosJogos.appendChild(bola4);
        ultimosJogos.appendChild(bola5);
    }


    for (let i = 0; i < 3; i++) {
        let lista = document.createElement("li");
        let jogosContainer = document.createElement("div");
        let nomeTimeEscrito = document.createElement("p");
        let nomeTimeEscrito2 = document.createElement("p");
        let nomeTime = document.createElement("div");
        let nomeTime2 = document.createElement("div");
        let logoTime = document.createElement("img");
        let logoTime2 = document.createElement("img");
        let jogosConteinerTime = document.createElement("div");
        let jogosConteinerSegundoTime = document.createElement("div");
        let iconX = document.createElement("img");
        let dadosJogos = document.createElement("div");
        let dataJogos = document.createElement("div");
        let localJogos = document.createElement("div");
        let horaJogos = document.createElement("div");


        jogosConteinerTime.setAttribute("class", "jogos_conteiner_times");
        jogosConteinerSegundoTime.setAttribute("class", "jogos_conteiner_times");
        nomeTime.setAttribute("class", "nome_times");
        nomeTime2.setAttribute("class", "nome_times");
        logoTime.setAttribute("class", "logo_time");
        logoTime2.setAttribute("class", "logo_time");
        logoTime.setAttribute("src", times.logo[i]);
        logoTime2.setAttribute("src", times.logo[i]);
        iconX.setAttribute("src", "image/icondeX.png");
        jogosContainer.setAttribute("class", "jogos_conteiner");
        dadosJogos.setAttribute("class","data_jogo");
        dataJogos.setAttribute("class","data_jogo_data");
        horaJogos.setAttribute("class","data_jogo_data");


        nomeTimeEscrito.innerText = times.name[i];
        nomeTimeEscrito2.innerText = times.name[i];
        dataJogos.innerText = times.data[i];
        localJogos.innerText = times.local[i];
        horaJogos.innerText = times.hora[i];


        lista_jogos.appendChild(lista);

        lista.appendChild(dadosJogos);
        dadosJogos.appendChild(dataJogos);
        dadosJogos.appendChild(localJogos);
        dadosJogos.appendChild(horaJogos);

        lista.appendChild(jogosContainer);
        jogosContainer.appendChild(jogosConteinerTime);

        jogosConteinerTime.appendChild(nomeTime);
        nomeTime.appendChild(nomeTimeEscrito);
        nomeTime.appendChild(logoTime);

        jogosConteinerTime.appendChild(iconX);

        jogosConteinerTime.appendChild(nomeTime2);
        nomeTime2.appendChild(logoTime2);
        nomeTime2.appendChild(nomeTimeEscrito2);




    }
}



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

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function gerarNumeroAleatorioDeUmATres() {
    return Math.floor(Math.random() * 3) + 1;
}