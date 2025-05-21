const produtos = [
  {
    nome: "VESTIDO ONÇA",
    preco: 255.00,
    entrega: "CHEGARÁ ATÉ QUINTA FEIRA",
    local: "Praia Grande, São Paulo",
    imagens: [
      "ImagensFemininas/imagens.1vestidos/vestido1.png.webp",
      "ImagensFemininas/imagens.1vestidos/vestido2.png.webp",
      "ImagensFemininas/imagens.1vestidos/vestido3.png"
    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO TROPICAL",
    preco: 455.00,
    entrega: "CHEGARÁ EM 3 DIAS",
    local: "Nova York, Estados Unidos",
    imagens: [
      "ImagensFemininas/imagens.2vestidos/vestido2.png",
      "ImagensFemininas/imagens.2vestidos/vestido1.png",
      "ImagensFemininas/imagens.2vestidos/vestido3.png"
    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO FLORAL",
    preco: 165.00,
    entrega: "CHEGARÁ AMANHÃ",
    local: "Avenida Paulista, São Paulo",
    imagens: [
      "ImagensFemininas/imagens.3vestidos/vestido1.png",
      "ImagensFemininas/imagens.3vestidos/vestido2.png",
      "ImagensFemininas/imagens.3vestidos/vestido3.png"
    ],
    detalhes: "detalhes.html"
  },

  // novos produtos 
  {
    nome: "VESTIDO DECOTE",
    preco: 200.00,
    entrega: "CHEGARÁ EM 4 DIAS",
    local: "Resende Rio de Janeiro",
    imagens: [
      "ImagensFemininas/imagens.4vestidos/vestido1.png",
      "ImagensFemininas/imagens.4vestidos/vestido2.png",
      "ImagensFemininas/imagens.4vestidos/vestido3.png"
    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO VERDE EM JEANS",
    preco: 255.00,
    entrega: "CHEGARÁ EM DAQUI UMA SEMANA",
    local: "Lisboa Portugual",
    imagens: [
      "ImagensFemininas/imagens.5vestidos/vestido1.png",
      "ImagensFemininas/imagens.5vestidos/vestido2.png",
      "ImagensFemininas/imagens.5vestidos/vestido3.png",
    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO ACQUA TERROSO",
    preco: 200.00,
    entrega: "CHEGARÁ EM 10 DIAS",
    local: "Copacabana Rio de Janeiro",
    imagens: [
      "ImagensFemininas/imagens.6vestidos/vestido1.png",
      "ImagensFemininas/imagens.6vestidos/vestido2.png",
      "ImagensFemininas/imagens.6vestidos/vestido3.png",

    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO FOLHAGEM MARINHO",
    preco: 155.00,
    entrega: "CHEGARÁ EM DUAS SEMANA",
    local: "Blumenal Santa Catarina",
    imagens: [
      "ImagensFemininas/imagens.7vestidos/vestido1.png",
      "ImagensFemininas/imagens.7vestidos/vestido2.png",
      "ImagensFemininas/imagens.7vestidos/vestido3.png",
    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO AZUL MARINHO",
    preco: 190.00,
    entrega: "CHEGARÁ QUINTA FEIRA",
    local: "Avenida Paulista São Paulo",
    imagens: [
      "ImagensFemininas/imagens.8vestidos/vestido1.png",
      "ImagensFemininas/imagens.8vestidos/vestido2.png",
      "ImagensFemininas/imagens.8vestidos/vestido3.png",

    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO MIDI CISNES AZUL",
    preco: 210.00,
    entrega: "CHEGARÁ EM 3 DIAS",
    local: "Campinas São Paulo",
    imagens: [
      "ImagensFemininas/imagens.9vestidos/vestido1.png",
      "ImagensFemininas/imagens.9vestidos/vestido2.png",
      "ImagensFemininas/imagens.9vestidos/vestido3.png",

    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO MIDI EM VISCOSE",
    preco: 350.00,
    entrega: "CHEGARÁ EM 5 DIAS",
    local: "Florianópolis Santa Catarina",
    imagens: [
      "ImagensFemininas/imagens.10vestidos/vestido1.png",
      "ImagensFemininas/imagens.10vestidos/vestido2.png",
      "ImagensFemininas/imagens.10vestidos/vestido3.png",

    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO CROPPED EM VISCOSE",
    preco: 280.00,
    entrega: "CHEGARÁ EM 2 DIAS",
    local: "Porto Alegre Rio Grande do Sul",
    imagens: [
      "ImagensFemininas/imagens.11vestidos/vestido1.png",
      "ImagensFemininas/imagens.11vestidos/vestido2.png",
      "ImagensFemininas/imagens.11vestidos/vestido3.png",

    ],
    detalhes: "detalhes.html"
  },
  {
    nome: "VESTIDO PRETO EM PAETÊ",
    preco: 320.00,
    entrega: "CHEGARÁ EM UMA SEMANA",
    local: "Salvador Bahia",
    imagens: [
      "ImagensFemininas/imagens.12vestidos/vestido1.png",
      "ImagensFemininas/imagens.12vestidos/vestido2.png",
      "ImagensFemininas/imagens.12vestidos/vestido3.png"
    ],
    detalhes: "detalhes.html"
  }
];


function verDetalhes(index) {
  const produto = produtos[index];
  localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
  window.location.href = produto.detalhes;
}

function listarProdutos() {
  const container = document.getElementById("produtos-container");
  container.innerHTML = produtos.map((produto, i) => `
    <div class="ticket-item">
      <div class="thumb">
        <img src="${produto.imagens[0]}" alt="${produto.nome}">
      </div>
      <div class="down-content">
        <h3>${produto.nome}</h3>
        <p>Preço: R$${produto.preco.toFixed(2)}</p>
        <p class="entrega"><i class="fa fa-clock-o"></i> ${produto.entrega}</p>
        <button class="btn-ver" onclick="verDetalhes(${i})">VER DETALHES</button>
      </div>
    </div>
  `).join('');
}

window.addEventListener("DOMContentLoaded", listarProdutos);






