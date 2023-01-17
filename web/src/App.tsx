import './styles/global.css'
import { Habit } from "./components/Habit"

function App() {
  return (
   <>
    <Habit completed={4} />
    <Habit completed={2} />
    <Habit completed={1} />
    <Habit completed={0} />
   </>
  )
}

export default App
