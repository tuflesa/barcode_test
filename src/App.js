import React, {useState} from 'react';
import { useBarcode } from 'react-barcodes';

function Barcode({id}) {
  const {inputRef}  = useBarcode({
    value: id,
    options: {
      format: "ean13",
      flat: true,
      height: 60,
      // width: 1.2,
      fontSize: 16
    }
  });

  return <svg id="barcode-canvas" ref={inputRef}/>;
};

const App = () => {
  const [data, setData] = useState('');
  const [showBarcode, setShowBarcode] = useState(false);

  const hadleChange = (event) => {
    setData(event.target.value);
  }

  // const handleImprimir = () => {
  //   setShowBarcode(!showBarcode);
  // }

  const handleImprimir = () => {
    setShowBarcode(!showBarcode);
    // var container = document.getElementById("div-svg");
    // // var mySVG = document.getElementById("barcode-canvas");
    // var width = "100%";
    // var height = "100%";
    // var printWindow = window.open('', 'PrintMap',
    // 'width=' + width + ',height=' + height);
    // printWindow.document.writeln(container.innerHTML);
    // printWindow.document.close();
    // printWindow.print();
    // printWindow.close();
  }

  return (
      <div>
        <label htmlFor="codigo">Código :</label>
        <input type="text" 
               name="codigo"
               value={data}
               onChange={hadleChange} />
        <button onClick={handleImprimir}>Imprimir</button>
        <div id='div-svg'>
          {showBarcode && <Barcode id={data.padStart(12,'0')}/>}
        </div>
      </div>
  )
}

export default App;
