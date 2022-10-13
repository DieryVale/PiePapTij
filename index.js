

let pc = 2;


let jugador = Number(prompt('A jugar: 1 Piedra, 2 Papel, 3 Tijera, Dijite la opcion "si escoge otra opción que no está PERDERA'));


switch (jugador)
{
    case 1:
        alert('Piedra');
        break;
    case 2:
        alert('Papel');
        break;
    case 3:
        alert('Tijera');
        break;
    default:
        alert('PIERDES');
}
