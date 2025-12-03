// STACK 1
function salvarStack1() {
    const dados = {
        subida: true,
        rpm_medio: document.getElementById("valorA").value,
        peso_veiculo: document.getElementById("valorB").value,
        tipo_terreno: "stack1"
    };

    enviarDados(dados);
}

// STACK 2
function salvarStack2() {
    const dados = {
        subida: false,
        rpm_medio: document.getElementById("temperatura").value,
        peso_veiculo: document.getElementById("pressao").value,
        tipo_terreno: "stack2"
    };

    enviarDados(dados);
}

// STACK 3
function salvarStack3() {
    const dados = {
        subida: false,
        rpm_medio: document.getElementById("frequencia").value,
        peso_veiculo: document.getElementById("amplitude").value,
        tipo_terreno: "stack3"
    };

    enviarDados(dados);
}

// FUNÇÃO QUE ENVIA PARA O BACKEND
function enviarDados(dados) {
    fetch("http://127.0.0.1:8000/api/variaveis/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Enviado:", data);
        alert("Dados enviados!");
    })
    .catch(error => console.error("Erro:", error));
}
