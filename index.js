
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
        alert(nombre + ': Piedra');         
        switch(pc)
        {
            case 1:
                alert('pc: Piedra');
            case 2:
                alert('pc: Papel');
                break;
            case 3:
                alert('pc: Tijera');
                break;
        }
        document.write('Bien jugado')
        break;
    case 2:
        alert(nombre +': Papel');
        Math.random(1,2,3);
        switch(pc)
        {
            case 1:
                alert('pc: Piedra');
            case 2:
                alert('pc: Papel');
                break;
            case 3:
                alert('pc: Tijera');
                break;
        }
        document.write('Bien jugado')
        break;        
    case 3:
        alert(nombre + ': Tijera') ;
        Math.random(1,2,3);

        switch(pc)
        {
            case 1:
                alert('pc: Piedra');
            case 2:
                alert('pc: Papel ');
                break;
            case 3:
                alert('pc: Tijera');
                break;
        }
        document.write('Bien jugado')
        break;        
    default:
        alert('PIERDES');
}
