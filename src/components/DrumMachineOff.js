const DrumMachineOff = ({ setTriggeredDrum }) => {
  
  setTriggeredDrum('')
  
  return ( 
    <h2 className="mt-10 mx-auto w-72 text-center text-4xl border-2 border-blue-500 sm:mt-0 sm:w-64 sm:mr-5">
      If you want to Rock'n Roll, please turn on the Drum Machine
    </h2>
  );
}
 
export default DrumMachineOff;