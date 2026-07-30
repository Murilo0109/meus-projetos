function verificar(){
    let nome = window.document.getElementById("nome").value;
    console.log(nome);

    let ano = Number(window.document.getElementById("idade").value);
    console.log(ano);

    let atual = new Date().getFullYear();
    let idade = atual-ano;

    let res = window.document.getElementById("resutador")
    res. innerHTML = (`Olá ${nome} você tem ${idade}, Anos ` )

  if(idade >=18){
        res. innerHTML += (' você e maior de idade.');
    }else if(ano >= 2026){
       res.innerHTML += window.alert('ERRO!!');
    }else{
        res.innerHTML += (' você e menor de idade')
    }
  }
 