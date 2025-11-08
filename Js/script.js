document.getElementById("calcular").addEventListener("click", function() {
    let produtos = document.querySelectorAll(".produto");
    let quantidades = document.querySelectorAll(".quantidade");
    let total = 0;

    produtos.forEach((produto, index) => {
        if (produto.checked) {
            let preco = parseFloat(produto.getAttribute("data-preco"));
            let qtd = parseInt(quantidades[index].value);
            total += preco * qtd;
        }
    });

    document.getElementById("resultado").textContent = "Total: R$ " + total.toFixed(2);
});

document.getElementById("calcular").addEventListener("click", function() {
    let produtos = document.querySelectorAll(".produto");
    let quantidades = document.querySelectorAll(".quantidade");
    let subtotal = 0;

    produtos.forEach((produto, index) => {
        if (produto.checked) {
            let preco = parseFloat(produto.getAttribute("data-preco"));
            let qtd = parseInt(quantidades[index].value);
            subtotal += preco * qtd;
        }
    });

    document.getElementById("subtotal").textContent = "R$ " + subtotal.toFixed(2);

    let desconto = parseFloat(document.getElementById("desconto").value) || 0;
    let entrega = parseFloat(document.getElementById("entrega").value) || 0;
    let total = subtotal - desconto + entrega;

    document.getElementById("total").textContent = "R$ " + total.toFixed(2);
});
