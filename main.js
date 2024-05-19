let nome_usuario = "";
let elemento = document.querySelector("#nome_aluno");

while( nome_usuario == ""){
    nome_usuario = prompt("Qual é o seu nome?");
} 

if (nome_usuario == null){
    elemento.textContent = "seja bem vindo";
} else {
    elemento.textContent = nome_usuario;
}