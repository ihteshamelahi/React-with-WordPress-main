import { useState } from "react";
function Hooks() {
  let [counter, userCounter] = useState(7);
  const addValue = () => {
    let newCounter = counter + 1;
    userCounter(newCounter);
  };

  const removeValue = () => {
    userCounter(counter - 1);
  };
  return (
    <>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}
export default Hooks;
