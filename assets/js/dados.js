const marmitas = [
  {
    marmitaEmbalagem:"Embalagem P",
    marmitaPeso: 450,
    marmitaValor: "R$44,90",
    marmitaId: "marmita450"
  },
  {
    marmitaEmbalagem:"Embalagem M",
    marmitaPeso: 600,
    marmitaValor: "R$57,90",
    marmitaId: "marmita600"
  },
  {
    marmitaEmbalagem:"Embalagem G",
    marmitaPeso: 750,
    marmitaValor: "R$69,90",
    marmitaId: "marmita750"
  }
];

const carboidratos = [
  {
    tipo: "Arroz branco cozido",
    ingredientes: "Arroz",
    valorEnergetico: 130,
    itemId: "arrozBrancoCozido"
  },
  {
    tipo: "Arroz integral cozido",
    ingredientes: "Arroz integral",
    valorEnergetico: 110,
    itemId: "arrozIntegralCozido"
  },
  {
    tipo: "Feijão preto cozido",
    ingredientes: "Feijão preto",
    valorEnergetico: 120,
    itemId: "feijaoPretoCozido"
  },
  {
    tipo: "Macarrão espaguete cozido",
    ingredientes: "Macarrão",
    valorEnergetico: 160,
    itemId: "macarraoEspagueteCozido"
  },
  {
    tipo: "Batata doce assada",
    ingredientes: "Batata doce",
    valorEnergetico: 90,
    itemId: "batataDoceAssada"
  },
  {
    tipo: "Mandioca cozida",
    ingredientes: "Mandioca",
    valorEnergetico: 140,
    itemId: "mandiocaCozida"
  },
  {
    tipo: "Milho verde cozido",
    ingredientes: "Milho",
    valorEnergetico: 100,
    itemId: "milhoVerdeCozido"
  },{
    tipo: "Arroz integral com legumes",
    ingredientes: "Arroz integral, Cenoura, Chuchu e Ervilha",
    valorEnergetico: 125,
    itemId: "arrozIntegralComLegumes"
  },
  {
    tipo: "Macarrão integral ao molho de tomate",
    ingredientes: "Macarrão integral, Tomate, Cebola e Alho",
    valorEnergetico: 150,
    itemId: "macarraoIntegralMolhoTomate"
  },
  {
    tipo: "Batata doce recheada com carne",
    ingredientes: "Batata doce, Carne moída, Cebola, Alho",
    valorEnergetico: 180,
    itemId: "batataDoceRecheadaCarne"
  },
  {
    tipo: "Purê de mandioca com queijo",
    ingredientes: "Mandioca, Queijo",
    valorEnergetico: 155,
    itemId: "pureMandiocaQueijo"
  },
  {
    tipo: "Cuscuz marroquino com legumes",
    ingredientes: "Cuscuz marroquino, Cenoura, Abobrinha, Pimentão",
    valorEnergetico: 130,
    itemId: "cuscuzMarroquinoLegumes"
  },
  {
    tipo: "Nhoque de batata doce com molho pesto",
    ingredientes: "Batata doce, Farinha de arroz, Manjericão, Pinoli",
    valorEnergetico: 160,
    itemId: "nhoqueBatataDocePesto"
  },
  {
    tipo: "Polenta cremosa com ragu de carne",
    ingredientes: "Milho, Carne moída, Tomate, Vinho tinto",
    valorEnergetico: 190,
    itemId: "polentaRaguCarne"
  },
  {
    tipo: "Arroz carreteiro com carne seca",
    ingredientes: "Arroz, Carne seca desfiada, Feijão, Couve",
    valorEnergetico: 175,
    itemId: "arrozCarreteiroCarneSeca"
  }
];

