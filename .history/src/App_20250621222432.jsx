import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { flushSync } from 'react-dom'

function App() {
  
  const [acces, setacces] = useState(false)
  const [loading, setloading] = useState(true)

  const checking = async()=>{
    try{
      const res = await axios.get("http://localhost:3000/access")
      // console.log(res.data.acces)
      if(res.data.acces === "granted")
      {
        setloading(false)
      setacces(true)
      console.log("testeins")
      console.log("testeing")
      console.log("testeing")
      console.log("testeingadsfasf")
      }
      else{
       setloading(false)
      }
    }
    catch(err)
    {

    }
  }

  useEffect(() => {
    checking()
  
  }, [setacces , setloading])
  

  

  return (
    <>
  { loading? (<h1>loading</h1>): acces?

(<div class="landing-page">
        <header>
          <div class="container">
            <a href="#" class="logo">Your <b>Website</b></a>
            <ul class="links">
              <li>Home</li>
              <li>About Us</li>
              <li>Work</li>
              <li>Info</li>
              <li>Get Started</li>
            </ul>
          </div>
        </header>
        <div class="content">
          <div class="container">
            <div class="info">
              <h1>Looking For Inspiration</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              <button>Button name</button>
            </div>
            <div class="image">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
            </div>
          </div>
        </div>
      </div>):(<h1>you don't have the Acces</h1>)
  }
    </>
    )
}

export default App
