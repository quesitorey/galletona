import { useState, useEffect } from 'react'
import './App.css'
import dataa from "/phrases.json"
function App() {

  const [ index, setIndex ] = useState(0)
  const [ phrase, setPhrase ] = useState([])
  const images = [ "/imagenes/fondo1.jpg", "/imagenes/fondo2.jpg", "/imagenes/fondo3.jpg", "/imagenes/fondo4.jpg" ]

  let data;
  const randomNum = () => Math.floor(Math.random() * data.length ) + 1;


  const changeIndex = () => {
    if( index < images.length - 1 ) {
      setIndex(Math.floor(Math.random() * images.length))
    }else{
      setIndex(0)
    }

  }

  useEffect(() => {
    getPhrase()
  }, [])

  async function getPhrase() {
    try {
      const res = await fetch(dataa)
      data = await res.json()
      setPhrase(data[randomNum()])
    } catch (err) {
      console.log(err)
    }
  }

  let backStyle = {
    backgroundImage: `url(${images[index]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
  }
  return (
    <>
      <div className="background" style = {backStyle}>
      <div className='box'>
        <p className='phrase'>{phrase.phrase}</p>
        <p className='author'>{phrase.author}</p>
      </div>
      <button
      onClick={() => {changeIndex(), getPhrase()}}
      >Probar mi suerte</button>
      </div>
    </>
  )
}

export default App
