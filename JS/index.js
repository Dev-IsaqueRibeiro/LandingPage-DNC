var arrowRight = window.document.getElementById("seta-direita");
var Lucas = window.document.getElementById("Lucas");
var Beatriz = window.document.getElementById("Beatriz");
var Joao = window.document.getElementById("Joao");
var Mariana = window.document.getElementById("Mariana");
var Ricardo = window.document.getElementById("Ricardo");
var Ana = window.document.getElementById("Ana");
var arrowLeft = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
    Lucas.style = "display:none";
    Beatriz.style = "display:none";
    Joao.style = "display:none";
    Mariana.style = "display:flex";
    Ricardo.style = "display:flex";
    Ana.style = "display:flex";
    arrowRight.style = "display:none";
    arrowLeft.style = "display:flex";
}

function RolarParaEsquerda() {
    Lucas.style = "display:flex";
    Beatriz.style = "display:flex";
    Joao.style = "display:flex";
    Mariana.style = "display:none";
    Ricardo.style = "display:none";
    Ana.style = "display:none";
    arrowRight.style = "display:flex";
    arrowLeft.style = "display:none";
}

var formData = {
    Name: document.querySelector('input[name="Name"]').value,
    Email: document.querySelector('input[name="Email"]').value,
    Phone: document.querySelector('input[name="Phone"]').value,
};

// Função para Aplicar Máscara de Telefone
function formatTell(input) {
    // Remove todos os caracteres não numéricos
    var telefone = input.value.replace(/\D/g, "");

    // Insere os parenteses, espaço e hífen nos lugares corretos
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    // Atualiza o valor do campo de entrada com o telefone formatado
    input.value = telefone;
}

document.getElementById("myForm").onsubmit = function (e) {
    e.preventDefault(); // Impede o reload da página

    var formData = new FormData(document.getElementById("myForm"));

    fetch(
        "https://script.google.com/macros/s/AKfycbxaF1n0vPWnyPZIFcb_l_dprvAKNxtdkKudF_-DW3uOovcDDsd9vWftH9LtxiofFDWz/exec",
        {
            method: "POST",
            body: formData,
        }
    )
        .then((response) => response.text())
        .then((data) => {
            console.log("Resposta do servidor:", data);
            if (data.includes("Success")) {
                // Redireciona o usuário para a página desejada
                window.open("https://ird-portfolio.vercel.app/", "_blank");
            } else {
                alert("Erro ao enviar os dados!");
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Erro ao conectar ao servidor!");
        });
};

// Criado e Desenvolvido por: Isaque Ribeiro Duarte → 04/11/2024
