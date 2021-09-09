function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id'. 'foto') 
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >=0 && idade < 21){
               //Criança
               img.setAttribute('src', './img/crianca-H')
           }else if(idade < 22){
                //Jovem
                img.setAttribute('src', './img/jovem-H')
           }else if(idade < 50){
                //adulto
           }else{
               //Idoso
           }
              
       }else if (fsex[1].checked){
           genero = 'Mulher'
           if(idade >=0 && idade < 21){
                //Criança
            }else if(idade < 22){
                //Jovem
            }else if(idade < 50){
                //adulto
            }else{
                //Idoso
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}