import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-bold text-2xl text-center">
      <h1 className="text-4xl text-blue-500">Vite + React + Tailwind CSS</h1>
    </div>
  );
}

export default App
