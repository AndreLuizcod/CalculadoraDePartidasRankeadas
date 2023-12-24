let jogador = "Hércules do Gueto"
let nivel = " "
let vitoria = 100
let derrota = 5
let resultado


function calcularVitorias(){
    
     resultado = vitoria - derrota    
}


if(derrota > vitoria){
    calcularVitorias()
        console.log("SEU RANK É Ferro !! VOCÊ NÃO TEM VITÓRIAS OU SUAS DERROTAS SÃO MAIORES QUE SUAS VITÓRIAS!! \nVitórias = 0 ")
        return ""
    }


definirNivel()   

function definirNivel(){

calcularVitorias()

    
 if(resultado <= 10){
        nivel = "Ferro"
    }else if (resultado <= 20){
            nivel = "Bronze"  
        }else if(resultado <= 50){
                nivel = "Prata"
            }else if(resultado <= 80){
                   nivel = "Ouro"
                }else if(resultado <= 90){
                        nivel = "Diamante"
                    }else if(resultado <= 100){
                            nivel = "Lendário"
                        }else if(resultado >= 101){
                            nivel = "Imortal"
                            }
console.log("O Herói " + jogador + " tem " + vitoria + " vitórias e tem " + derrota + " derrotas, com uma pontuação de: " + resultado + "\nSeu nível é: " + nivel)
}
                    

