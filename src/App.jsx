import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [acces, setacces] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("cacAcces")
  if(token){
    setacces(true)
  }
  
  }, [setacces])
  


  return (
    <>
  {acces?

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
