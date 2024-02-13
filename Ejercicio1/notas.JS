const obtenerNota = ()=> {
    const input = prompt('Introduce un numero del 1 al 10')


    const notas = parseInt(input)

    if (isNaN(notas) || notas < 1 || notas > 10 || notas === null) {
        alert('Valor no Permitido, introduce un numero del 1 al 10')
    } else {
        let notasFinales
        if(notas >= 1 && notas <= 4) {
            notasFinales = 'SUSPENSO'
        } else if(notas >= 5 && notas <=7) {
            notasFinales = 'APROBADO'
        } else if(notas >= 8 && notas <= 9) {
            notasFinales = 'NOTABLE'
        } else if(notas === 10) {
           notasFinales = 'SOBRESALIENTE'
        }
        alert('Su nota es ' + notasFinales)

    }

}

obtenerNota()