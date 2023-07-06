window.onload = function () {

    buscaInformacoesTabela();

    buscaInformacoesRodada(14);
}

function buscaInformacoesTabela() {
    $.ajax({

        type: "GET",
        url: "https://api.api-futebol.com.br/v1/campeonatos/14/tabela",
        headers: { 'Authorization': 'Bearer test_7255889716ac0340867b5691a18535' },
        contentType: 'json',
        dataType: 'json',
        success: function (response) {
            //Se a solicitação for feita com sucesso, a resposta representará os dados
            populaTabela(response);
        },
        done: function (msg) {

        },
        error: function (msg) {

        }

    });
}

function populaTabela(response) {

    for (let i = 0; i < response.length; i++) {

        let resultado = response[i].variacao_posicao;
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
        logoTime.setAttribute("src", response[i].time.escudo); //
        logoTime.setAttribute("class", "imagemLogo");
        conteinerLogo.setAttribute("class", "imagemCentralizada");

        if (resultado >= 1) {

            resultadoIcon.setAttribute("class", "celula_tabela_classificacao_icon resultado_ganhou");
            resultadoIcon.setAttribute("src", "image/seta-para-cima.png");

        }
        else if (resultado <= -1) {

            resultadoIcon.setAttribute("class", "celula_tabela_classificacao_icon resultado_perdeu");
            resultadoIcon.setAttribute("src", "image/seta-para-baixo.png");
        }
        else {
            resultadoIcon.setAttribute("class", " celula_tabela_classificacao_icon resultado_empatou");
            resultadoIcon.setAttribute("src", "image/square.svg");
        }


        identificador.innerText = i + 1;
        nomeTime.innerText = response[i].time.nome_popular//
        pontuacao.innerText = response[i].variacao_posicao;
        logoTime.innerText = response[i].time.escudo; //


        tabela_classificacao.appendChild(linha);
        linha.appendChild(identificador);
        linha.appendChild(conteinerLogo);
        conteinerLogo.appendChild(logoTime);
        linha.appendChild(nomeTime);
        linha.appendChild(pontuacao);

        linha.appendChild(resultadoConteiner);
        resultadoConteiner.appendChild(resultadoIcon);
    }

    for (let i = 0; i < response.length; i++) {
        let linha = document.createElement("tr");
        let pontso = document.createElement("td");
        let jogos = document.createElement("td");
        let vitorias = document.createElement("td");
        let empates = document.createElement("td");
        let derrotas = document.createElement("td");
        let golsPro = document.createElement("td");
        let golsContra = document.createElement("td");
        let saldoGols = document.createElement("td");
        let aproveitamento = document.createElement("td");
        let ultimosJogos = document.createElement("td");

        let bola1 = document.createElement("span");
        let bola2 = document.createElement("span");
        let bola3 = document.createElement("span");
        let bola4 = document.createElement("span");
        let bola5 = document.createElement("span");
        let bolas = [bola1, bola2, bola3, bola4, bola5]

        pontso.setAttribute("class", "celula_pontos celula_pontos_negrito");
        jogos.setAttribute("class", "celula_pontos");
        vitorias.setAttribute("class", "celula_pontos");
        empates.setAttribute("class", "celula_pontos");
        derrotas.setAttribute("class", "celula_pontos");
        golsPro.setAttribute("class", "celula_pontos");
        golsContra.setAttribute("class", "celula_pontos");
        saldoGols.setAttribute("class", "celula_pontos");
        aproveitamento.setAttribute("class", "celula_pontos");
        ultimosJogos.setAttribute("class", "celula_pontos_bolinha");



        pontso.innerText = response[i].pontos; //
        jogos.innerText = response[i].jogos; //
        vitorias.innerText = response[i].vitorias; //
        empates.innerText = response[i].empates; //
        derrotas.innerText = response[i].derrotas; //
        golsPro.innerText = response[i].gols_pro; //
        golsContra.innerText = response[i].gols_contra; //
        saldoGols.innerText = response[i].saldo_gols; //
        aproveitamento.innerText = response[i].aproveitamento; //



        tabela_resultados.appendChild(linha);
        linha.appendChild(pontso);
        linha.appendChild(jogos);
        linha.appendChild(vitorias);
        linha.appendChild(empates);
        linha.appendChild(derrotas);
        linha.appendChild(golsPro);
        linha.appendChild(golsContra);
        linha.appendChild(saldoGols);
        linha.appendChild(aproveitamento);
        linha.appendChild(ultimosJogos);


        for (let j = 0; j < response.length; j++) {
            if (response[i].ultimos_jogos[j] === "v") {
                bolas[j].setAttribute("class", "bolinha_ultimos_jogos bolinha_ultimos_jogos_ganhou");  //
            }
            else if (response[i].ultimos_jogos[j] === "d") {
                bolas[j].setAttribute("class", "bolinha_ultimos_jogos bolinha_ultimos_jogos_perdeu"); //
            }
            else if (response[i].ultimos_jogos[j] === "e") {
                bolas[j].setAttribute("class", "bolinha_ultimos_jogos bolinha_ultimos_jogos_empatou"); //
            }
        }
        ultimosJogos.appendChild(bola1);
        ultimosJogos.appendChild(bola2);
        ultimosJogos.appendChild(bola3);
        ultimosJogos.appendChild(bola4);
        ultimosJogos.appendChild(bola5);





    }

}

