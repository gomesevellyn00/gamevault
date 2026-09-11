const jogosBase = [
    {
        id: 1,
        nome: "Blair Witch",
        genero: "Terror",
        ano: 2019,
        capa: "blair-witch.png",
        icone: "🌲",
        descricao: "Terror psicológico ambientado em uma floresta sombria e perturbadora."
    },
    {
        id: 2,
        nome: "LIMBO",
        genero: "Puzzle",
        ano: 2010,
        capa: "limbo.png",
        icone: "🌑",
        descricao: "Uma aventura sombria cheia de puzzles, perigos e mistérios."
    },
    {
        id: 3,
        nome: "Cult of the Lamb",
        genero: "Aventura",
        ano: 2022,
        capa: "cult-of-the-lamb.png",
        icone: "🐑",
        descricao: "Construa seu culto, explore regiões perigosas e enfrente inimigos."
    },
    {
        id: 4,
        nome: "Stardew Valley",
        genero: "Simulação",
        ano: 2016,
        capa: "stardew-valley.png",
        icone: "🌱",
        descricao: "Cuide da sua fazenda, conheça moradores e construa uma nova vida."
    },
    {
        id: 5,
        nome: "Escape the Backrooms",
        genero: "Terror",
        ano: 2022,
        capa: "escape-the-backrooms.png",
        icone: "🚪",
        descricao: "Explore níveis perturbadores das Backrooms enquanto tenta sobreviver."
    },
    {
        id: 6,
        nome: "The Room",
        genero: "Puzzle",
        ano: 2012,
        capa: "the-room.png",
        icone: "🔐",
        descricao: "Resolva mecanismos, caixas misteriosas e enigmas complexos."
    },
    {
        id: 7,
        nome: "Luto",
        genero: "Terror",
        ano: 2025,
        capa: "luto.png",
        icone: "🏚️",
        descricao: "Terror psicológico focado em perda, medo e ambientes perturbadores."
    },
    {
        id: 8,
        nome: "The Witcher 3",
        genero: "RPG",
        ano: 2015,
        capa: "the-witcher-3.png",
        icone: "⚔️",
        descricao: "RPG de fantasia com exploração, escolhas e uma enorme história."
    },
    {
        id: 9,
        nome: "Outlast",
        genero: "Terror",
        ano: 2013,
        capa: "outlast.png",
        icone: "📹",
        descricao: "Terror de sobrevivência onde fugir e se esconder são suas principais defesas."
    },
    {
        id: 10,
        nome: "Mixtape",
        genero: "Aventura",
        ano: 2026,
        capa: "mixtape.png",
        icone: "🎧",
        descricao: "Uma aventura narrativa marcada por juventude, amizade, memórias e música."
    },
    {
        id: 11,
        nome: "Welcome to the Game",
        genero: "Terror",
        ano: "Série",
        capa: "welcome-to-the-game.png",
        icone: "💻",
        descricao: "Explore os cantos mais obscuros da internet enquanto tenta sobreviver."
    },
    {
        id: 12,
        nome: "Demonologist",
        genero: "Terror",
        ano: 2023,
        capa: "demonologist.png",
        icone: "👻",
        descricao: "Investigação paranormal em locais assombrados e cheios de entidades."
    },
    {
        id: 13,
        nome: "Call of Duty",
        genero: "FPS",
        ano: "Série",
        capa: "call-of-duty.png",
        icone: "🔫",
        descricao: "Franquia de tiro em primeira pessoa com campanhas e modos multiplayer."
    },
    {
        id: 14,
        nome: "To the Moon",
        genero: "Aventura",
        ano: "Série",
        capa: "to-the-moon.png",
        icone: "🌙",
        descricao: "Uma história emocional envolvendo memórias, desejos e escolhas."
    },
    {
        id: 15,
        nome: "Dispatch",
        genero: "Aventura",
        ano: 2025,
        capa: "dispatch.png",
        icone: "📞",
        descricao: "Aventura narrativa baseada em personagens, escolhas e decisões."
    },
    {
        id: 16,
        nome: "Left 4 Dead 2",
        genero: "FPS",
        ano: 2009,
        capa: "left-4-dead-2.png",
        icone: "🧟",
        descricao: "Tiro cooperativo focado em sobrevivência contra enormes hordas de infectados."
    },
    {
        id: 17,
        nome: "Metro",
        genero: "FPS",
        ano: "Série",
        capa: "metro.png",
        icone: "☢️",
        descricao: "Sobrevivência e exploração em um mundo pós-apocalíptico subterrâneo."
    },
    {
        id: 18,
        nome: "Sally Face",
        genero: "Aventura",
        ano: 2016,
        capa: "sally-face.png",
        icone: "🎭",
        descricao: "Aventura sombria cheia de mistérios e acontecimentos sobrenaturais."
    },
    {
        id: 19,
        nome: "Papers, Please",
        genero: "Simulação",
        ano: 2013,
        capa: "papers-please.png",
        icone: "🛂",
        descricao: "Simulação de controle de fronteira baseada em documentos e decisões morais."
    },
    {
        id: 20,
        nome: "Photomaly",
        genero: "Terror",
        ano: "—",
        capa: "photomaly.png",
        icone: "📷",
        descricao: "Terror envolvendo fotografia, observação e acontecimentos estranhos."
    },
    {
        id: 21,
        nome: "Life is Strange",
        genero: "Aventura",
        ano: "Série",
        capa: "life-is-strange.png",
        icone: "🦋",
        descricao: "Aventura narrativa baseada em escolhas, relacionamentos e consequências."
    },
    {
        id: 22,
        nome: "Road 96",
        genero: "Aventura",
        ano: 2021,
        capa: "road-96.png",
        icone: "🛣️",
        descricao: "Uma viagem narrativa onde encontros e decisões transformam cada jornada."
    },
    {
        id: 23,
        nome: "Mafia",
        genero: "Aventura",
        ano: "Série",
        capa: "mafia.png",
        icone: "🚬",
        descricao: "Franquia narrativa de crime, máfia, lealdade e conflitos no submundo."
    },
    {
        id: 24,
        nome: "Counter-Strike",
        genero: "FPS",
        ano: "Série",
        capa: "counter-strike.png",
        icone: "🎯",
        descricao: "FPS competitivo baseado em equipes, estratégia, comunicação e precisão."
    },
    {
        id: 25,
        nome: "Clap Clap",
        genero: "Terror",
        ano: "—",
        capa: "clap-clap.png",
        icone: "👏",
        descricao: "Experiência de terror com atmosfera desconfortável e acontecimentos inesperados."
    }
];

