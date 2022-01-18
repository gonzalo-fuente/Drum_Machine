const Display = ({ triggeredDrum }) => {
  return ( 
    <div className="mt-10 mx-auto text-center text-4xl border-2 border-blue-500 h-12 w-72 sm:col-span-2 sm:w-auto sm:mx-4">
      <h2 id="display" className="">{ triggeredDrum }</h2>
    </div>
   );
}
 
export default Display;