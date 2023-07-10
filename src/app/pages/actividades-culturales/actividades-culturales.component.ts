import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades-culturales',
  templateUrl: './actividades-culturales.component.html',
  styleUrls: ['./actividades-culturales.component.css'],
})
export class ActividadesCulturalesComponent {
  articulos = [
    {
      titulo:
        'Fútbol Juvenil: Un emocionante enfrentamiento contra el Colegio San Juan',
      autor: 'Martín Encina',
      fecha: '16-2-23',
      imagen:
        'https://th.bing.com/th/id/OIP.O-mFVrWBHWt1c4KkiEPWEgHaEN?pid=ImgDet&rs=1',
      contenido: `El pasado sábado, nuestro equipo de fútbol juvenil se enfrentó en un emocionante partido al Colegio San Juan. El ambiente estaba lleno de emoción y energía mientras los jugadores daban lo mejor de sí en el campo. Aunque fue un encuentro reñido, nuestro equipo demostró habilidades excepcionales y trabajo en equipo, logrando anotar el gol de la victoria en los últimos minutos del partido. Este emocionante enfrentamiento resalta la importancia del deporte en el desarrollo de nuestros estudiantes y cómo la pasión por el fútbol puede unir y fortalecer la comunidad escolar. Nuestro equipo se ha estado preparando arduamente durante toda la temporada, dedicando horas de entrenamiento y esfuerzo para mejorar sus habilidades técnicas y tácticas. Cada jugador ha demostrado un gran compromiso y determinación, lo cual se reflejó en su rendimiento en el partido contra el Colegio San Juan. Además, el apoyo y la energía de nuestros seguidores también fueron clave para impulsar al equipo hacia la victoria. Estamos orgullosos del desempeño de nuestros jugadores y esperamos seguir viendo su crecimiento y éxito en el fútbol juvenil. El deporte no solo les brinda la oportunidad de desarrollar habilidades físicas y técnicas, sino que también promueve valores como el trabajo en equipo, la disciplina y la perseverancia. Seguiremos apoyando y alentando a nuestros jóvenes deportistas a medida que avanzan en su trayectoria en el fútbol juvenil y en otros deportes. ¡Felicitaciones a nuestro equipo de fútbol juvenil por su destacado desempeño en el partido contra el Colegio San Juan!`,
      mostrarContenido: false,
    },
    {
      titulo: 'Concurso de Debate: Entrevista con la ganadora, Laura López',
      autor: 'Natalia Moreno',
      fecha: '18-2-23',
      imagen:
        'https://th.bing.com/th/id/OIP.acDXv2IiUNPSYXFjUVgyAQHaE8?pid=ImgDet&rs=1',
      contenido: `En el reciente concurso de debate que se llevó a cabo en nuestro colegio, Laura López se destacó como la ganadora indiscutible. Tuvimos la oportunidad de entrevistar a Laura y conocer más sobre su experiencia y estrategias de debate. Durante la entrevista, Laura compartió su pasión por el arte de la persuasión y cómo el debate le ha brindado habilidades de comunicación, pensamiento crítico y confianza en sí misma. Su victoria en el concurso es un testimonio del esfuerzo y la dedicación que nuestros estudiantes demuestran en el desarrollo de habilidades importantes más allá del aula. Laura nos contó que comenzó a participar en concursos de debate desde una edad temprana y que ha dedicado innumerables horas a la investigación, el análisis y la práctica de argumentos sólidos. Estos concursos no solo le han permitido perfeccionar sus habilidades de oratoria, sino que también le han enseñado a escuchar y comprender diferentes perspectivas. Durante el concurso en nuestro colegio, Laura demostró una capacidad excepcional para presentar argumentos claros y convincentes, respaldados por evidencia sólida. Su dominio del lenguaje y su capacidad para expresarse de manera elocuente impresionaron tanto al jurado como a sus compañeros competidores. En la entrevista, Laura también compartió consejos para los estudiantes interesados en participar en debates. Recalcó la importancia de la preparación exhaustiva, la confianza en uno mismo y la capacidad para escuchar y responder de manera efectiva a los argumentos contrarios. Además, destacó la importancia de investigar y comprender a fondo el tema en debate, así como la capacidad de adaptarse a diferentes estilos y enfoques de debate. Laura es un ejemplo inspirador para nuestros estudiantes y demuestra que la dedicación y el compromiso pueden llevar al éxito en cualquier campo. Estamos orgullosos de tener a Laura como parte de nuestra comunidad educativa y esperamos ver cómo continúa cosechando éxitos en futuros concursos de debate. ¡Felicitaciones, Laura, por tu logro destacado en el concurso de debate!`,
      mostrarContenido: false,
    },
    {
      titulo: 'La Web del Colegio: Potenciando la comunicación con Angular',
      autor: 'Alberto Fernández',
      fecha: '3-3-23',
      imagen:
        'https://th.bing.com/th/id/OIP.iPx35Ee7tz-ef2HZwws0KQHaDq?pid=ImgDet&rs=1',
      contenido: `La implementación de Angular en la web del colegio ha sido un gran avance en la comunicación y la interacción con nuestra comunidad educativa. Con esta tecnología, hemos logrado crear una plataforma moderna y receptiva que ofrece una experiencia mejorada para estudiantes, padres y personal educativo. Desde la publicación de noticias y eventos hasta el acceso a recursos educativos, la web del colegio ahora es más eficiente y fácil de usar. Angular ha demostrado ser una herramienta poderosa y versátil que impulsa nuestro compromiso de brindar una educación de calidad en un entorno digitalmente avanzado. Con Angular, hemos logrado una interfaz de usuario atractiva y altamente interactiva que permite a los usuarios navegar de manera fluida por el contenido del sitio web. Además, la arquitectura modular de Angular ha facilitado la gestión y actualización de nuestro contenido, lo que nos permite mantenernos al día con las últimas noticias y eventos en la comunidad escolar. Gracias a las características avanzadas de Angular, hemos podido implementar funciones personalizadas, como la integración de un calendario escolar interactivo y un sistema de notificaciones instantáneas para mantenera los usuarios informados sobre eventos importantes y cambios en la programación. Estas características adicionales han mejorado significativamente la comunicación y la colaboración entre estudiantes, padres y personal educativo. Además, Angular ha facilitado la optimización del rendimiento de la web del colegio, lo que garantiza una carga rápida y una experiencia fluida para los usuarios, independientemente del dispositivo o navegador que utilicen. También hemos podido implementar medidas de seguridad sólidas para proteger la privacidad y la integridad de los datos de nuestros usuarios. En resumen, la adopción de Angular ha transformado nuestra web del colegio en una plataforma moderna, eficiente y altamente funcional. Estamos emocionados de seguir explorando las capacidades de Angular y aprovechar al máximo esta tecnología en futuros proyectos y mejoras. Con cada nueva implementación, nos acercamos aún más a nuestra visión de proporcionar una experiencia educativa en línea de primera clase para nuestra comunidad escolar. Estamos comprometidos a seguir evolucionando y adaptándonos a medida que las tecnologías y las necesidades de nuestros usuarios continúan cambiando. Angular ha sido un aliado valioso en este proceso y esperamos utilizarlo para continuar potenciando la comunicación y el aprendizaje en nuestro colegio. ¡Estamos emocionados por el futuro y las posibilidades que Angular nos ofrece!`,
      mostrarContenido: false,
    },
    {
      titulo:
        'El Equipo de Baloncesto del Centro: Un análisis de los talentosos jugadores',
      autor: 'Rodrigo Santamaría',
      fecha: '4-3-23',
      imagen:
        'https://th.bing.com/th/id/R.c434a12609ad117ac97e15435d83337d?rik=%2bK5SDi6FmyOiJQ&pid=ImgRaw&r=0',
      contenido: `El equipo de baloncesto del centro ha demostrado un rendimiento excepcional en los últimos meses. El análisis minucioso de los cinco jugadores clave ha revelado su talento, habilidades y contribuciones al éxito del equipo. Juan Pérez, un jugador hábil y ágil, muestra una destreza asombrosa en el manejo del balón y es un experto en tiros de tres puntos. Marta Gómez, una jugadora versátil y estratégica, domina la defensa y lidera la distribución del juego. Sus habilidades de pase y visión de juego son impresionantes, lo que le permite encontrar rápidamente a sus compañeros de equipo en posiciones ventajosas. Carlos López es conocido por su habilidad para intimidar a los oponentes en la pintura con su envergadura y bloqueos oportunos. Además, su capacidad para capturar rebotes clave ha sido fundamental para asegurar segundas oportunidades para el equipo. Laura Sánchez, una jugadora con una habilidad excepcional para el juego interior, es una amenaza constante en la zona pintada. Su capacidad para finalizar cerca del aro y su habilidad para recibir y convertir pases difíciles la convierten en una jugadora crucial en la ofensiva del equipo. Por último, Marcos Rodríguez se destaca por su tiro exterior y su habilidad para penetrar hacia el aro. Su velocidad y agilidad le permiten superar a los defensores y crear oportunidades de anotación para sí mismo y sus compañeros de equipo. En general, el equipo de baloncesto del centro se beneficia enormemente de la combinación de las habilidades individuales de estos jugadores clave. La química y la conexión en la cancha son evidentes, lo que ha llevado a una serie de victorias impresionantes en los últimos juegos. Además del rendimiento individual, es importante destacar la mentalidad y el espíritu de equipo de cada jugador. La solidaridad, la comunicación y la confianza en sus compañeros de equipo son valores fundamentales que se reflejan en el juego fluido y efectivo del equipo. Como entrenador, estoy extremadamente orgulloso de estos jugadores y de todo el equipo. Han demostrado un compromiso y una dedicación excepcionales tanto en los entrenamientos como en los partidos. Cada día, se esfuerzan por mejorar y superar los desafíos que se les presentan. Sus logros no solo son el resultado de su talento natural, sino también de su trabajo arduo y su pasión por el baloncesto. Espero con ansias ver el crecimiento continuo de este equipo y presenciar más momentos emocionantes en los próximos juegos. ¡Felicitaciones a nuestros talentosos jugadores de baloncesto por su destacado desempeño y por representar al centro con orgullo y determinación!`,
      mostrarContenido: false,
    },
    {
      titulo:
        'Competición de Atletismo Juvenil: Un encuentro emocionante de talento sub-15',
      autor: 'Iosu Gómez',
      fecha: '5-3-23',
      imagen:
        'https://th.bing.com/th/id/R.e6b161b52e3d114ccd1bd90ee48aece7?rik=w1J6afJmuiBXLA&pid=ImgRaw&r=0',
      contenido: `El colegio se prepara para recibir la competición de atletismo juvenil más emocionante del año. Atletas sub-15 de toda la ciudad se reunirán en nuestras instalaciones para competir en una variedad de disciplinas atléticas, desde carreras de velocidad hasta saltos y lanzamientos. Este evento es una oportunidad para que nuestros jóvenes atletas muestren su dedicación, entrenamiento y talento en un ambiente de competencia saludable. Estamos orgullosos de nuestros atletas y de la pasión y dedicación que demuestran en cada entrenamiento y competición. Cada uno de ellos ha trabajado arduamente para mejorar sus habilidades y superar sus límites personales. En el evento de atletismo juvenil, los jóvenes competidores tendrán la oportunidad de medirse con otros atletas talentosos de su edad y mostrar sus habilidades en las disciplinas en las que se han especializado. La competencia será intensa y emocionante, con carreras reñidas, saltos impresionantes y lanzamientos de alto nivel. Además de la emoción de la competencia, este evento también promueve valores como la amistad, el respeto y la sana competencia. Los atletas tendrán la oportunidad de establecer nuevas amistades y compartir experiencias con otros jóvenes apasionados por el atletismo. Nuestro colegio se enorgullece de proporcionar un entorno de apoyo y fomento para nuestros atletas. Estamos comprometidos a brindarles las herramientas y el apoyo necesarios para alcanzar sus metas y potenciar su desarrollo atlético. Los jóvenes atletas representan lo mejor de nuestro colegio y estamos emocionados de ver sus logros en la competición de atletismo juvenil. Les deseamos a todos los competidores buena suerte y esperamos un evento lleno de emociones, logros personales y momentos inolvidables. ¡Adelante, atletas sub-15! ¡Demuestren su valía y dejen huella en esta competición de atletismo juvenil!`,
      mostrarContenido: false,
    },
  ];
  selectedCardIndex: number = -1;

  mostrarContenido(index: number) {
    this.articulos.forEach((articulo, i) => {
      articulo.mostrarContenido = i === index && !articulo.mostrarContenido;
      this.selectedCardIndex = index;
    });
  }
}
