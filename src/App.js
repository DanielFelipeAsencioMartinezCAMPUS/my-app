
import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      .<div className='contenedor-principal'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio
        nombre = 'EMMA'
        pais = 'colombia'
        cargo = 'ingeniera de software'
        empresa = 'aerocol'
        testimonio = "Ive always struggled with learning JavaScript. I've taken many courses but course was the one which Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer"
        imagen = 'Emma' 
      />
       <Testimonio
        nombre = 'Shawn Wang'
        pais = 'Singapore'
        cargo = 'ingeniera de software'
        empresa = 'Amazon'
        testimonio ="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        imagen = 'shon' 
      />
      </div>
    </div>
  );
}

export default App;
