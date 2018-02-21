//Para trabajar co ajax es necesario :
// $(document).ready( () => {
// $('#codigo').on('keypress', function (event) {
//     let codigoBip = $('#codigo').val();
//     if (event.wich === 13) {
//             $.ajax({
//                 url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
//                 type: 'GET',
//                 datatype: 'json',
//                 //Encadena a la consulta, la parte que falta a la url
//                 data: {
//                     'bip': codigoBip
//                 }
//             })
//             .done(function(response){
//                 console.log(response);
//             })
//             .fail(function(error) {
//                 console.log('error');
//             })
//         }
//     })
// })



// $(document).ready(() => {
//     $('#codigo').on('keypress', function (event) {
//         let codigoBip = $('#codigo').val();
//         if (event.which === 13) {
//             $.ajax({
//                 url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
//                 type: 'GET',
//                 datatype: 'json',
//                 data: {
//                     'bip': codigoBip
//                 }
//             }).done(function (response) {
//                 console.log(response);
//                 showInfo(response);
//             }).fail(function (error) {
//                 console.log('error');
//             })
//         }
//     })

// })

// function showInfo(info) {
//     $('#saldo').append(`<h2>${info.saldoTarjeta}</h2>`);
// }


// function showInfo(info) {
//     //Le quito el signo dolar
//     const saldoPeso = info.saldoTarjeta.split('$') [1];
//     //Le saco el punto 3900
//     const saldoPunto = saldoPeso.split('.');
//     const saldoReal = parseInt(saldoPunto.join(''));
//     const tarifaMicro = 660;
//     const tarifaMetro = 760;
//     const saldoFinalMicro = saldoReal - tarifaMicro;
//     const saldoFinalMetro = saldoReal -tarifaMetro;
//     $('#saldo').append(`{saldoReal}`)

//     $('#micro').click(function(){
//         $('#saldo').empty();
//         $('#saldo').append(`<h2>${saldoFinalMicro}</h2>`)
//     })

//     $('#metro').click(function () {
//         $('#saldo').empty();
//         $('#saldo').append(`<h2>${saldoFinalMetro}</h2>`)
//     })
// }



$(document).ready(() => {
    $('#codigo').on('keypress', function (event) {
        let codigoBip = $('#codigo').val();
        if (event.which === 13) {
            $.ajax({
                url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
                type: 'GET',
                datatype: 'json',
                data: {
                    'bip': codigoBip
                }
            }).done(function (response) {
                console.log(response);
                showInfo(response);
            }).fail(function (error) {
                console.log('error');
            })
        }
    })
})
function showInfo(info) {
    // le saco el signo peso 3.900
    const saldoPeso = info.saldoTarjeta.split('$')[1];
    // le saco el punto
    const saldoPunto = saldoPeso.split('.');
    const saldoReal = parseInt(saldoPunto.join(''));
    const tarifaMicro = 660;
    const tarifaMetro = 760;
    const saldoFinalMicro = saldoReal - tarifaMicro;
    const saldoFinalMetro = saldoReal - tarifaMetro;
    $('#saldo').append(`<h2>${saldoReal}</h2>`);
    $('#micro').click(function () {
        $('#saldo').empty();
        $('#saldo').append(`<h2>${saldoFinalMicro}</h2>`);
    })
    $('#metro').click(function () {
        $('#saldo').empty();
        $('#saldo').append(`<h2>${saldoFinalMetro}</h2>`);
    })
}