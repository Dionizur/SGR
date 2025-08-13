document.getElementById("coletaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const coleta = {
        malha: document.getElementById("malha").value,
        unidade: document.getElementById("unidade").value,
        tipoResiduo: document.getElementById("tipoResiduo").value,
        quantidade: document.getElementById("quantidade").value,
        endereco: document.getElementById("endereco").value,
        unidadeColeta: document.getElementById("unidadeColeta").value,
        solicitante: document.getElementById("solicitante").value,
        coordenador: document.getElementById("coordenador").value,
        ccResponsavel: document.getElementById("ccResponsavel").value
    };

    let coletas = JSON.parse(localStorage.getItem("coletas")) || [];
    coletas.push(coleta);
    localStorage.setItem("coletas", JSON.stringify(coletas));

    alert("Solicitação enviada com sucesso!");
    this.reset();
});
