document.addEventListener("DOMContentLoaded", () => {
  const nome = localStorage.getItem("usuarioNome");
  const email = localStorage.getItem("usuarioEmail");

  if (nome && email) {
    document.querySelector(".profile").innerHTML = `
      <p><b>${nome}</b></p>
      <p>${email}</p>
      <i class="fa fa-user-circle" style="font-size: 40px; color: orange; margin-top: 10px;"></i>
    `;
  } });
