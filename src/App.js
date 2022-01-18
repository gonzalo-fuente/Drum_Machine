import { useState } from "react";
import DrumPads from "./components/DrumPads";
import Controls from "./components/Controls";
import Display from "./components/Display";
import DrumMachineOff from "./components/DrumMachineOff"

function App() {
  
  /* Definition of sound Arrays -> Bank one and two */
  const [bankOne, setBankOne] = useState([
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]);
  
  const [bankTwo, setBankTwo] = useState([
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ]);

  const [controls, setControls] = useState({
    isOn: true,
    volume: 0.75,
    bank: false,
  });

  const [triggeredDrum, setTriggeredDrum] = useState('');
  

  /* Function definitions */

  const playSound = (id) => {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
    sound.volume = controls.volume;
  };

  return (
    <div className="App">
      <h1 className="text-center uppercase text-4xl mb-4 sm:text-6xl">
        Drum Machine
      </h1>
      <div className="mx-auto w-80 py-5 bg-gray-50 sm:w-fit sm:grid sm:grid-cols-2 sm:items-center sm:content-center" id="drum-machine">
        
        <Controls 
          controls={ controls } 
          setControls={ setControls }
          setTriggeredDrum= { setTriggeredDrum }
        />
        
        {controls.isOn ? (
          <>
            <DrumPads 
              bank={ controls.bank ? bankTwo : bankOne } 
              playSound={ playSound }
              setTriggeredDrum={ setTriggeredDrum }
              controls={ controls }
            />
            <Display 
              triggeredDrum={ triggeredDrum }
              controls={ controls }  
            />
          </>
          ) : (
            <DrumMachineOff setTriggeredDrum={ setTriggeredDrum }/>
          )
        }

      </div>
      <footer className="text-right italic text-gray-600 text-sm mt-2">
        by gonz4 Web Designs
      </footer>
    </div>
  );
}

export default App;
