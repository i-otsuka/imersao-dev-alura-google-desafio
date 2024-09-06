let listaTela = document.getElementById("cardapio__container");

let listaCarboidratos = "";
let composicaoPagina = ""

for (let carboidrato of carboidratos){
    listaCarboidratos += `
                <div class="cardapio__item">
                    <input class="cardapio__radio" type="radio" name="carboidrato" id="${carboidrato.itemId}">
                    <label class="cardapio__item__label" for="${carboidrato.itemId}">
                        <img src="./assets/imagens/icon-1-carboidrato.svg" alt="carboidrato">
                        <div>
                            <h3>${carboidrato.tipo}</h3>
                            <p>Valor calórico: ${carboidrato.valorEnergetico}kcal (a cada 100g)</p>
                        </div>
                    </label>
                </div>
  `;
};

composicaoPagina = `
            <div class="cardapio__busca" id="busca_carboidratos">
                <input type="text">
                <button>Pesquisar</button>
            </div>
            <div class="cardapio__lista">
                ${listaCarboidratos}
            </div>`;

listaTela.innerHTML = composicaoPagina;