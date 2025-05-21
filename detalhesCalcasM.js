window.addEventListener("DOMContentLoaded", () => {
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
  const container = document.getElementById("detalhes-produto");

  if (!produto) {
    container.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  const imagens = produto.imagens || [produto.imagem];

  container.innerHTML = `
    <div class="produto-layout">
      <div class="produto-imagens">
        <img id="imagem-produto" src="${imagens[0]}" alt="${produto.nome}" />
        <div class="dots">
          ${imagens.map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>`).join('')}
        </div>
      </div>
      <div class="produto-info">
        <h2>${produto.nome}</h2>
        <p><strong>Preço:</strong> R$${produto.preco.toFixed(2)}</p>
        <p class="entrega"><i class="fa fa-clock-o"></i> ${produto.entrega}</p>
        <p><strong>Local:</strong> ${produto.local}</p>
        <p class="descricao">Calça confortável, moderna e ideal para todas as ocasiões. Material resistente, corte perfeito e caimento impecável.</p>
        <button class="botao-normal" id="btn-desejos">COMPRAR ★</button>
        <button class="botao-carrinho" id="btn-carrinho">ADICIONAR AO CARRINHO 🛒</button>
        <button class="botao-compra" id="btn-compra-rapida">COMPRAR IMEDIATAMENTE 🗲</button>
      </div>
    </div>
  `;

  // Navegação entre imagens
  const imgElement = document.getElementById("imagem-produto");
  const dots = document.querySelectorAll(".dot");

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      imgElement.src = imagens[index];
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

 // Botões
  document.getElementById("btn-carrinho").addEventListener("click", () => adicionarAoCarrinho(produto));

  // Redirecionar para entrega.html
  document.getElementById("btn-compra-rapida").addEventListener("click", () => {
    window.location.href = "entregarapida.html";
  });

  document.getElementById("btn-desejos").addEventListener("click", () => {
    window.location.href = "entrega.html";
  });
});

function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const index = carrinho.findIndex(item => item.nome === produto.nome);

  if (index !== -1) {
    // Produto já está no carrinho → aumenta a quantidade
    carrinho[index].quantidade = (carrinho[index].quantidade || 1) + 1;
  } else {
    // Produto novo no carrinho
    produto.quantidade = 1;
    carrinho.push(produto);
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
}

function compraRapida() {
  alert("Redirecionando para pagamento...");
  window.location.href = "carrinho.html";
}

function adicionarAosDesejos(produto) {
  let desejos = JSON.parse(localStorage.getItem("desejos")) || [];

  const index = desejos.findIndex(item => item.nome === produto.nome);

  if (index === -1) {
    desejos.push(produto);
    localStorage.setItem("desejos", JSON.stringify(desejos));
    alert("Produto adicionado à lista de desejos!");
  } else {
    alert("Esse produto já está na sua lista de desejos!");
  }
}

function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const contadorElement = document.getElementById("cart-count-header");

  if (contadorElement) {
    contadorElement.textContent = carrinho.length;
    contadorElement.style.display = carrinho.length > 0 ? 'inline-block' : 'none';
  }
}

window.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();

  // seu restante do código...

});

// Quando adicionar ao carrinho, chame:
function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
  atualizarContadorCarrinho();
}
