import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  const lonney =  [
    {
        nombre:'Bugs Bunny',
        pais:'Estados Unidos',
        imagen:'bugs',
        cargo:'Actor principal',
        empresa:'Looney T',
        testimonio:'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
    },
    {
        nombre:'Demonio de Tazmania',
        pais:'Estados Unidos',
        imagen:'taz',
        cargo:'Actor',
        empresa:'Looney T',
        testimonio:'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
    },
    {
        nombre:'Pato Lucas',
        pais:'Suecia',
        imagen:'lucas',
        cargo:'Actor',
        empresa:'Looney T',
        testimonio:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
    }
  ];

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {lonney.map((item,key)=>(
          <Testimonio
          key={key}
          nombre={item.nombre}
          pais={item.pais}
          imagen={item.imagen}
          cargo={item.cargo}
          empresa={item.empresa}
          testimonio={item.testimonio}
        />
        ))}  
      </div>    
    </div>
  );
}

export default App;
