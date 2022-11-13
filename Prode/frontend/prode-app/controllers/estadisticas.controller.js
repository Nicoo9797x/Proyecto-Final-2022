window.onload = function(){
    
    var usuario = localStorage.getItem("usuario");
    
    if(usuario == null || usuario == ""){
        alerta_error("Debe loguearse!");
    }

}


function infoPais(pais){

    if (pais == '') {
        sweetAlert('Para Qatar no sólo será un Mundial especial por ser el país sede, sino porque su selección debutará en una Copa del Mundo. Hace rato se prepara para cumplir este sueño. Más precisamente desde 2004, cuando creó la Aspire Academy for Sports Excellence', 'Qatar',
        '<img style="width: 500px;" src="assets/images/estadisticas/selec-qatar.jpg" alt="Smiley face" height="42" width="42">');
    }switch (pais) {
        case 'Qatar':
            sweetAlert('Para Qatar no sólo será un Mundial especial por ser el país sede, sino porque su selección debutará en una Copa del Mundo. Hace rato se prepara para cumplir este sueño. Más precisamente desde 2004, cuando creó la Aspire Academy for Sports Excellence', 'Qatar',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-qatar.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Ecuador':
            sweetAlert('Gustavo Alfaro agarró a semanas de debutar contra Argentina en La Bombonera, en el puesto 63 del Ranking FIFA. Clasificó al Mundial una fecha antes, dejando afuera a selecciones como Colombia y Chile.', 'Ecuador',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-ecuador.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Senegal':
            sweetAlert('Senegal ha roto, por fin, la maldición en los grandes torneos después de levantar la Copa de África el pasado mes de febrero. Allí, demostró una gran madurez como grupo.', 'Senegal',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-senegal.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'PaisesBajos':
            sweetAlert('Louis van Gaal llega a Qatar como capitán de un barco que quiere dejar de ser secundario, en la última gran aventura del técnico holandés. Países Bajos afronta este torneo con la intención de por fin colocarse al lado de los más grandes la historia.', 'Paises Bajos',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-paisesbajos.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Inglaterra':
            sweetAlert('Inglaterra aterrizará en Catar al borde del caos. El descenso en Nations League expuso una realidad: llega al Mundial plagado de dudas, con un técnico cuestionado y una columna vertebral en decadencia. Pese a su buena materia prima, la consagración parece lejana.', 'Inglaterra',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-inglaterra.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Iran':
            sweetAlert('Senegal ha roto, por fin, la maldición en los grandes torneos después de levantar la Copa de África el pasado mes de febrero. Allí, demostró una gran madurez como grupo.', 'Senegal',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-senegal.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Usa':
            sweetAlert('Estados Unidos comienza a disfrutar los frutos de un proceso de crecimiento. La inversión en las estructuras formativas, el desarrollo de la MLS con jugadores jóvenes y la población de origen latinoamericano son parte de la explosión de su fútbol.', 'Estados Unidos',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-usa.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Gales':
            sweetAlert('Gales jugará un Mundial por segunda vez en su historia. La Selección dirigida por Robert Page, y liderada dentro del campo de juego por Gareth Bale, viajará a Qatar a disputar una Copa Del Mundo tras 64 años: su única presencia fue en Suecia 1958.', 'Gales',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-gales.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Argentina':
            sweetAlert('Argentina llega en un inmejorable estado de forma al Mundial. Con títulos bajo el brazo, un grupo unido, una idea consolidada, una comunión total entre los hinchas y el equipo y con 35 partidos invicto. Scaloni logró que la Selección volviera a sus raíces.', 'Argentina',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-argentina.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Arabia':
            sweetAlert('Arabia Saudita jugara su sexto Mundial con la tranquilidad de haber recorrido un sólido camino. Tras ganar invicto su grupo de segunda fase y liderar su zona en la ronda final, por sobre Japón y Australia, el plantel ya trabaja en Abu Dhabi con varios amistosos.', 'Arabia',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-arabia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Mexico':
            sweetAlert('México jugará su Mundial número 17. Es una Selección que no deja de asistir desde 1994. De allí en adelante, nunca se quedó en la fase de grupos. Así como podemos decir que la obsesión es el quinto partido, El Tri es muy eficiente en la primera ronda.', 'Mexico',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-mexico.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Polonia':
            sweetAlert('Para la historia mundialista Polonia es, ante todo, un buen recuerdo setentoso y ochentoso, a partir de los terceros puestos en 1974 y 1982. Un proceso dorado que disfrutó de la seguridad de Zmuda, la clase de Deyna, el talento de Boniek y la puntería de Lato.', 'Polonia',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-polonia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Francia':
            sweetAlert('Francia defenderá título en un Mundial en el que será un equipo completamente distinto al que ganó en Rusia hace cuatro años. La última vez que defendió corona cayó, en Corea 2002, eliminada con estrépito en la primera fase.', 'Francia',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-francia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Australia':
            sweetAlert('Australia llega a su sexto Mundial en pleno recambio generacional y con la ventaja de haber jugado (y entrenado, en altas temperaturas) gran parte de las Eliminatorias en Qatar. Ganó solo dos partidos en la historia del torneo; el último, fue en 2010.', 'Australia',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-australia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Dinamarca':
            sweetAlert('Dinamarca está en constante crecimiento desde la Eurocopa que se jugó en 2021, en la que llegó a semifinales, y se presentará en la Copa del Mundo en un gran momento futbolístico.', 'Dinamarca',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-dinamarca.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Tunez':
            sweetAlert('Túnez jugará en Qatar su segundo Mundial consecutivo y el quinto en las últimas siete ediciones. Va camino a consolidarse como una de las potencias del continente africano. Las Águilas son un equipo que busca hacerse fuerte colectivamente.', 'Tunez',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-tunez.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Esp':
            sweetAlert('En España no hay dudas. La estrella y el líder es su seleccionador: Luis Enrique. El asturiano lidera un proceso de cambio que era muy necesario, y lo hace a su manera. Con su idea, con su estilo, con sus formas y con su grupo. Es la España de Luis Enrique.', 'España',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-esp.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'CostaRica':
            sweetAlert('Costa Rica jugará su sexto Mundial. El tercero de manera consecutiva. Será The Last Dance para su ‘Generación Dorada’: Keylor, Bryan Ruiz, Borges, Joel Campbell, Tejeda y Duarte lograron la gesta histórica en 2014 y estarán en una nueva cita orbital.', 'Costa Rica',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-costarica.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Alemania':
            sweetAlert('Cerrada la etapa de Joachim Löw y tras encadenar sendas decepciones en los últimos grandes eventos (fase de grupos de Rusia 2018 y octavos de la Euro 2020), la llegada al banquillo de Hansi Flick no ha cerrado las dudas de juego y resultados que traía Alemania.', 'Alemania',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-alemania.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Japon':
            sweetAlert('Francia 1998 fue su 1° Mundial. Luego, jugó en todas las ediciones. 3 veces eliminado en zona de grupos y 3 veces en 8°. Jugó 21 partidos mundialistas: 5 triunfos, 5 empates y 11 derrotas. Marcó 18 goles; le convirtieron 26.  Ranking FIFA: 24°', 'Japon',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-japon.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Belgica':
            sweetAlert('Info de Belgica', 'Belgica',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-dinamarca.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Canada':
            sweetAlert('Info de Canada', 'Canada',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-tunez.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Marruecos':
            sweetAlert('Info de Marruecos', 'Marruecos',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-esp.jpg" alt="Smiley face" height="42" width="42">');
            break;
            case 'Croacia':
            sweetAlert('Info de Croacia', 'Croacia',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-francia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Brasil':
            sweetAlert('Info de Brasil', 'Brasil',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-australia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Serbia':
            sweetAlert('Info de Serbia', 'Serbia',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-dinamarca.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Suiza':
            sweetAlert('Info de Suiza', 'Suiza',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-tunez.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Camerun':
            sweetAlert('Info de Camerun', 'Camerun',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-esp.jpg" alt="Smiley face" height="42" width="42">');
            break;
            case 'Portugal':
            sweetAlert('Info de Portugal', 'Portugal',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-australia.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Ghana':
            sweetAlert('Info de Ghana', 'Ghana',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-dinamarca.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Uruguay':
            sweetAlert('Info de Uruguay', 'Uruguay',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-tunez.jpg" alt="Smiley face" height="42" width="42">');
            break;
        case 'Corea':
            sweetAlert('Info de Corea', 'Corea',
            '<img style="width: 500px;" src="assets/images/estadisticas/selec-esp.jpg" alt="Smiley face" height="42" width="42">');
            break;
            
        default:
            break;
    }


    }



function sweetAlert(mensaje, pais, img){
    
   
    Swal.fire({
        
        title: "Informacion de " + pais,
        
        text: mensaje,
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        showConfirmButton: false,
        html: mensaje + '<br>' + img,
        background: '#f5f5fa',           
        });
        
    
}
function alerta_error(mensaje){
    Swal.fire({
        title: "Atencion!",
        text: mensaje,
        icon:'error',
        button:'continuar'
    }).then(function(){
        window.location = 'index.html';
     });
}
/*
function alerta_error(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        button:'continuar'
     }).then(function(){
        window.location = 'index.html';
     });
    }*/