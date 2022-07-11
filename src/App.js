import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [img, setImg] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  
  const onChangeImg = function (evento) {
    setImg(evento.target.value)
  }

  const onClickBoton = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)
  });
  }

  return (
    <div className="App">
      
      <select onChange={onChangeImg}>
        <option value="fire">Niña en LLamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">Aliens</option>
        <option value="smart">Inteligente</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Filosiraptor</option>
      </select><br />

      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br />
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br />
      <button onClick={onClickBoton}> Exportar </button>


      <div className="meme" >
        <span>{linea1}</span> <br />
        <span >{linea2}</span> 
        <img id="meme" src={`/memes/${img}.jpg`} />
      </div>

    </div>
  );
}

export default App;
