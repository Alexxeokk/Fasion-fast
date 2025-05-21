// Atualiza o contador do carrinho no header
function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const contadorElement = document.getElementById("cart-count-header");
  if (contadorElement) {
    contadorElement.textContent = carrinho.length;
    contadorElement.style.display = carrinho.length > 0 ? 'inline-block' : 'none';
  }
}

// Calcula o total do pedido
function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => total + item.preco * (item.quantidade || 1), 0);
}

// Renderiza os produtos do carrinho na tabela
function renderizarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const tbody = document.getElementById("carrinho-produtos");
  const totalPedido = document.getElementById("total-pedido");
  tbody.innerHTML = "";

  if (carrinho.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Seu carrinho está vazio.</td></tr>`;
    totalPedido.textContent = "0,00";
    return;
  }

  carrinho.forEach((produto, index) => {
    const quantidade = produto.quantidade || 1;
    const subtotal = produto.preco * quantidade;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="produto-info">
        <img src="${produto.imagem || ''}" alt="${produto.nome}" />
        <span>${produto.nome}</span>
      </td>
      <td>
        <input type="number" min="1" value="${quantidade}" data-index="${index}" class="quantidade-input" />
      </td>
      <td>R$ ${produto.preco.toFixed(2).replace('.', ',')}</td>
      <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
      <td><button class="remover-btn" data-index="${index}">REMOVER</button></td>
    `;
    tbody.appendChild(tr);
  });

  totalPedido.textContent = calcularTotal(carrinho).toFixed(2).replace('.', ',');

  // Eventos para remover produtos
  document.querySelectorAll(".remover-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      removerDoCarrinho(idx);
    });
  });

  // Eventos para alterar quantidade
  document.querySelectorAll(".quantidade-input").forEach(input => {
    input.addEventListener("change", () => {
      const idx = input.dataset.index;
      let valor = parseInt(input.value);
      if (isNaN(valor) || valor < 1) valor = 1;
      atualizarQuantidade(idx, valor);
    });
  });
}

// Remove um produto do carrinho
function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

// Atualiza a quantidade de um produto
function atualizarQuantidade(index, quantidade) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[index].quantidade = quantidade;
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

window.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();
  renderizarCarrinho();
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
    return;
  }

  // Aqui você pode implementar a lógica de finalização, como salvar pedido no backend
  // Por enquanto, vamos só limpar o carrinho e redirecionar para a página de entrega

  // Limpar carrinho
  localStorage.removeItem('carrinho');

  // Atualizar contador no header
  atualizarContadorCarrinho();

  // Mostrar mensagem de confirmação
  alert('Compra finalizada com sucesso! Você será redirecionado para a página de entrega.');

  // Redirecionar para página de entrega
  window.location.href = 'entrenga.html'; // Corrija o nome da página se precisar
});

