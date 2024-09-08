//Projeto Desafio Imersão DEV Alura e Google com IA Gemini
//Autor: Isac R. Otsuka
//Ano: 2024

let secaoPagina = document.getElementById("cardapio__container");

// Definição e reset das variáveis para armazenar os dados do pedido à medida que o usuário faz suas escolhas.
let marmitaTamanho = ""; //Armazena o tamanho de marmita escolhido
let marmitaCarboidrato = ""; //Armazena o item carboidrato
let marmitaProteina = ""; //Armazena o item proteina
let marmitaGuarnicao = ""; //Armazena o item guarnição

// Definição e reset das variáveis para armazenar a cosntrução dos itens da página
let printPagina = "";// Variáveis para construção do código da página que será injetado em "cardapio__container"
let printLista = "";// Variáveis para construção da lista de itens

//INÍCIO SEÇÃO EMBALAGEM
//Código a seguir faz o construção da página inicial (Escolha de embalagem)
//Código a seguir constrói a lista de itens inserindo os dados de cada objeto
for (let marmita of marmitas) {
    printLista += `
        <div class="cardapio__item">
            <input type="radio" name="embalagem_radio" id="${marmita.marmitaId}" value="${marmita.marmitaEmbalagem}">
            <label for="${marmita.marmitaId}">
                <img src="./assets/imagens/${marmita.marmitaId}.svg" alt="Imagem marmita">
                <div>
                <h3>${marmita.marmitaEmbalagem}</h3>
                <p><span class="bold"></span>Peso: ${marmita.marmitaPeso}g</p>
                <p><span class="bold"></span>Preço: ${marmita.marmitaValor}</p>
                </div>
            </label>
        </div>    
    `
}
//Código a seguir constroi a código html do pedido e insere na página
printPagina = `
<h2>Escolha o tamanho da sua Marmita:</h2>
    <div class="cardapio__lista">
        ${printLista}
    </div>
    <!-- Botão avançar para proximo item-->
    <button class="botao__avancar" onclick="selecionaEmbalagem()">Carboidratos ></button>
`
secaoPagina.innerHTML = printPagina;

//Código a seguir verifica e guarda a opção de embalagem seleciona
function selecionaEmbalagem() {
    const radios = document.getElementsByName('embalagem_radio');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            marmitaTamanho = radios[i].value; // Salva o valor do radio em marmitaTamanho
            console.log(marmitaTamanho)
            break;
        }
    }
    if (!marmitaTamanho){
        alert("Selecione uma tamanho de embalagem.")
        return
    }
    paginaCarboidrato();//função chama e imprime a próxima página a lista com todos os itens da categoria
}

