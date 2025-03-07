function salvar(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    //objeto javascript
    let usuario = {
        nome: nome,
        idade: idade,
        email: email,
        senha: senha
    }
    console.log(usuario);
    //converter o objeto para  json
    localStorage.setItem("Usuario", JSON.stringify(usuario));
    alert("usuáio salvo com sucesso." + usuario);
    let usuarioSalvo = localStorage.getItem("usuario");
    let dados = JSON.parse(usuarioSalvo)
    //converter o json para objeto
    console.log(usuarioSalvo);
    console.log(usuarioSalvo.idade);
    //enviar dados para o backend
   
    fetch(
        "http://localhost:8080/api/users",{
        
         method: "POST",
         Headers: {
            "content-Type":"application/json",
        },
         body: JSON.stringify(usuario),
})
.then((response)=> response.json())
.then((data)=> {console.log("sucesso:", data);


}).catch((error)=>{
    console.error("erro", error)});

document.addEventListener("DOMContentLoaded", function () { carregarCategrias();
});
function carregarCategrias() {
    fetch("htt´://localhost:8080/api/category") //Endpoint do backend
    .then(response => response.json())
    .then(data => { 
        let select = documento.getElementById("category");
        data.forEach(category => {
            let option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            select.appendChild(option);
        });
    })
    .catch(error => console.error("Erro ao carregar categoria"))
}
function salvarProduto(){
    let selectedCategories = 
    Array.from (document.getElementById("category").selectedOptions)
    .map(option =>
    ({ id:parseInt (option.value)}));
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let product = {
        name: name,
        price: price,
        descripton: description,
        imgUrl: imgUrl,
        categories: selectedCategories
    );
    localStorage.setItem("product", JSON.stringify(product)); 
    alert("Produto salvo com sucesso.");
    fetch(
        "http:// lcalhost:8080/api/products", {}
        











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