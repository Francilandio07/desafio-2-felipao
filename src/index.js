function calculaNivel(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = ""

    switch(true){
        case vitorias <= 10:
            nivel = "Ferro";
            break;
        case vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias <= 100:
            nivel = "Lendário";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
        default:
            nivel = "";
            break;

    }

    console.log("O Herói tem de saldo de "+saldoVitorias+" está no nível de "+nivel);
}

let vitorias = 102;
let derrotas = 4;

calculaNivel(vitorias, derrotas);