import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Main from './components/Main'
import Footer from './components/Footer'
import Start from './components/Start'

function App() {
  const [point, setPoint] = useState(0)
  const [start, setStart] = useState(false)
  const [formulaeProp, setFormulae] = useState("");
  const handleClick=(p)=>{
    setPoint(point + parseInt(p))
  }
  const menuHandle=(e)=>{
    let selected=e.target.innerText
    switch(selected){
      case "QUICK START":
        setStart(true);
      break;
      case "OPTIONS":
        console.log("options");
      break;
      case "EXIT":
        self.close();
      break;
      // formulae works
      default:
        setStart(true)
        setFormulae(selected)
    }
  }
  return (
    <>
      {!start?
        <Start menuHandle={menuHandle}/>
        :
      <section>
        <div className='container'>
          <Heading tPoint={point}/>
          <Main handleClick={handleClick} formulaeProp={formulaeProp}/>
          {/* <Footer/> */}
        </div>
      </section>
      }
    </>
  )
}

export default App
