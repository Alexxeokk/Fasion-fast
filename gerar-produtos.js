document.addEventListener("DOMContentLoaded", function () {
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

  const container = document.getElementById("produto-detalhes");

  if (produto) {
    container.innerHTML = `
      <div class="produto-imagens">
        <img src="${produto.imagens[0]}" alt="${produto.nome}" id="imagem-principal" />
        <div class="dots">
          ${produto.imagens.map((img, index) => `
            <span class="dot ${index === 0 ? 'active' : ''}" onclick="trocarImagem('${img}', this)"></span>
          `).join('')}
        </div>
      </div>

    <div class="produto-info">
        <h2>${produto.nome}</h2>
        <p><strong>Preço:</strong> R$${produto.preco.toFixed(2)}</p>
        <p class="info-entrega"><strong>Entrega:</strong> ${produto.entrega}</p>
        <p><strong>Local:</strong> ${produto.local}</p>

        <div class="botoes-compra">
          <button class="btn-comprar">Comprar Agora</button>
          <button class="btn-carrinho">Adicionar ao Carrinho</button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = "<p>Produto não encontrado.</p>";
  }
});

// Função global para trocar a imagem principal e destacar o ponto ativo
function trocarImagem(src, el) {
  document.getElementById("imagem-principal").src = src;
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  el.classList.add('active');
}
