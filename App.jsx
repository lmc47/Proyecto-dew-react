import './Hoja-de-estilo/App.css';
import Cabecera from './Componentes/Cabecera';
import Pie from './Componentes/Pie';
import Portada from './Componentes/Portada';
import Destacados from './Componentes/Destacados';

function App() {
  return (
    <div>
      <header>     
        <Cabecera />
      </header>
      <section>
        <Portada />
      </section>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <section>
        <Destacados/>
      </section>
      <footer className="footer">
        <Pie />
      </footer>
    </div>
  );
}

export default App;
