document.addEventListener("DOMContentLoaded", () => {
  const calcularBtn = document.getElementById("calcular");
  const resultado = document.getElementById("resultado");
  const form = document.getElementById("formPedido");
  let total = 0;

  // 🧮 Calcular total
  calcularBtn.addEventListener("click", (e) => {
    e.preventDefault();
    total = 0;

    const produtos = document.querySelectorAll(".produto");
    produtos.forEach((p) => {
      if (p.checked) {
        const preco = parseFloat(p.dataset.preco);
        const qtd = parseInt(p.closest(".produto-item").querySelector(".quantidade").value);
        total += preco * qtd;
      }
    });

    resultado.textContent = "Total: R$ " + total.toFixed(2);
  });

  // 💾 Finalizar pedido
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (!nome || !telefone) {
      alert("Preencha nome e telefone!");
      return;
    }

    const produtosSelecionados = [];
    document.querySelectorAll(".produto").forEach((p) => {
      if (p.checked) {
        const qtd = p.closest(".produto-item").querySelector(".quantidade").value;
        produtosSelecionados.push(`${p.value} (x${qtd})`);
      }
    });

    // Salvar dados no localStorage
    localStorage.setItem("pedido", JSON.stringify({
      nome,
      telefone,
      produtos: produtosSelecionados,
      total: total.toFixed(2)
    }));

    // Redirecionar para a página de pagamento
    window.location.href = "pagamento.html";
  });
});
