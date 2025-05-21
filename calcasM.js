const calcasMasculinas = [
  {
    nome: "Calça Masculina em Sarja Preto",
    preco: 100.00,
    entrega: "CHEGARÁ EM 3 DIAS",
    local: "São Paulo, SP",
    imagens: [
      "imagensCalçasM/imagens.Calças1/calça1.png",
      "imagensCalçasM/imagens.Calças1/calça2.png",
      "imagensCalçasM/imagens.Calças1/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Masculina em Sarja Marrom",
    preco: 80.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Rio de Janeiro, RJ",
    imagens: [
      "imagensCalçasM/imagens.Calças2/calça1.png",
      "imagensCalçasM/imagens.Calças2/calça2.png",
      "imagensCalçasM/imagens.Calças2/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Masculina Loose Fit Jeans Azul",
    preco: 120.00,
    entrega: "CHEGARÁ EM 7 DIAS",
    local: "Curitiba, PR",
    imagens: [
      "imagensCalçasM/imagens.Calças3/calça1.png",
      "imagensCalçasM/imagens.Calças3/calça2.png",
      "imagensCalçasM/imagens.Calças3/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça com Bolso Masculina em Sarja Cinza",
    preco: 90.00,
    entrega: "CHEGARÁ EM 2 DIAS",
    local: "Campinas, SP",
    imagens: [
      "imagensCalçasM/imagens.Calças4/calça1.png",
      "imagensCalçasM/imagens.Calças4/calça2.png",
      "imagensCalçasM/imagens.Calças4/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Masculina em Sarja Preto",
    preco: 110.00,
    entrega: "CHEGARÁ EM 10 DIAS",
    local: "Porto Alegre, RS",
    imagens: [
      "imagensCalçasM/imagens.Calças5/calça1.png",
      "imagensCalçasM/imagens.Calças5/calça2.png",
      "imagensCalçasM/imagens.Calças5/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Jeans Masculina Reta Azul",
    preco: 130.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Salvador, BA",
    imagens: [
      "imagensCalçasM/imagens.Calças6/calça1.png",
      "imagensCalçasM/imagens.Calças6/calça2.png",
      "imagensCalçasM/imagens.Calças6/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Jeans Azul Escuro em Jeans com Elastano",
    preco: 140.00,
    entrega: "CHEGARÁ EM 3 DIAS",
    local: "Recife, PE",
    imagens: [
      "imagensCalçasM/imagens.Calças7/calça1.png",
      "imagensCalçasM/imagens.Calças7/calça2.png",
      "imagensCalçasM/imagens.Calças7/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Masculina Skinny Flex Jeans Azul",
    preco: 120.00,
    entrega: "CHEGARÁ EM 7 DIAS",
    local: "Fortaleza, CE",
    imagens: [
      "imagensCalçasM/imagens.Calças8/calça1.png",
      "imagensCalçasM/imagens.Calças8/calça2.png",
      "imagensCalçasM/imagens.Calças8/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Preto Masculina Slim Flex Sarja",
    preco: 90.00,
    entrega: "CHEGARÁ EM 4 DIAS",
    local: "Belo Horizonte, MG",
    imagens: [
      "imagensCalçasM/imagens.Calças9/calça1.png",
      "imagensCalçasM/imagens.Calças9/calça2.png",
      "imagensCalçasM/imagens.Calças9/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Jeans Masculina Reta Azul",
    preco: 150.00,
    entrega: "CHEGARÁ EM 6 DIAS",
    local: "São Luís, MA",
    imagens: [
      "imagensCalçasM/imagens.Calças10/calça1.png",
      "imagensCalçasM/imagens.Calças10/calça2.png",
      "imagensCalçasM/imagens.Calças10/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Masculina Chino em Sarja Verde",
    preco: 100.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Goiânia, GO",
    imagens: [
      "imagensCalçasM/imagens.Calças11/calça1.png",
      "imagensCalçasM/imagens.Calças11/calça2.png",
      "imagensCalçasM/imagens.Calças11/calça3.png"
    ],
    detalhes: "detalhesCalcasM.html"
  },
  {
    nome: "Calça Jeans Médio em Jeans",
    preco: 110.00,
    entrega: "CHEGARÁ EM 8 DIAS",
    local: "Brasília, DF",
    imagens: [
      "imagensCalçasM/imagens.Calças12/calça1.png",
      "imagensCalçasM/imagens.Calças12/calça2.png",
      "imagensCalçasM/imagens.Calças12/calça2.png",


    ],
    detalhes: "detalhesCalcasM.html"
  }
];


function verDetalhes(index) {
  const produto = calcasMasculinas[index];

  if (!produto.imagens || !Array.isArray(produto.imagens)) {
    produto.imagens = [produto.imagem || "imagens/imagem-padrao.jpg"];
  }

  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
  window.location.href = produto.detalhes;
}

function listarProdutos() {
  const container = document.getElementById("produtos-calcas");

  container.innerHTML = calcasMasculinas.map((produto, i) => {
    const imagemPrincipal = (produto.imagens && produto.imagens.length > 0)
      ? produto.imagens[0]
      : (produto.imagem || "imagens/imagem-padrao.jpg");

    return `
      <div class="ticket-item">
        <div class="thumb">
          <img src="${imagemPrincipal}" alt="${produto.nome}">
        </div>
        <div class="down-content">
          <h3>${produto.nome}</h3>
          <p>Preço: R$${produto.preco.toFixed(2)}</p>
          <p class="entrega"><i class="fa fa-clock-o"></i> ${produto.entrega}</p>
          <button class="btn-ver" onclick="verDetalhes(${i})">VER DETALHES</button>
        </div>
      </div>
    `;
  }).join('');
}

window.addEventListener("DOMContentLoaded", listarProdutos);
