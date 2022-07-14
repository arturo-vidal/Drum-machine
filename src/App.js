import './App.css';
import Box from './Box';

const sounds=[
  {
    key: "Q",
    id:"Open HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "W",
    id:"Closed HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  },
  {
    key: "E",
    id:"Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "A",
    id:"Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    key: "S",
    id:"Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    id:"Kick & hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "Z",
    id:"Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    key: "X",
    id:"Rim",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    key: "C",
    id:"Kick 2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  }
];


function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="drums">
          {sounds.map((sound)=>(<Box iD={sound.id} text={sound.key} audio={sound.url}/>))}
        </div>
          <div id="container">
            <div id="display">
              <h1>DRUM MACHINE</h1>
            </div>
            <img src="https://www.pngkey.com/png/full/219-2191333_drum-kit-sprite-007-drum-sprite.png" alt="drimset img"/>
          </div>
      </div>
    </div>
  );
}

export default App;
