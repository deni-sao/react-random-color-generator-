import ''
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [hex, setHex] = useState(
    randomColor({
      luminosity: 'random',
      hue: 'random',
    }),
  );

  return (
    <div>
      <h1>Random Color Generator</h1>

      <div
        style={{
          width: 400,
          height: 200,
          margin: 'o auto',
          marginLeft: 725,
          marginBottom: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontsize: 80,
          backgroundColor: hex,
        }}
      >
        Generated Color: ${hex}
      </div>

      <button
        onClick={() => {
          const newHex = randomColor({
            luminosity: 'random',
            hue: 'random',
          });

          setHex(newHex);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