const proteinas = [
  {
    tipo: "Bife de carne bovina grelhado",
    ingredientes: "Carne bovina",
    valorEnergetico: 250,
    itemId: "bifeCarneBovinaGrelhado"
  },
  {
    tipo: "Frango grelhado com temperos",
    ingredientes: "Frango, Alho, Sal, Pimenta",
    valorEnergetico: 190,
    itemId: "frangoGrelhadoTemperos"
  },
  {
    tipo: "Lombo de porco assado",
    ingredientes: "Lombo de porco",
    valorEnergetico: 240,
    itemId: "lomboPorcoAssado"
  },
  {
    tipo: "Salmão grelhado com limão",
    ingredientes: "Salmão, Limão",
    valorEnergetico: 200,
    itemId: "salmaoGrelhadoLimao"
  },
  {
    tipo: "Ovos mexidos",
    ingredientes: "Ovos, Leite, Sal",
    valorEnergetico: 150,
    itemId: "ovosMexidos"
  },
  {
    tipo: "Bife de soja grelhado",
    ingredientes: "Proteína de soja",
    valorEnergetico: 220,
    itemId: "bifeSojaGrelhado"
  },
  {
    tipo: "Lentilhas cozidas",
    ingredientes: "Lentilhas",
    valorEnergetico: 120,
    itemId: "lentilhasCozidas"
  },
  {
    tipo: "Grão de bico cozido",
    ingredientes: "Grão de bico",
    valorEnergetico: 140,
    itemId: "graoBicoCozido"
  },
  {
    tipo: "Tofu grelhado com legumes",
    ingredientes: "Tofu, Cenoura, Pimentão",
    valorEnergetico: 180,
    itemId: "tofuGrelhadoLegumes"
  },
  {
    tipo: "Carne moída bovina refogada com legumes",
    ingredientes: "Carne moída bovina, Cebola, Cenoura, Pimentão",
    valorEnergetico: 230,
    itemId: "carneMoidaBovinaLegumes"
  },
  {
    tipo: "Peito de frango desfiado",
    ingredientes: "Peito de frango",
    valorEnergetico: 180,
    itemId: "peitoFrangoDesfiado"
  },
  {
    tipo: "Atum em lata light no azeite",
    ingredientes: "Atum em lata",
    valorEnergetico: 195,
    itemId: "atumLataAzeite"
  },
  {
    tipo: "Omelete com queijo e presunto",
    ingredientes: "Ovos, Queijo, Presunto",
    valorEnergetico: 170,
    itemId: "omeleteQueijoPresunto"
  },
  {
    tipo: "Hambúrguer vegetariano",
    ingredientes: "Proteína de soja texturizada, Legumes",
    valorEnergetico: 200,
    itemId: "hamburguerVegetariano"
  },
  {
    tipo: "Quinoa cozida com legumes",
    ingredientes: "Quinoa, Tomate, Pepino",
    valorEnergetico: 130,
    itemId: "quinoaLegumes"
  }
];

const guarnicoes = [
  {
    tipo: "Salada verde com tomate e cebola",
    ingredientes: "Alface, Tomate, Cebola",
    valorEnergetico: 30,
    itemId: "saladaVerdeTomateCebola"
  },
  {
    tipo: "Legumes salteados (brócolis, cenoura, pimentão)",
    ingredientes: "Brócolis, Cenoura, Pimentão",
    valorEnergetico: 45,
    itemId: "legumesSalteados"
  },
  {
    tipo: "Arroz integral com brócolis",
    ingredientes: "Arroz integral, Brócolis",
    valorEnergetico: 120,
    itemId: "arrozIntegralBrocolis"
  },
  {
    tipo: "Batata doce assada com ervas finas",
    ingredientes: "Batata doce, Ervas finas",
    valorEnergetico: 90,
    itemId: "batataDoceAssadaErvas"
  },
  {
    tipo: "Purê de batata com alho",
    ingredientes: "Batata, Alho",
    valorEnergetico: 100,
    itemId: "pureBatataAlho"
  },
  {
    tipo: "Salada de quinoa com legumes",
    ingredientes: "Quinoa, Pepino, Tomate, Cebola",
    valorEnergetico: 110,
    itemId: "saladaQuinoaLegumes"
  },
  {
    tipo: "Legumes no vapor (chuchu, abobrinha, cenoura)",
    ingredientes: "Chuchu, Abobrinha, Cenoura",
    valorEnergetico: 35,
    itemId: "legumesVapor"
  },
  {
    tipo: "Arroz branco com ervilha",
    ingredientes: "Arroz branco, Ervilha",
    valorEnergetico: 130,
    itemId: "arrozBrancoErvilha"
  },
  {
    tipo: "Mandioca cozida",
    ingredientes: "Mandioca",
    valorEnergetico: 140,
    itemId: "mandiocaCozida"
  },
  {
    tipo: "Mix de folhas verdes (rúcula, alface americana, espinafre)",
    ingredientes: "Rúcula, Alface americana, Espinafre",
    valorEnergetico: 25,
    itemId: "mixFolhasVerdes"
  }
];