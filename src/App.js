import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="app">
      <h1 className="title">Conversor de moedas</h1>
      <div className="column">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="column">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="column">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
