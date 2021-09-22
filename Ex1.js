function verificarNome(nomeId){
	let aux = document.getElementById(nomeId).value;
	aux = aux.toUpperCase();
	aux = aux.trim();
	while(aux.includes("  ")){
	aux = aux.replace("  "," ");
	}
	if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, white)";
		}else{if(aux.includes("0")||aux.includes("1")||aux.includes("2")||aux.includes("3")||aux.includes("4")||
			aux.includes("5")||aux.includes("6")||aux.includes("7")||aux.includes("8")||aux.includes("9")){
			document.getElementById(nomeId + "Erro").innerHTML = "Voce digitou caracteres inválidos.";
		    document.getElementById(nomeId + "Erro").style.color = "red";
		    document.getElementById(nomeId).style.border = "2px solid red"
			document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
			}else{
				document.getElementById(nomeId + "Erro").innerHTML = "";
			    document.getElementById(nomeId + "Erro").style.color = "green";
			    document.getElementById(nomeId).style.border = "2px solid green"
			    document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
			    }}
	document.getElementById(nomeId).value = aux;
}

function verificarCPF(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes(".")){
        aux = aux.replace(".","");
    }
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, white)";
    }else{
            if(aux.length>11||aux.length<11&&aux.length>0){
                document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
                document.getElementById(nomeId+"Erro").style.color = "red";
                document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
                document.getElementById(nomeId).style.border = "2px solid red";
            }else{
                if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
                    aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")){
                        document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
                        document.getElementById(nomeId).style.border = "2px solid red";
                    }else{
                        if(aux.length==11){
                            aux = aux.substring(0,3)+"."+aux.substring(3,6)+"."+aux.substring(6,9)+"-"+aux.substring(9);
                            document.getElementById(nomeId+"Erro").innerHTML = "";
                            document.getElementById(nomeId+"Erro").style.color = "green";
                            document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
                            document.getElementById(nomeId).style.border = "2px solid green";
                        }
                    }
                }
    
        document.getElementById(nomeId).value = aux;
    }
}
            
function verificarRG(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes(".")){
        aux = aux.replace(".","");
    }
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, white)";
    }else{
            if(aux.length>10||aux.length<10&&aux.length>0){
                document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
                document.getElementById(nomeId+"Erro").style.color = "red";
                document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
                document.getElementById(nomeId).style.border = "2px solid red";
            }else{
                if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
                    aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")){
                        document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                        document.getElementById(nomeId+"Erro").style.color = "red";
                        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
                        document.getElementById(nomeId).style.border = "2px solid red";
                    }else{
                        if(aux.length==10){
                            aux = aux.substring(0,2)+"."+aux.substring(2,5)+"."+aux.substring(5,8)+"-"+aux.substring(8);
                            document.getElementById(nomeId+"Erro").innerHTML = "";
                            document.getElementById(nomeId+"Erro").style.color = "green";
                            document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
                            document.getElementById(nomeId).style.border = "2px solid green";
                        }
                    }
                }
    
        document.getElementById(nomeId).value = aux;
    }
}
function verificarTelefone(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes(" ")){
	aux = aux.replace(" ","");
	}
    while(aux.includes("-")){
        aux = aux.replace("-","");
    }
    while(aux.includes("(")){
        aux = aux.replace("(","");
    }
    while(aux.includes(")")){
        aux = aux.replace(")","");
    }
    if(aux==""){
		document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
		document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, white)";
    }else{
        if(aux.length>11||aux.length<11&&aux.length>0){
            document.getElementById(nomeId+"Erro").innerHTML = "O número de caracteres é inválido.";
            document.getElementById(nomeId+"Erro").style.color = "red";
            document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
            document.getElementById(nomeId).style.border = "2px solid red";
        }else{
            if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
                aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")){
                    document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                    document.getElementById(nomeId+"Erro").style.color = "red";
                    document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
                    document.getElementById(nomeId).style.border = "2px solid red";
                }else{
                    if(aux.length==11){//(21)99999-9999
                        aux = "("+aux.substring(0,2)+")"+aux.substring(2,7)+"-"+aux.substring(7);
                        document.getElementById(nomeId+"Erro").innerHTML = "";
                        document.getElementById(nomeId+"Erro").style.color = "green";
                        document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
                        document.getElementById(nomeId).style.border = "2px solid green";
                    }
                }
            }
        }
    document.getElementById(nomeId).value = aux;
}
function verificarEndereco(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    while(aux.includes("  ")){
        aux = aux.replace("  "," ");
    }
    if(aux==""){
    document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
    document.getElementById(nomeId+"Erro").style.color = "red";
    document.getElementById(nomeId).style.border = "2px solid red";
    document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, white)";
    }else{
        if(aux.includes("0")||aux.includes("1")||aux.includes("2")||aux.includes("3")||aux.includes("4")||
            aux.includes("5")||aux.includes("6")||aux.includes("7")||aux.includes("8")||aux.includes("9")){
            document.getElementById(nomeId + "Erro").innerHTML = "Voce digitou caracteres inválidos.";
            document.getElementById(nomeId + "Erro").style.color = "red";
            document.getElementById(nomeId).style.border = "2px solid red"
            document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
        }else{
            document.getElementById(nomeId + "Erro").innerHTML = "";
            document.getElementById(nomeId + "Erro").style.color = "green";
            document.getElementById(nomeId).style.border = "2px solid green"
            document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
        }
    }
  document.getElementById(nomeId).value = aux;
}
function verificarNumero(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    if(aux==""){
    document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
    document.getElementById(nomeId+"Erro").style.color = "red";
    document.getElementById(nomeId).style.border = "2px solid red";
    document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, white)";
    }else{
            document.getElementById(nomeId+"Erro").innerHTML = "";
            document.getElementById(nomeId+"Erro").style.color = "green";
            document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
            document.getElementById(nomeId).style.border = "2px solid green";
            }
    document.getElementById(nomeId).value = aux;
}
function verificarComplemento(nomeId){
    let aux = document.getElementById(nomeId).value;
    aux = aux.trim().toUpperCase();
    if(aux==""){
        document.getElementById(nomeId+"Erro").innerHTML = "Preencha o campo vazio ao lado."
        document.getElementById(nomeId+"Erro").style.color = "red";
        document.getElementById(nomeId).style.border = "2px solid red";
    }else{
        if(aux.includes("A")||aux.includes("B")||aux.includes("C")||aux.includes("D")||aux.includes("E")||aux.includes("F")||aux.includes("G")||aux.includes("H")||aux.includes("I")||aux.includes("J")||aux.includes("K")||aux.includes("L")||aux.includes("M")||
            aux.includes("N")||aux.includes("O")||aux.includes("P")||aux.includes("Q")||aux.includes("R")||aux.includes("S")||aux.includes("T")||aux.includes("U")||aux.includes("V")||aux.includes("W")||aux.includes("X")||aux.includes("Y")||aux.includes("Z")){
                document.getElementById(nomeId+"Erro").innerHTML = "";
                document.getElementById(nomeId+"Erro").style.color = "green";
                document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, green)";
                document.getElementById(nomeId).style.border = "2px solid green";
            }else{
                document.getElementById(nomeId+"Erro").innerHTML = "Voce digitou caracteres inválidos."
                document.getElementById(nomeId+"Erro").style.color = "red";
                document.getElementById(nomeId).style.backgroundImage = "linear-gradient(to right, white, white, white, white, white, crimson)";
                document.getElementById(nomeId).style.border = "2px solid red";
            }
        }
    document.getElementById(nomeId).value = aux;
}