let extras =
    JSON.parse(localStorage.getItem("gameVaultExtras")) || [];

let removidos =
    JSON.parse(localStorage.getItem("gameVaultRemovidos")) || [];

const dadosSalvos =
    JSON.parse(localStorage.getItem("gameVaultDados")) || {};

function prepararJogo(jogo) {

    const salvo = dadosSalvos[jogo.id] || {};

    return {
        ...jogo,

        status: salvo.status || "Sem status",

        favorito: salvo.favorito || false,

        nota: salvo.nota || 0,

        horas: salvo.horas || 0
    };
}

let jogos = [
    ...jogosBase
        .filter(jogo => !removidos.includes(jogo.id))
        .map(prepararJogo),

    ...extras
        .filter(jogo => !removidos.includes(jogo.id))
        .map(prepararJogo)
];

let jogoAberto = null;
let somenteFavoritos = false;

const listaJogos =
    document.getElementById("lista-jogos");

const pesquisa =
    document.getElementById("pesquisa");

const filtroGenero =
    document.getElementById("filtro-genero");

const filtroStatus =
    document.getElementById("filtro-status");

const ordenacao =
    document.getElementById("ordenacao");

const botaoFavoritos =
    document.getElementById("somente-favoritos");

const nenhumResultado =
    document.getElementById("nenhum-resultado");

const modal =
    document.getElementById("modal");

const modalCapa =
    document.getElementById("modal-capa");

const modalNome =
    document.getElementById("modal-nome");

const modalGenero =
    document.getElementById("modal-genero");

const modalDescricao =
    document.getElementById("modal-descricao");

const modalStatus =
    document.getElementById("modal-status");

const modalNota =
    document.getElementById("modal-nota");

const modalHoras =
    document.getElementById("modal-horas");

const modalAdicionar =
    document.getElementById("modal-adicionar");

/* SALVAR */

function salvarDados() {

    const dados = {};

    jogos.forEach(function(jogo) {

        dados[jogo.id] = {
            status: jogo.status,
            favorito: jogo.favorito,
            nota: jogo.nota,
            horas: jogo.horas
        };
    });

    localStorage.setItem(
        "gameVaultDados",
        JSON.stringify(dados)
    );
}

function salvarExtras() {

    localStorage.setItem(
        "gameVaultExtras",
        JSON.stringify(extras)
    );
}

function salvarRemovidos() {

    localStorage.setItem(
        "gameVaultRemovidos",
        JSON.stringify(removidos)
    );
}

/* ESTRELAS */

function estrelas(nota) {

    if (nota === 0) {
        return "Sem avaliação";
    }

    return "⭐".repeat(nota);
}

/* MOSTRAR */

