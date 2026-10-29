import { useState } from "react";

function App() {

  let [count, setCount] = useState(1)

  const increment = () => {
    setCount((value) => (value + 1))
  }
  const decrement = () => {
    setCount((value) => (value - 1))
  }
  const reset = () => {
    setCount((value) => (value - value))
  }

  return (
    <div className="flex justify-center items-center flex-col mt-40 gap-2.5">
      <h1 className="font-mono font-bold text-[40px] text-blue-900">Count:<span className="text-cyan-900">{count}</span></h1>
      <button className="font-mono border-2 p-1.25 rounded-[5px] hover:bg-green-600 hover:font-bold active:bg-lime-600" onClick={increment}>Oshirish</button>
      <button className="font-mono border-2 p-1.25 rounded-[5px] hover:bg-red-600 hover:font-bold active:bg-pink-950" onClick={decrement}>Kamaytirish</button>
      <button className="font-mono border-2 p-1.25 rounded-[5px] hover:bg-black hover:font-bold hover:text-amber-50 active:bg-gray-400 active:text-black" onClick={reset}>Qayta Boshlash</button>
    </div>
  )

}

export default App
