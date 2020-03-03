let name = prompt("Olá! Qual é o seu nome?", "name")
document.write("Olá " + name + " ")

let jogar = confirm("Deseja jogar?")

if (jogar == true) {
    let pergunta1 = prompt("Qual é a capital da França? \n 1- Nice \n 2- Paris \n 3-Budapeste  ")
    let pergunta2 = prompt("Qual é a capital do Brasil? \n 1- Salvador \n 2- Brasilia \n 3-São Paulo")
    let pergunta3 = prompt("Qual é a capital dos Estados Unidos? \n 1- Nova York \n 2- Washington \n 3-Maiami")

    switch (pergunta1) {

        case "1":
            
            document.write(" Resposta errada <br>")
            break;

        case "2":
            document.write(" Resposta certa <br>")
            break;

        case "3":
           
            document.write(" Resposta errada <br> ")

            break;

        default:
            alert("Digite um número para a opção: 1, 2, ou 3.");
            break;
    }



    switch (pergunta2) {

        case "1":
            document.write("Resposta errada <br>")
            break;

        case "2":
            document.write("Resposta certa <br>")

            break;

        case "3":
            document.write("Resposta errada <br>")

            break;

        default:
            alert("Digite um número para a opção: 1, 2, ou 3.");
            break;
    }


    switch (pergunta3) {

        case "1":
            document.write("Resposta errada <br>")
            break;

        case "2":
            document.write("Resposta certa <br>")
            break;

        case "3":
            document.write("Resposta errada <br>")

            break;

        default:
            alert("Digite um número para a opção: 1, 2, ou 3.");
            break;
    }
}
else {
    mensagemSair = "Agradecemos a sua visita"
    alert(mensagemSair)
}







