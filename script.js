// URL base do backend FastAPI
const API_URL = "http://127.0.0.1:8000";

// ===========================
// TESTE
// ===========================
document.getElementById("formTeste").addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
        data_realizado: new Date(document.getElementById("data_realizado").value).toISOString(),
        satisfatoriedade: document.getElementById("satisfatoriedade").value === "true",
        numero_piezos: parseInt(document.getElementById("numero_piezos").value)
    };

    enviarDados("/testes/", payload);
});

// ===========================
// VARIÁVEIS
// ===========================
document.getElementById("formVariavel").addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
        subida: document.getElementById("subida").value === "true",
        rpm_medio: parseInt(document.getElementById("rpm_medio").value),
        peso_veiculo: parseFloat(document.getElementById("peso_veiculo").value),
        tipo_terreno: document.getElementById("tipo_terreno").value
    };

    enviarDados("/variaveis/", payload);
});

// ===========================
// APROVAÇÕES
// ===========================
document.getElementById("formAprovacao").addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
        amperagem: parseFloat(document.getElementById("amperagem").value),
        tensao: parseFloat(document.getElementById("tensao").value),
        voltagem: parseFloat(document.getElementById("voltagem").value),
        corrente_convertida: parseFloat(document.getElementById("corrente_convertida").value),
        bateria_recarregada: parseFloat(document.getElementById("bateria_recarregada").value)
    };

    enviarDados("/aprovacoes/", payload);
});

// ===========================
// FUNÇÃO GENÉRICA PARA POST
// ===========================
async function enviarDados(endpoint, payload) {
    try {
        const response = await fetch(API_URL + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const erro = await response.text();
            alert("Erro ao enviar: " + erro);
            return;
        }

        const data = await response.json();
        console.log("Enviado com sucesso:", data);
        alert("Dados enviados com sucesso!");

    } catch (err) {
        console.error("Erro:", err);
        alert("Erro ao conectar ao servidor.");
    }
}
