//Barra de Pesquisa
function filtrarProdutos() {
    const termo = document.getElementById("busca").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto");
    
    produtos.forEach(produto => {
        const nome = produto.querySelector("h3").innerText.toLowerCase();
        produto.style.display = nome.includes(termo) ? "block" : "none";
    });
}


let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
  mostrarCarrinho(); // abrir o painel automaticamente
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  const totalCarrinho = document.getElementById('total-carrinho');
  const quantidade = document.getElementById('quantidade-carrinho');

  if (!listaCarrinho || !totalCarrinho || !quantidade) return;

  listaCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.onclick = () => removerDoCarrinho(index);
    li.appendChild(btn);
    listaCarrinho.appendChild(li);
  });

  totalCarrinho.textContent = total.toFixed(2);
  quantidade.textContent = carrinho.length;
}

function mostrarCarrinho() {
  const painel = document.getElementById('painel-carrinho');
  if (painel) {
    painel.style.display = painel.style.display === 'block' ? 'none' : 'block';
  }
}

function finalizarCompra() {
  window.location.href = "pagamento.html";
}


// Atualiza carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);

