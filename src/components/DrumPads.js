import { useEffect } from "react";
import DrumPad from "./DrumPad";

const DrumPads = ({ bank, playSound, setTriggeredDrum, controls }) => {

  /* useEffect Hook to listen the Keyboard events */
  useEffect(() => {

    document.addEventListener('keydown', handleKeyPress);

    return() => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [controls]);

  const handleKeyPress = (e) => {
    const keySound = bank.filter(sound => sound.keyCode === e.keyCode);
      if (keySound.length) {
        playSound(keySound[0].keyTrigger);
        setTriggeredDrum(keySound[0].id);
      }
  };
  
  return ( 
    <div className="mt-10 grid grid-cols-3 gap-y-4 justify-items-center sm:w-64 sm:justify-self-start sm:mt-0">
      { bank.map((sound) => {
        return (
        <DrumPad 
          key= { sound.id } 
          sound={ sound } 
          playSound={ playSound }
          setTriggeredDrum ={ setTriggeredDrum }
        />
        )
      }) }
    </div>
   );
}
 
export default DrumPads;