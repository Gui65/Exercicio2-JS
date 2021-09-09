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
       img.setAttribute('id', 'foto') 
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade >=0 && idade < 12){
               //Criança
               img.setAttribute('src', './img/crianca-H.jpg')
           }else if(idade < 22){
                //Jovem
                img.setAttribute('src', './img/jovem-H.jpg')
           }else if(idade < 50){
                //adulto
                img.setAttribute('src', './img/adulto-H.jpg')
           }else{
               //Idoso
               img.setAttribute('src', './img/idoso-H.jpg')
           }
              
       }else if (fsex[1].checked){
           genero = 'Mulher'
           if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', './img/crianca-M.jpg')
            }else if(idade < 22){
                //Jovem
                img.setAttribute('src', './img/jovem-M.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './img/adulto-M.jpg')
            }else{
                //Idoso
                img.setAttribute('src', './img/idoso-M.jpg')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}