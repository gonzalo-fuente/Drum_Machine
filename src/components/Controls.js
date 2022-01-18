import Toggle from "./Toggle";

const Controls = ({ controls, setControls, setTriggeredDrum }) => {
  return ( 
    <div className="sm:w-64 sm:justify-self-end">
      <form className="grid grid-cols-2 gap-y-4 justify-items-center sm:flex sm:flex-col sm:justify-evenly sm:px-10">
        <div className="flex">
          <label className="mr-2">Power</label>
          <Toggle 
            checked={ controls.isOn }
            onChange={ check => setControls({...controls, isOn: check }) }
          />
        </div>

        <div className="flex">
          <label className="mr-2 sm:mr-4">Bank</label>
          <Toggle 
            checked={ controls.bank } 
            onChange={ (check) => {
              setControls({...controls, bank: check});
              check ? (
                setTriggeredDrum('Smooth Piano Kit')
              ) : (
                setTriggeredDrum('Heater Kit')
              )
              setTimeout(() => {setTriggeredDrum('')}, 1000);
              } 
            } 
          />
        </div>

        <div className="flex col-span-2">
          <label className="mr-2">Volume</label>
          <input 
            className="block"
            type="range" 
            min="0" 
            max="100" 
            value={ controls.volume * 100 }
            onChange={ (e) => {
              setControls({...controls, volume: e.target.value / 100 });
              setTriggeredDrum(`Volume ${e.target.value}%`);
              setTimeout(() => {setTriggeredDrum('')}, 1000);
              }
            }
          />
        </div>
      </form>
    </div>
   );
}
 
export default Controls;