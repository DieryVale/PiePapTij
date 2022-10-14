
function aleat (max,min)
{
    return Math.floor(Math.random()*(max - min + 1) + min )
}

//falta poner el ganador 
let pc = aleat(3,1) ;
let nombre = prompt('Dijite su nombre de jugador')
 let n = Number(prompt('A jugar: 1 Piedra, 2 Papel, 3 Tijera, Dijite la opcion "si escoge otra opción que no está PERDERA'));


switch (n)
{
    case 1:
        alert(nombre + ' : Piedra');         
        switch(pc)
        {
            case 1:
                alert('pc: Piedra');
                break;
            case 2:
                alert('pc: Papel');
                break;
            case 3:
                alert('pc: Tijera');
                break;
        }
       
        break;
    case 2:
        alert(nombre +': Papel');
        
        switch(pc)
        {
            case 1:
                alert('pc: Piedra');
                break;
            case 2:
                alert('pc: Papel');
                break;
            case 3:
                alert('pc: Tijera');
                break;
        }
        
        break;        
    case 3:
        alert(nombre + ': Tijera') ;       

        switch(pc)
        {
            case 1:
                alert('pc: Piedra');
                break;
            case 2:
                alert('pc: Papel ');
                break;
            case 3:
                alert('pc: Tijera');
                break;
        }
        
        break;        
    default:
        alert('PIERDES');
}

if (n == pc)
{
    document.write('\n Empate');
}

else if ((n == 1 && pc == 3) || (n == 2 && pc == 1 )|| (n==3  && pc== 1))
{
    document.write('Bien jugado \n');
    document.write('\n Ganaste');
}
else
{
    document.write('\n Perdiste');
}
