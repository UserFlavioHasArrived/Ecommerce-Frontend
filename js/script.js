function salvar(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let usuario = {
        nome: nome,
        idade: idade,
        email: email,
        senha: senha
    }
    localStorage.setItem("Usuario", usuario);
    alert("usuáio salvo com sucesso." + usuario);
}


let nome = "Flavio";
let idade = 31;
const cidade = "Criciuma";
let a = 2;
let b = 2;
let soma = a + b;
//sout
console.log("Nome:"+ nome);
console.log("Idade:"+ idade);
console.log("Soma:"+ (a+b));
console.log("Soma:"+soma);

let pessoa ={
    nome: "Flavio",
    idade: 31,
    email:"flavio@teste.com",
    senha:"testando"
}
console.log("Nome:"+pessoa.nome);
console.log("Idade:"+pessoa.idade);
console.log(pessoa);