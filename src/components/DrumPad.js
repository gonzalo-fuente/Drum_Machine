const DrumPad = ({ sound, playSound, setTriggeredDrum }) => {
  return ( 
    <button         
      id= { sound.id }
      className="drum-pad mr-2 w-14 h-14 text-base font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded-md shadow ripple hover:shadow-lg hover:bg-blue-700 focus:outline-none"
      onClick={ () => {
        playSound(sound.keyTrigger)
        setTriggeredDrum(sound.id)
        }
      }
    >
      <audio id= { sound.keyTrigger } className="clip" src= { sound.url }/>
      { sound.keyTrigger }
    </button>
  );
}
 
export default DrumPad;