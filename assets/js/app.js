let secaoPagina = document.getElementById("cardapio__container");

// Definição das variaveis para armazenar pedidos
let marmitaTamanho = "";
let marmitaCarboidrato = "";
let marmitaProteina = "";
let marmitaGuarnicao = "";

let printPagina = "";
let printLista = "";

for (let marmita of marmitas) {

    printLista += `
        <div class="cardapio__item">
            <input type="radio" name="embalagem_radio" id="${marmita.marmitaId}" value="${marmita.marmitaEmbalagem}">
            <label for="${marmita.marmitaId}">
                <h3>${marmita.marmitaEmbalagem}</h3>
                <p><span class="bold"></span>Peso: ${marmita.marmitaPeso}/p>
                <p><span class="bold"></span>Preço: ${marmita.marmitaValor}</p>
            </label>
        </div>    
    `
}

printPagina = `
<h2>Escolha o tamanho da sua Mamarmita:</h2>
    <div class="cardapio__lista">
        ${printLista}
    </div>
    <!-- Botão avançar para proximo item-->
    <button class="botao botao__avancar" onclick="selecionaEmbalagem()">Carboidratos ></button>
`
secaoPagina.innerHTML = printPagina;

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
    paginaCarboidrato();
}

function paginaCarboidrato() {

    printPagina = "";
    printLista = "";

    for (let carboidrato of carboidratos) {

        printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="carboidrato_radio" id="${carboidrato.itemId}" value="${carboidrato.tipo}">
                    <label for="${carboidrato.itemId}">
                        <h3>${carboidrato.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${carboidrato.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${carboidrato.valorEnergetico}kcal</p>
                    </label>
                </div> 
    `
    }

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
            <button class="botao botao__avancar" onclick="selecionaCarboidrato()">Proteína ></button>
        </section>
    `
    secaoPagina.innerHTML = printPagina;
}

function pesquisaCarboidrato() {

    let campoPesquisaCarboidrato = document.getElementById("pesquisa-carboidrato").value;
    let pesquisaCarboidrato = campoPesquisaCarboidrato.toLowerCase();

    if ((!pesquisaCarboidrato) || (pesquisaCarboidrato == " ") || (pesquisaCarboidrato == "  ")) {
        alert("Nada encontrado.")
        paginaCarboidrato()
        return
    }
    printPagina = "";
    printLista = "";

    for (let carboidrato of carboidratos) {
        let carboidratoTipo = carboidrato.tipo.toLocaleLowerCase();
        let carboidratoIngrediente = carboidrato.ingredientes.toLocaleLowerCase();

        if ((carboidratoTipo.includes(pesquisaCarboidrato)) || (carboidratoIngrediente.includes(pesquisaCarboidrato))) {
            printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="carboidrato_radio" id="${carboidrato.itemId}" value="${carboidrato.tipo}">
                    <label for="${carboidrato.itemId}">
                        <h3>${carboidrato.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${carboidrato.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${carboidrato.valorEnergetico}kcal</p>
                    </label>
                </div> 
            `
        }

    }

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
    <button class="botao botao__avancar" onclick="selecionaCarboidrato()">Proteína ></button>
</section>
`
    if (!printLista) {
        alert("Nada encontrado.")
        paginaCarboidrato()
    }
    secaoPagina.innerHTML = printPagina;
}

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
    paginaProteina();
}

//INICIO SEÇÃO PROTEINA

function paginaProteina() {

    printPagina = "";
    printLista = "";

    for (let proteina of proteinas) {

        printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="proteina_radio" id="${proteina.itemId}" value="${proteina.tipo}">
                    <label for="${proteina.itemId}">
                        <h3>${proteina.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${proteina.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${proteina.valorEnergetico}kcal</p>
                    </label>
                </div> 
    `
    }

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
            <button class="botao botao__avancar" onclick="selecionaProteina()">Guarnição ></button>
        </section>
    `
    secaoPagina.innerHTML = printPagina;
}

function pesquisaProteina() {

    let campoPesquisaProteina = document.getElementById("pesquisa-proteina").value;
    let pesquisaProteina = campoPesquisaProteina.toLowerCase();

    if ((!pesquisaProteina) || (pesquisaProteina == " ") || (pesquisaProteina == "  ")) {
        alert("Nada encontrado.")
        paginaProteina()
        return
    }
    printPagina = "";
    printLista = "";

    for (let proteina of proteinas) {
        let proteinaTipo = proteina.tipo.toLocaleLowerCase();
        let proteinaIngrediente = proteina.ingredientes.toLocaleLowerCase();

        if ((proteinaTipo.includes(pesquisaProteina)) || (proteinaIngrediente.includes(pesquisaProteina))) {
            printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="proteina_radio" id="${proteina.itemId}" value="${proteina.tipo}">
                    <label for="${proteina.itemId}">
                        <h3>${proteina.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${proteina.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${proteina.valorEnergetico}kcal</p>
                    </label>
                </div> 
            `
        }

    }

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
            <button class="botao botao__avancar" onclick="selecionaProteina()">Guarnição ></button>
        </section>
`
    if (!printLista) {
        alert("Nada encontrado.")
        paginaProteina()
    }
    secaoPagina.innerHTML = printPagina;
}

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
    paginaGuarnicao();
}

//Inicio seção Guarnição

function paginaGuarnicao() {

    printPagina = "";
    printLista = "";

    for (let guarnicao of guarnicoes) {

        printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="guarnicao_radio" id="${guarnicao.itemId}" value="${guarnicao.tipo}">
                    <label for="${guarnicao.itemId}">
                        <h3>${guarnicao.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${guarnicao.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${guarnicao.valorEnergetico}kcal</p>
                    </label>
                </div> 
    `
    }

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
            <button class="botao botao__avancar" onclick="selecionaGuarnicao()">Fechar Mamarmita ></button>
        </section>
    `
    secaoPagina.innerHTML = printPagina;
}

function pesquisaGuarnicao() {

    let campoPesquisaGuarnicao = document.getElementById("pesquisa-guarnicao").value;
    let pesquisaGuarnicao = campoPesquisaGuarnicao.toLowerCase();

    if ((!pesquisaGuarnicao) || (pesquisaGuarnicao == " ") || (pesquisaGuarnicao == "  ")) {
        alert("Nada encontrado.")
        paginaGuarnicao()
        return
    }
    printPagina = "";
    printLista = "";

    for (let guarnicao of guarnicoes) {
        let guarnicaoTipo = guarnicao.tipo.toLocaleLowerCase();
        let guarnicaoIngrediente = guarnicao.ingredientes.toLocaleLowerCase();

        if ((guarnicaoTipo.includes(pesquisaGuarnicao)) || (guarnicaoIngrediente.includes(pesquisaGuarnicao))) {
            printLista += `
                <div class="cardapio__item">
                    <input type="radio" name="guarnicao_radio" id="${guarnicao.itemId}" value="${guarnicao.tipo}">
                    <label for="${guarnicao.itemId}">
                        <h3>${guarnicao.tipo}</h3>
                        <p><span class="bold">Ingredientes:</span> ${guarnicao.ingredientes}</p>
                        <p><span class="bold">Calorias(para cada 100g):</span> ${guarnicao.valorEnergetico}kcal</p>
                    </label>
                </div> 
            `
        }

    }

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
            <button class="botao botao__avancar" onclick="selecionaGuarnicao()">Fechar Mamarmita ></button>
        </section>
`
    if (!printLista) {
        alert("Nada encontrado.")
        paginaGuarnicao()
    }
    secaoPagina.innerHTML = printPagina;
}

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
    paginaFechaMarmita();
}

function paginaFechaMarmita() {

    printPagina = "";
    printLista = "";

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

    printPagina = `
    <h2>Revise sua Mamarmita</h2>
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
            <button class="botao" onclick="pagamento()">Ir para pagamento ></button>
    `;
    secaoPagina.innerHTML = printPagina;
}

function pagamento(){

    printPagina = "";
    printPagina = `
    <h2>Revise sua Mamarmita</h2>
        <br>
        <br>
        <br>
        <h3>Obrigado volte sempre!</h3>
        <br>
        <br>
        <button class="botao" onclick="window.location.reload()">Fazer novo pedido</button>
    `;
    secaoPagina.innerHTML = printPagina;
}