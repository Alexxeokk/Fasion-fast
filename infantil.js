const produtosInfantil = [
  {
    nome: "Vestido Infantil Soltinho Xadrez Golinha Bege",
    preco: 100.00,
    entrega: "CHEGARÁ EM 3 DIAS",
    local: "São Paulo, SP",
    imagens: [
      "imagensVestidosC/vestido.1/ves1.png",
      "imagensVestidosC/vestido.1/ves2.png",
      "imagensVestidosC/vestido.1/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Vermelho Laíse com Renda",
    preco: 80.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Rio de Janeiro, RJ",
    imagens: [
      "imagensVestidosC/vestido.2/ves1.png",
      "imagensVestidosC/vestido.2/ves2.png",
      "imagensVestidosC/vestido.2/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Rosa Evasê Folhagens em Moletinho",
    preco: 120.00,
    entrega: "CHEGARÁ EM 7 DIAS",
    local: "Curitiba, PR",
    imagens: [
      "imagensVestidosC/vestido.3/ves1.png",
      "imagensVestidosC/vestido.3/ves2.png",
      "imagensVestidosC/vestido.3/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Rosa Curto Marias",
    preco: 90.00,
    entrega: "CHEGARÁ EM 2 DIAS",
    local: "Campinas, SP",
    imagens: [
      "imagensVestidosC/vestido.4/ves1.png",
      "imagensVestidosC/vestido.4/ves2.png",
      "imagensVestidosC/vestido.4/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Azul Evasê Geométrico",
    preco: 110.00,
    entrega: "CHEGARÁ EM 10 DIAS",
    local: "Porto Alegre, RS",
    imagens: [
      "imagensVestidosC/vestido.5/ves1.png",
      "imagensVestidosC/vestido.5/ves2.png",
      "imagensVestidosC/vestido.5/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Evasê Floral Rosê",
    preco: 130.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Salvador, BA",
    imagens: [
      "imagensVestidosC/vestido.6/ves1.png",
      "imagensVestidosC/vestido.6/ves2.png",
      "imagensVestidosC/vestido.6/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Infantil Sereia Rosa",
    preco: 140.00,
    entrega: "CHEGARÁ EM 3 DIAS",
    local: "Recife, PE",
    imagens: [
      "imagensVestidosC/vestido.7/ves1.png",
      "imagensVestidosC/vestido.7/ves2.png",
      "imagensVestidosC/vestido.7/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Infantil Feminino de Alça Verde",
    preco: 120.00,
    entrega: "CHEGARÁ EM 7 DIAS",
    local: "Fortaleza, CE",
    imagens: [
      "imagensVestidosC/vestido.8/ves1.png",
      "imagensVestidosC/vestido.8/ves2.png",
      "imagensVestidosC/vestido.8/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Infantil de Alça Vermelho",
    preco: 90.00,
    entrega: "CHEGARÁ EM 4 DIAS",
    local: "Belo Horizonte, MG",
    imagens: [
      "imagensVestidosC/vestido.9/ves1.png",
      "imagensVestidosC/vestido.9/ves2.png",
      "imagensVestidosC/vestido.9/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Infantil de Alça Azul",
    preco: 150.00,
    entrega: "CHEGARÁ EM 6 DIAS",
    local: "São Luís, MA",
    imagens: [
      "imagensVestidosC/vestido.10/ves1.png",
      "imagensVestidosC/vestido.10/ves2.png",
      "imagensVestidosC/vestido.10/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Infantil de Alça Amarela",
    preco: 100.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Goiânia, GO",
    imagens: [
      "imagensVestidosC/vestido.11/ves1.png",
      "imagensVestidosC/vestido.11/ves2.png",
      "imagensVestidosC/vestido.11/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  },
  {
    nome: "Vestido Tropical Evasê Azul",
    preco: 110.00,
    entrega: "CHEGARÁ EM 8 DIAS",
    local: "Brasília, DF",
    imagens: [
      "imagensVestidosC/vestido.12/ves1.png",
      "imagensVestidosC/vestido.12/ves2.png",
      "imagensVestidosC/vestido.12/ves3.png"
    ],
    detalhes: "detalhesInfantil.html"
  }
];


function verDetalhes(index) {
  const produto = produtosInfantil[index];

  // Garante que tenha imagens como array
  if (!produto.imagens || !Array.isArray(produto.imagens) || produto.imagens.length === 0) {
    produto.imagens = ["imagens/imagem-padrao.jpg"];
  }

  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
  window.location.href = produto.detalhes;
}

function listarProdutos() {
  const container = document.getElementById("produtos-infantil");

  container.innerHTML = produtosInfantil.map((produto, i) => {
    const imagemPrincipal = (produto.imagens && produto.imagens.length > 0) 
      ? produto.imagens[0] 
      : "imagens/imagem-padrao.jpg";

    return `
      <div class="ticket-item">
        <div class="thumb">
          <img src="${imagemPrincipal}" alt="${produto.nome}">
        </div>
        <div class="down-content">
          <h3>${produto.nome}</h3>
          <p>Preço: R$${produto.preco.toFixed(2)}</p>
          <p class="entrega"><i class="fa fa-clock-o"></i> ${produto.entrega}</p>
          <p class="local"><i class="fa fa-map-marker"></i> ${produto.local}</p>
          <button class="btn-ver" onclick="verDetalhes(${i})">VER DETALHES</button>
        </div>
      </div>
    `;
  }).join('');
}

window.addEventListener("DOMContentLoaded", listarProdutos);
