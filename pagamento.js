function mostrarCartao() {
  document.getElementById('formulario-cartao').style.display = 'block';
  document.getElementById('pix-area').style.display = 'none';
}

function mostrarPix() {
  document.getElementById('formulario-cartao').style.display = 'none';
  document.getElementById('pix-area').style.display = 'block';

  const texto = "Pagamento TrendWear " + Math.random().toString(36).substring(7);
  const url = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(texto) + "&size=200x200";
  document.getElementById('qrCode').src = url;
}

function pagarCartao() {
  // Simulação de validação de pagamento
  const nome = document.getElementById('nome').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const cvv = document.getElementById('cvv').value.trim();

  if (!nome || !numero || !cvv) {
    alert('Por favor, preencha todos os campos do cartão.');
    return;
  }

  alert('Pagamento realizado com sucesso!');

  // Limpa o carrinho e redireciona para o catálogo
  localStorage.removeItem('carrinho');
  window.location.href = 'catalogo.html';
}

