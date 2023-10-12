import './App.css';
import Logo from './componentes/logo/index.js'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola]


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          { textoOpcoes.map ( (texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) ) }       
        </ul>
      </header>
    </div>
  );
}

export default App;