function mostrarJogos() {

    const texto =
        pesquisa.value.toLowerCase().trim();

    let resultado =
        jogos.filter(function(jogo) {

            const pesquisaOk =
                jogo.nome
                    .toLowerCase()
                    .includes(texto);

            const generoOk =
                filtroGenero.value === "todos" ||
                jogo.genero === filtroGenero.value;

            const statusOk =
                filtroStatus.value === "todos" ||
                jogo.status === filtroStatus.value;

            const favoritoOk =
                !somenteFavoritos ||
                jogo.favorito;

            return (
                pesquisaOk &&
                generoOk &&
                statusOk &&
                favoritoOk
            );
        });

    if (ordenacao.value === "nome") {

        resultado.sort(function(a, b) {
            return a.nome.localeCompare(b.nome);
        });
    }

    if (ordenacao.value === "nota") {

        resultado.sort(function(a, b) {
            return b.nota - a.nota;
        });
    }

    if (ordenacao.value === "horas") {

        resultado.sort(function(a, b) {
            return b.horas - a.horas;
        });
    }

    listaJogos.innerHTML = "";

    atualizarEstatisticas();

    if (resultado.length === 0) {

        nenhumResultado.style.display =
            "block";

        return;
    }

    nenhumResultado.style.display =
        "none";

    resultado.forEach(function(jogo) {

        const card =
            document.createElement("article");

        card.classList.add("jogo");

        card.innerHTML = `

            <div class="jogo-capa">

                ${
                    jogo.capa
                        ? `
                            <img
                                src="${jogo.capa}"
                                alt="Capa de ${jogo.nome}"
                                onerror="
                                    this.style.display='none';
                                    this.nextElementSibling.style.display='block';
                                "
                            >
                          `
                        : ""
                }

                <span
                    class="fallback-capa"
                    style="${jogo.capa ? "display:none;" : ""}"
                >
                    ${jogo.icone || "🎮"}
                </span>

            </div>

            <div class="jogo-conteudo">

                <h3>${jogo.nome}</h3>

                <p class="genero">
                    ${jogo.genero} • ${jogo.ano || "—"}
                </p>

                <span class="status">
                    ${jogo.status}
                </span>

                <div class="avaliacao">
                    ${estrelas(jogo.nota)}
                </div>

                <p class="horas-jogadas">
                    ${jogo.horas}h jogadas
                </p>

                <div class="jogo-acoes">

                    <button
                        class="detalhes"
                        data-id="${jogo.id}"
                    >
                        Detalhes
                    </button>

                    <button
                        class="favorito ${
                            jogo.favorito ? "ativo" : ""
                        }"
                        data-favorito="${jogo.id}"
                    >
                        ${jogo.favorito ? "♥" : "♡"}
                    </button>

                </div>

            </div>
        `;

        listaJogos.appendChild(card);
    });

    adicionarEventosCards();
}

/* EVENTOS DOS CARDS */

function adicionarEventosCards() {

    document
        .querySelectorAll(".detalhes")
        .forEach(function(botao) {

            botao.addEventListener("click", function() {

                abrirModal(
                    Number(botao.dataset.id)
                );
            });
        });

    document
        .querySelectorAll(".favorito")
        .forEach(function(botao) {

            botao.addEventListener("click", function() {

                alternarFavorito(
                    Number(botao.dataset.favorito)
                );
            });
        });
}

/* FAVORITOS */

function alternarFavorito(id) {

    const jogo =
        jogos.find(jogo => jogo.id === id);

    if (!jogo) return;

    jogo.favorito =
        !jogo.favorito;

    salvarDados();
    mostrarJogos();
}

botaoFavoritos.addEventListener(
    "click",
    function() {

        somenteFavoritos =
            !somenteFavoritos;

        botaoFavoritos.classList.toggle(
            "ativo",
            somenteFavoritos
        );

        botaoFavoritos.innerText =
            somenteFavoritos
                ? "♥ Favoritos"
                : "♡ Favoritos";

        mostrarJogos();
    }
);

/* MODAL DETALHES */

function abrirModal(id) {

    jogoAberto =
        jogos.find(jogo => jogo.id === id);

    if (!jogoAberto) return;

    modalCapa.src =
        jogoAberto.capa || "";

    modalCapa.alt =
        "Capa de " + jogoAberto.nome;

    if (!jogoAberto.capa) {
        modalCapa.style.display = "none";
    } else {
        modalCapa.style.display = "block";
    }

    modalNome.innerText =
        jogoAberto.nome;

    modalGenero.innerText =
        `${jogoAberto.genero} • ${jogoAberto.ano || "—"}`;

    modalDescricao.innerText =
        jogoAberto.descricao ||
        "Sem descrição.";

    modalStatus.value =
        jogoAberto.status;

    modalNota.value =
        jogoAberto.nota;

    modalHoras.value =
        jogoAberto.horas;

    modal.classList.add("ativo");

    document.body.style.overflow =
        "hidden";
}

