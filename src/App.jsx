import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='cont'>
  <div>
        <nav id='img'>
        <img src="/images/LauraSmith (1).png"  className='imge'/>
        </nav>
    <>
     <h1 >Laura Smith </h1>
     <p className="job">Frontend Developer</p>
     <small c><a lassName='website'>Laura Smith Website </a></small> 
   </>
   <br></br>
</div>
<div className="btn">
          <a href=' https://accounts.google.com/  ' target='blank'> <button className='email'> <img src="/images/email.jpeg" />Email</button></a>
        <a href='https://www.linkedin.com/'  target='blank'>  <button className='linkedin'><img src="/images/linkedin.jpeg"/> Linkedln</button></a>
        </div>
        <div className="para">
        <p>
          <h2>About</h2> <br></br>
         I am a frontend developer with a particular interest in making thungs simple and automating dailytasks.
         I try to keep up with security and best practices , and am always looking for new things to learn.

        </p>
        <p>
          <h2>Interests</h2> <br></br>
         Food expert, Music scholar, Reader, Internetfanatic, Bacon buff, Enterpreneur,Travel geek, Pop culture ninja, Coffee fanatic.
        </p>
    </div>
    <div className='foot'>
        <footer>
         <a href='https://github.com' target='blank'>   <img src="/images/github.jpeg" height="40px"/>  </a> 
         <a href='https://www.instagram.com/'  target='blank'>  <img src="/images/instagram.jpeg" /></a> 
         <a href='https://www.facebook.com/'  target='blank'>  <img src="/images/facebook.jpeg"/></a> 
         <a href='https://twitter.com/'  target='blank'> <img src="/images/OIP.jpeg"/></a> 
        </footer>
    </div>
    </div>
    </>
  )
}

export default App
