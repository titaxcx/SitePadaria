document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form-feedback').addEventListener('submit', (e) => {
    e.preventDefault()

    const numeroLoja = "5515991197725"

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const produtoServico = document.getElementById('select').value
    const avaliacao = document.querySelector("input[name='avaliacao']:checked")?.value || "Não informado"
    const comentarios = document.querySelector("textarea").value
    const recomendaria = document.querySelectorAll(".termos input[type='checkbox']")[0].checked ? "Sim" : "Não"
    const autoriza = document.querySelectorAll(".termos input[type='checkbox']")[1].checked ? "Sim" : "Não"

    let mensagem = `📋 *Novo Feedback Recebido!* \n\n`
    mensagem += `👤 Nome: ${nome}\n`
    mensagem += `📧 Email: ${email}\n`
    mensagem += `📞 Telefone: ${telefone}\n`
    mensagem += `🧁 Produto/Serviço: ${produtoServico}\n`
    mensagem += `⭐ Avaliação: ${avaliacao}\n`
    mensagem += `💬 Comentários: ${comentarios}\n`
    mensagem += `👍 Recomendaria: ${recomendaria}\n`
    mensagem += `📰 Autoriza Publicação: ${autoriza}\n`

    const url = `https://wa.me/${5515991197725}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
  })
})
