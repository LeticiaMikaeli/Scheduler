function addFuncionario(){
    const tabela = document.getElementById("tabela");
      tabela.style.display = "table";
}

function enviarTabela() {
  const checkboxes = document.querySelectorAll("#tabela input[type='checkbox']");
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const turnos = { M: "Manhã", T: "Tarde", N: "Noite" };

 
  const resultado = {};
  dias.forEach((dia, idx) => {
    resultado[dia] = { M: false, T: false, N: false };
  });

  checkboxes.forEach(cb => {
    if (cb.checked) {
      const dia = dias[cb.dataset.dia];
      const turno = cb.dataset.turno;
      resultado[dia][turno] = true;
    }
  });

  //Tabela
  let html = "<table border='1' cellspacing='0' cellpadding='5'>";
  html += "<thead><tr><th>Dia</th><th>Manhã</th><th>Tarde</th><th>Noite</th></tr></thead><tbody>";

  dias.forEach(dia => {
    html += `<tr>
      <td>${dia}</td>
      <td>${resultado[dia].M ? "⭐" : ""}</td>
      <td>${resultado[dia].T ? "⭐" : ""}</td>
      <td>${resultado[dia].N ? "⭐" : ""}</td>
    </tr>`;
  });

  html += "</tbody></table>";

 
  document.getElementById("resultado").innerHTML = html;
}
