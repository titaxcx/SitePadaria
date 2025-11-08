const dados = JSON.parse(localStorage.getItem('pedido'));
const resumo = document.getElementById('resumoPedido');
const kmInput = document.getElementById('km');
const taxaEntregaEl = document.getElementById('taxaEntrega');
let taxaEntrega = 0;

resumo.innerHTML = `
    <b>Cliente:</b> ${dados.nome}<br>
    <b>Telefone:</b> ${dados.telefone}<br>
    <b>Produtos:</b> ${dados.produtos.join(', ')}<br>
    <b>Total:</b> R$ ${dados.total}
  `;

kmInput.addEventListener('input', () => {
  const km = parseFloat(kmInput.value) || 0;
  if (km <= 5) taxaEntrega = 3;
  else taxaEntrega = 3 + Math.floor((km - 5) / 5) * 5;
  taxaEntregaEl.textContent = `Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}`;
});

document.getElementById('enviar').addEventListener('click', () => {
  const pagamento = document.getElementById('pagamento').value;
  const km = kmInput.value || '0';
  const totalFinal = (parseFloat(dados.total) + taxaEntrega).toFixed(2);

  const mensagem = `
          Novo Pedido Padoca da Villa* 
          -------------------------
          Cliente: ${dados.nome}
          Telefone: ${dados.telefone}
          Pedido: ${dados.produtos.join(', ')}
          Total Produtos: R$ ${dados.total}
          Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}
          Distância: ${km} km
          Pagamento: ${pagamento}
          -------------------------
          Total Final: R$ ${totalFinal}
    `;

  const url = `https://wa.me/5515991197725?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
});