function populaOutraTabela(response) {

    for (let i = 0; i < response.partidas.length; i++) {

        let lista = document.createElement("li");
        let jogosContainer = document.createElement("div");
        let nomeTimeEscritoMandante = document.createElement("p");
        let nomeTimeEscritoVisitante = document.createElement("p");
        let nomeTimeMandante = document.createElement("div");
        let nomeTimeVisitante = document.createElement("div");
        let logoTimeMandante = document.createElement("img");
        let logoTimeVisitante = document.createElement("img");
        let jogosConteinerTime = document.createElement("div");
        let jogosConteinerSegundoTime = document.createElement("div");
        let rodada = document.getElementById("rodada");
        let iconX = document.createElement("img");
        let dadosJogos = document.createElement("div");
        let dataJogos = document.createElement("div");
        let localJogos = document.createElement("div");
        let horaJogos = document.createElement("div");
        let placarTimeMandante = document.createElement("span");
        let placarTimeVisitante = document.createElement("span");
        let resultadoJogo = document.createElement("div");


        jogosConteinerTime.setAttribute("class", "jogos_conteiner_times");
        jogosConteinerSegundoTime.setAttribute("class", "jogos_conteiner_times");
        nomeTimeMandante.setAttribute("class", "nome_times");
        nomeTimeVisitante.setAttribute("class", "nome_times");
        logoTimeMandante.setAttribute("class", "logo_time");
        logoTimeVisitante.setAttribute("class", "logo_time");
        logoTimeMandante.setAttribute("src", response.partidas[i].time_mandante.escudo); //
        logoTimeVisitante.setAttribute("src", response.partidas[i].time_visitante.escudo); //
        iconX.setAttribute("src", "image/icondeX.png");
        jogosContainer.setAttribute("class", "jogos_conteiner");
        dadosJogos.setAttribute("class", "data_jogo");
        dataJogos.setAttribute("class", "data_jogo_data");
        horaJogos.setAttribute("class", "data_jogo_data");
        placarTimeMandante.setAttribute("class", "placarTime");
        placarTimeVisitante.setAttribute("class", "placarTime");
        resultadoJogo.setAttribute("class", "resultadoJogo");



        nomeTimeEscritoMandante.innerText = response.partidas[i].time_mandante.sigla;
        nomeTimeEscritoVisitante.innerText = response.partidas[i].time_visitante.sigla;
        dataJogos.innerText = response.partidas[i].data_realizacao;
        localJogos.innerText = response.partidas[i].estadio.nome_popular;
        horaJogos.innerText = response.partidas[i].hora_realizacao;
        rodada.innerText = response.nome;
        placarTimeMandante.innerText = response.partidas[i].placar_mandante;
        placarTimeVisitante.innerText = response.partidas[i].placar_visitante;
        resultadoJogo.innerText = "veja como foi";


        if (response.partidas[i].status === "finalizado") {
            lista_jogos.appendChild(lista);

            lista.appendChild(dadosJogos);
            dadosJogos.appendChild(dataJogos);
            dadosJogos.appendChild(localJogos);
            dadosJogos.appendChild(horaJogos);

            lista.appendChild(jogosContainer);
            jogosContainer.appendChild(jogosConteinerTime);

            jogosConteinerTime.appendChild(nomeTimeMandante);
            nomeTimeMandante.appendChild(nomeTimeEscritoMandante);
            nomeTimeMandante.appendChild(logoTimeMandante);
            jogosConteinerTime.appendChild(placarTimeMandante);//

            jogosConteinerTime.appendChild(iconX);

            jogosConteinerTime.appendChild(placarTimeVisitante);//
            jogosConteinerTime.appendChild(nomeTimeVisitante);
            nomeTimeVisitante.appendChild(logoTimeVisitante);
            nomeTimeVisitante.appendChild(nomeTimeEscritoVisitante);
            jogosContainer.append(resultadoJogo);//
        }

        else {
            lista_jogos.appendChild(lista);

            lista.appendChild(dadosJogos);
            dadosJogos.appendChild(dataJogos);
            dadosJogos.appendChild(localJogos);
            dadosJogos.appendChild(horaJogos);

            lista.appendChild(jogosContainer);
            jogosContainer.appendChild(jogosConteinerTime);

            jogosConteinerTime.appendChild(nomeTimeMandante);
            nomeTimeMandante.appendChild(nomeTimeEscritoMandante);
            nomeTimeMandante.appendChild(logoTimeMandante);


            jogosConteinerTime.appendChild(iconX);

            jogosConteinerTime.appendChild(nomeTimeVisitante);
            nomeTimeVisitante.appendChild(logoTimeVisitante);
            nomeTimeVisitante.appendChild(nomeTimeEscritoVisitante);
        }

    }
}



function previewTable() {

    buscaInformacoesRodada();
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

function buscaInformacoesRodada() {
    $.ajax({

        type: "GET",
        url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas",
        headers: { 'Authorization': 'Bearer live_1e33b39956b21096d4a2f15c456e00' },
        contentType: 'json',
        dataType: 'json',
        success: function (response) {
            //Se a solicitação for feita com sucesso, a resposta representará os dados
            tabela(response);
        },
        done: function (msg) {

        },
        error: function (msg) {

        }
    });



    function tabela(response) {
        for (let i = 0; i <= response.length; i++) {


            if (response[i].status === "agendada") {
                populaOutraTabela(response);
            }



            else if (response[i].status === "encerrada") {

                $.ajax({

                    type: "GET",
                    url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas" + response[i].rodada,
                    headers: { 'Authorization': 'Bearer live_1e33b39956b21096d4a2f15c456e00' },
                    contentType: 'json',
                    dataType: 'json',
                    success: function (response) {
                        //Se a solicitação for feita com sucesso, a resposta representará os dados
                        populaOutraTabela(response);
                    },
                    done: function (msg) {

                    },
                    error: function (msg) {

                    }
                });

            }



            

            else if (response[i].status === "andamento") {
                populaOutraTabela(response);

            }
        }

    }
}
