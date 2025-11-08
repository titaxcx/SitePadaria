document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o envio padrão

  // Captura os dados do formulário
  const nome = document.getElementById("nomeCadastro").value;
  const email = document.getElementById("emailCadastro").value;
  const telefone = document.getElementById("telefoneCadastro").value;
  const endereco = document.getElementById("endereco").value;

  // Mostra pop-up
  alert("✅ Cliente cadastrado com sucesso!");

  // Cria a mensagem para o WhatsApp
  const mensagem = `*Novo Cadastro de Cliente*%0A
  *Nome:* ${nome}%0A
  *Email:* ${email}%0A
  *Telefone:* ${telefone}%0A
  *Endereço:* ${endereco}`;

  // Número do WhatsApp para onde será enviado
  const numeroWhatsApp = "5515991197725"; // 

  // Monta o link
  const url = `https://wa.me/${5515991197725}?text=${mensagem}`;

  // Abre o WhatsApp
  window.open(url, "_blank");
});