function fecharModal() {

    modal.classList.remove("ativo");

    document.body.style.overflow = "";

    jogoAberto = null;
}

document
    .getElementById("fechar-modal")
    .addEventListener(
        "click",
        fecharModal
    );

document
    .getElementById("salvar-jogo")
    .addEventListener(
        "click",
        function() {

            if (!jogoAberto) return;

            jogoAberto.status =
                modalStatus.value;

            jogoAberto.nota =
                Number(modalNota.value);

            jogoAberto.horas =
                Number(modalHoras.value) || 0;

            salvarDados();

            fecharModal();

            mostrarJogos();
        }
    );

/* REMOVER */

document
    .getElementById("remover-jogo")
    .addEventListener(
        "click",
        function() {

            if (!jogoAberto) return;

            const confirmou =
                confirm(
                    `Remover "${jogoAberto.nome}" da biblioteca?`
                );

            if (!confirmou) return;

            const id =
                jogoAberto.id;

            const ehExtra =
                extras.some(
                    jogo => jogo.id === id
                );

            if (ehExtra) {

                extras =
                    extras.filter(
                        jogo => jogo.id !== id
                    );

                salvarExtras();

            } else {

                removidos.push(id);

                salvarRemovidos();
            }

            jogos =
                jogos.filter(
                    jogo => jogo.id !== id
                );

            salvarDados();

            fecharModal();

            mostrarJogos();
        }
    );

/* ADICIONAR JOGO */

document
    .getElementById("abrir-adicionar")
    .addEventListener(
        "click",
        function() {

            modalAdicionar.classList.add(
                "ativo"
            );

            document.body.style.overflow =
                "hidden";
        }
    );

function fecharAdicionar() {

    modalAdicionar.classList.remove(
        "ativo"
    );

    document.body.style.overflow = "";
}

document
    .getElementById("fechar-adicionar")
    .addEventListener(
        "click",
        fecharAdicionar
    );

document
    .getElementById("form-adicionar")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nome =
                document
                    .getElementById("novo-nome")
                    .value
                    .trim();

            const genero =
                document
                    .getElementById("novo-genero")
                    .value;

            const ano =
                document
                    .getElementById("novo-ano")
                    .value
                    .trim();

            const capa =
                document
                    .getElementById("nova-capa")
                    .value
                    .trim();

            const descricao =
                document
                    .getElementById("nova-descricao")
                    .value
                    .trim();

            if (!nome) return;

            const novoJogo = {

                id: Date.now(),

                nome: nome,

                genero: genero,

                ano: ano || "—",

                capa: capa,

                icone: "🎮",

                descricao:
                    descricao ||
                    "Sem descrição.",

                custom: true
            };

            extras.push(novoJogo);

            jogos.push({
                ...novoJogo,

                status: "Sem status",

                favorito: false,

                nota: 0,

                horas: 0
            });

            salvarExtras();
            salvarDados();

            event.target.reset();

            fecharAdicionar();

            mostrarJogos();
        }
    );

/* FECHAR AO CLICAR FORA */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {
            fecharModal();
        }
    }
);

modalAdicionar.addEventListener(
    "click",
    function(event) {

        if (event.target === modalAdicionar) {
            fecharAdicionar();
        }
    }
);

/* ESC */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Escape") {
            return;
        }

        if (modal.classList.contains("ativo")) {
            fecharModal();
        }

        if (
            modalAdicionar.classList.contains(
                "ativo"
            )
        ) {
            fecharAdicionar();
        }
    }
);

/* ESTATÍSTICAS */

function atualizarEstatisticas() {

    document
        .getElementById("total-jogos")
        .innerText =
        jogos.length;

    document
        .getElementById("jogando-total")
        .innerText =
        jogos.filter(
            jogo => jogo.status === "Jogando"
        ).length;

    document
        .getElementById("finalizados-total")
        .innerText =
        jogos.filter(
            jogo =>
                jogo.status === "Finalizado"
        ).length;

    document
        .getElementById("favoritos-total")
        .innerText =
        jogos.filter(
            jogo => jogo.favorito
        ).length;
}

/* FILTROS */

pesquisa.addEventListener(
    "input",
    mostrarJogos
);

filtroGenero.addEventListener(
    "change",
    mostrarJogos
);

filtroStatus.addEventListener(
    "change",
    mostrarJogos
);

ordenacao.addEventListener(
    "change",
    mostrarJogos
);

/* INICIAR */

mostrarJogos();