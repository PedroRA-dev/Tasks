
const calcularLetra = (numeroDNI) => {
    let letra = letrasDNI.charAt(numeroDNI % 23)
    return letra
}
let letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE'

const input = prompt('introduce tu numero DNI');

if(input.length === 0) {
    alert('No has introducido nada')
}
else if(isNaN(input)) {
    alert('No has introducido un numero')
}
else if(input.length !== 8) {
    alert('No as escrito bien el DNI')
}
else {
    let letraDNI = calcularLetra(input)
    alert(`La letra del DNI es ${letraDNI}`)

}