//INÍCIO SEÇÃO CARBOIDRATOS
//Código a seguir faz a construção da página e lista de carboidratos
function paginaCarboidrato() {

    printPagina = "";
    printLista = "";
    //Código a seguir constrói a lista de itens inserindo os dados de cada objeto
    for (let carboidrato of carboidratos) {

        printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="carboidrato_radio" id="${carboidrato.itemId}" value="${carboidrato.tipo}">
                    <label for="${carboidrato.itemId}">
                        <img src="./assets/imagens/icon-1-carboidrato.svg" alt="carboidratos">
                        <div>
                        <h3>${carboidrato.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${carboidrato.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${carboidrato.valorEnergetico}kcal</p>
                        </div>
                    </label>
                </div> 
    `
    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
            <section class="cardapio__container">
            <h2>Carboidratos</h2>
            <!-- Campo pesquisa  -->
            <div class="cardapio__pesquisa">
                <input type="text" name="pesquisa-carboidrato" id="pesquisa-carboidrato"
                    placeholder="Busque seu carboidrato ou ingrediente">
                <button class="botao" onclick="pesquisaCarboidrato()">Pesquisar</button>
            </div>
            <!-- Campo lista  -->
            <div class="cardapio__lista">
                ${printLista}
            </div>
            <!-- Botão avançar para proximo item-->
            <button class="botao__avancar" onclick="selecionaCarboidrato()">Proteína ></button>
        </section>
    `
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir realiza a busca de itens na lista de carboidratos
function pesquisaCarboidrato() {

    let campoPesquisaCarboidrato = document.getElementById("pesquisa-carboidrato").value;
    let pesquisaCarboidrato = campoPesquisaCarboidrato.toLowerCase();

    if ((!pesquisaCarboidrato) || (pesquisaCarboidrato == " ") || (pesquisaCarboidrato == "  ")) {
        alert("Nada encontrado.")
        paginaCarboidrato()//redesenha a lista com todos os itens da categoria
        return
    }
    printPagina = ""; //Reset do valor da variável
    printLista = ""; //Reset do valor da variável

    for (let carboidrato of carboidratos) {
        let carboidratoTipo = carboidrato.tipo.toLocaleLowerCase();
        let carboidratoIngrediente = carboidrato.ingredientes.toLocaleLowerCase();

        if ((carboidratoTipo.includes(pesquisaCarboidrato)) || (carboidratoIngrediente.includes(pesquisaCarboidrato))) {
            printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="carboidrato_radio" id="${carboidrato.itemId}" value="${carboidrato.tipo}">
                    <label for="${carboidrato.itemId}">
                        <img src="./assets/imagens/icon-1-carboidrato.svg" alt="carboidratos">
                        <div>
                        <h3>${carboidrato.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${carboidrato.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${carboidrato.valorEnergetico}kcal</p>
                        </div>
                    </label>
                </div> 
            `
        }

    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
    <section class="cardapio__container">
    <h2>Carboidratos</h2>
    <!-- Campo pesquisa  -->
    <div class="cardapio__pesquisa">
        <input type="text" name="pesquisa-carboidrato" id="pesquisa-carboidrato"
            placeholder="Busque seu carboidrato ou ingrediente">
        <button class="botao" onclick="pesquisaCarboidrato()">Pesquisar</button>
    </div>
    <!-- Campo lista  -->
    <div class="cardapio__lista">
        ${printLista}
    </div>
    <!-- Botão avançar para proximo item-->
    <button class="botao__avancar" onclick="selecionaCarboidrato()">Proteína ></button>
</section>
`
    if (!printLista) {
        alert("Nada encontrado.")
        paginaCarboidrato()//redesenha a lista com todos os itens da categoria
    }
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir verifica e guarda a opção de carboidrato seleciona
function selecionaCarboidrato() {
    const radios = document.getElementsByName('carboidrato_radio');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            marmitaCarboidrato = radios[i].value; // Salva o valor do radio em marmitaTamanho
            console.log(marmitaCarboidrato)
            break;
        }
    }
    if (!marmitaCarboidrato){
        alert("Selecione um carboidrato.")
        return
    }
    paginaProteina();//função chama e imprime a próxima página a lista com todos os itens da categoria
}

//INICIO SEÇÃO PROTEINA
//Código a seguir faz a construção da página e lista de proteínas
function paginaProteina() {

    printPagina = ""; //Reset do valor da variável
    printLista = ""; //Reset do valor da variável
    //Código a seguir constrói a lista de itens inserindo os dados de cada objeto
    for (let proteina of proteinas) {

        printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="proteina_radio" id="${proteina.itemId}" value="${proteina.tipo}">
                    <label for="${proteina.itemId}">
                        <img src="./assets/imagens/icone-3-proteina.svg" alt="Proteínas">
                        <div>
                        <h3>${proteina.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${proteina.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${proteina.valorEnergetico}kcal</p>
                        </div>
                    </label>
                </div> 
    `
    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
            <section class="cardapio__container">
            <h2>Proteinas</h2>
            <!-- Campo pesquisa  -->
            <div class="cardapio__pesquisa">
                <input type="text" name="pesquisa-proteina" id="pesquisa-proteina"
                    placeholder="Busque sua proteína ou ingrediente">
                <button class="botao" onclick="pesquisaProteina()">Pesquisar</button>
            </div>
            <!-- Campo lista  -->
            <div class="cardapio__lista">
                ${printLista}
            </div>
            <!-- Botão avançar para proximo item-->
            <button class="botao__avancar" onclick="selecionaProteina()">Guarnição ></button>
        </section>
    `
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir realiza a busca de itens na lista de proteinas
function pesquisaProteina() {

    let campoPesquisaProteina = document.getElementById("pesquisa-proteina").value;
    let pesquisaProteina = campoPesquisaProteina.toLowerCase();

    if ((!pesquisaProteina) || (pesquisaProteina == " ") || (pesquisaProteina == "  ")) {
        alert("Nada encontrado.")
        paginaProteina()//redesenha a lista com todos os itens da categoria
        return
    }
    printPagina = ""; //Reset do valor da variável
    printLista = ""; //Reset do valor da variável
    //Código a seguir constrói a lista de itens inserindo os dados de cada objeto
    for (let proteina of proteinas) {
        let proteinaTipo = proteina.tipo.toLocaleLowerCase();
        let proteinaIngrediente = proteina.ingredientes.toLocaleLowerCase();

        if ((proteinaTipo.includes(pesquisaProteina)) || (proteinaIngrediente.includes(pesquisaProteina))) {
            printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="proteina_radio" id="${proteina.itemId}" value="${proteina.tipo}">
                    <label for="${proteina.itemId}">
                        <img src="./assets/imagens/icone-3-proteina.svg" alt="Proteínas">
                        <div>
                        <h3>${proteina.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${proteina.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${proteina.valorEnergetico}kcal</p>
                        </div>
                    </label>
                </div> 
            `
        }

    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
            <section class="cardapio__container">
            <h2>Proteinas</h2>
            <!-- Campo pesquisa  -->
            <div class="cardapio__pesquisa">
                <input type="text" name="pesquisa-proteina" id="pesquisa-proteina"
                    placeholder="Busque sua proteína ou ingrediente">
                <button class="botao" onclick="pesquisaProteina()">Pesquisar</button>
            </div>
            <!-- Campo lista  -->
            <div class="cardapio__lista">
                ${printLista}
            </div>
            <!-- Botão avançar para proximo item-->
            <button class="botao__avancar" onclick="selecionaProteina()">Guarnição ></button>
        </section>
`
    if (!printLista) {
        alert("Nada encontrado.")
        paginaProteina()//redesenha a lista com todos os itens da categoria
    }
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir verifica e guarda a opção de proteina selecionada
function selecionaProteina() {
    const radios = document.getElementsByName('proteina_radio');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            marmitaProteina = radios[i].value; // Salva o valor do radio em marmitaTamanho
            console.log(marmitaProteina)
            break;
        }
    }
    if (!marmitaProteina){
        alert("Selecione uma proteína.")
        return
    }
    paginaGuarnicao();//função chama e imprime a próxima página a lista com todos os itens da categoria
}

//INÍCIO SEÇÃO GUARNIÇÕES
//Código a seguir faz a construção da página e lista de guarnições
function paginaGuarnicao() {

    printPagina = ""; //Reset do valor da variável
    printLista = ""; //Reset do valor da variável
    //Código a seguir constrói a lista de itens inserindo os dados de cada objeto
    for (let guarnicao of guarnicoes) {

        printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="guarnicao_radio" id="${guarnicao.itemId}" value="${guarnicao.tipo}">
                    <label for="${guarnicao.itemId}">
                        <img src="./assets/imagens/icone-4-guarnicao.svg" alt="Guarnição">
                        <div>
                        <h3>${guarnicao.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${guarnicao.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${guarnicao.valorEnergetico}kcal</p>
                        </div>
                    </label>
                </div> 
    `
    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
            <section class="cardapio__container">
            <h2>Guarnição</h2>
            <!-- Campo pesquisa  -->
            <div class="cardapio__pesquisa">
                <input type="text" name="pesquisa-guarnicao" id="pesquisa-guarnicao"
                    placeholder="Busque sua guarnição ou ingrediente">
                <button class="botao" onclick="pesquisaGuarnicao()">Pesquisar</button>
            </div>
            <!-- Campo lista  -->
            <div class="cardapio__lista">
                ${printLista}
            </div>
            <!-- Botão avançar para proximo item-->
            <button class="botao__avancar" onclick="selecionaGuarnicao()">Fechar Marmita ></button>
        </section>
    `
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir realiza a busca de itens na lista de guarnições
function pesquisaGuarnicao() {

    let campoPesquisaGuarnicao = document.getElementById("pesquisa-guarnicao").value;
    let pesquisaGuarnicao = campoPesquisaGuarnicao.toLowerCase();

    if ((!pesquisaGuarnicao) || (pesquisaGuarnicao == " ") || (pesquisaGuarnicao == "  ")) {
        alert("Nada encontrado.")
        paginaGuarnicao()//redesenha a lista com todos os itens da categoria
        return
    }
    printPagina = ""; //Reset do valor da variável
    printLista = ""; //Reset do valor da variável
    //Código a seguir constroi a lista de itens
    for (let guarnicao of guarnicoes) {
        let guarnicaoTipo = guarnicao.tipo.toLocaleLowerCase();
        let guarnicaoIngrediente = guarnicao.ingredientes.toLocaleLowerCase();

        if ((guarnicaoTipo.includes(pesquisaGuarnicao)) || (guarnicaoIngrediente.includes(pesquisaGuarnicao))) {
            printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="guarnicao_radio" id="${guarnicao.itemId}" value="${guarnicao.tipo}">
                    <label for="${guarnicao.itemId}">
                        <img src="./assets/imagens/icone-4-guarnicao.svg" alt="Guarnição">
                        <div>
                        <h3>${guarnicao.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${guarnicao.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${guarnicao.valorEnergetico}kcal</p>
                        </div>
                    </label>
                </div> 
            `
        }

    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
            <section class="cardapio__container">
            <h2>Guarnição</h2>
            <!-- Campo pesquisa  -->
            <div class="cardapio__pesquisa">
                <input type="text" name="pesquisa-guarnicao" id="pesquisa-guarnicao"
                    placeholder="Busque sua guarnição ou ingrediente">
                <button class="botao" onclick="pesquisaGuarnicao()">Pesquisar</button>
            </div>
            <!-- Campo lista  -->
            <div class="cardapio__lista">
                ${printLista}
            </div>
            <!-- Botão avançar para proximo item-->
            <button class="botao__avancar" onclick="selecionaGuarnicao()">Fechar Marmita ></button>
        </section>
`
    if (!printLista) {
        alert("Nada encontrado.")
        paginaGuarnicao() //redesenha a lista com todos os itens da categoria
    }
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir verifica e guarda a opção de guarnição selecionada
function selecionaGuarnicao() {
    const radios = document.getElementsByName('guarnicao_radio');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            marmitaGuarnicao = radios[i].value; // Salva o valor do radio em marmitaTamanho
            console.log(marmitaGuarnicao)
            break;
        }
    }
    if (!marmitaGuarnicao){
        alert("Selecione uma guarnição.")
        return
    }
    paginaFechaMarmita(); //Chama função chama e imprime a página de revisão do pedido
}

//INÍCIO SEÇÃO CONFIRMAÇÃO DE PEDIDO
//Código a seguir constroi a página de confirmação do pedido
function paginaFechaMarmita() {

    printPagina = ""; //Reset do valor da variável
    printLista = ""; //Reset do valor da variável
    //Código a seguir verifica o tamanho da embalagem e preenche o trecho html com as demais informações (peso e valor)
    for(marmita of marmitas){
        if(marmitaTamanho == marmita.marmitaEmbalagem){
            printLista=`
                <img src="./assets/imagens/${marmita.marmitaId}.svg" alt="Imagem marmita">
                <div>
                <h3>${marmita.marmitaEmbalagem} - ${marmita.marmitaPeso}g</h3>
                <p>Preço: ${marmita.marmitaValor}</p>
            `
        }
    }
    //Código a seguir constroi a código html do pedido e insere na página
    printPagina = `
    <h2>Revise sua Marmita</h2>
            <div class="pedido__container">

                ${printLista}
                <h3>Itens:</h3>
                <ul>
                    <li>
                        <h4>Carboidrato</h4>
                        <p>${marmitaCarboidrato }</p>
                    </li>
                    <li>
                        <h4>Proteína</h4>
                        <p>${marmitaProteina}</p>
                    </li>
                    <li>
                        <h4>Guarinição</h4>
                        <p>${marmitaGuarnicao}</p>
                    </li>
                </ul>
            </div>
            </div>
            <!-- Botão avançar para proximo item-->
            <button class="botao__avancar" onclick="pagamento()">Confirmar Pedido ></button>
    `;
    secaoPagina.innerHTML = printPagina;
}

//Código a seguir constroi a página final do pedido
function pagamento(){

    printPagina = ""; //Reset do valor da variável
    printPagina = `
    <h2>Bom apetite!</h2>
        <br>
        <br>
        <br>
        <h3>Obrigado volte sempre!</h3>
        <br>
        <br>
        <button class="botao__avancar" onclick="window.location.reload()">Fazer novo pedido</button>
    `;
    secaoPagina.innerHTML = printPagina;
}
