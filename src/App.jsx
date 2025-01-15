import "./App.css"
import Header from "./components/header"
import Beneficios from "./components/beneficios"
import About from "./components/about"

function App() {
  return (
    <>
      <Header />
      <Beneficios />
      <About title="Quem sou eu?"></About>
    </>
  )
}

export default App
