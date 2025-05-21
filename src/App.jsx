import { useState } from 'react'
import './App.css'
import { anagramChecker } from './logic/anagram_checker_logic'

function App() {
  const [word1, setWord1] = useState("") 
  const [word2, setWord2] = useState("") 
  const [showMessage, setShowMessage] = useState(false)
  const [result, setResult] = useState(false)
  
  const onSubmitWord = (event) => {
    event.preventDefault()
    console.log(event.target.wordInput1.value)
    console.log(event.target.wordInput2.value)
    const result = anagramChecker(word1, word2)
    setResult(result)
    console.log(result)
    setShowMessage(true)
  }

  const onInputChange1 = (event) => {
    setWord1(event.target.value)
    setShowMessage(false)
    }
  const onInputChange2 = (event) => {
    setWord2(event.target.value)
    setShowMessage(false)
    }



  return (
    <>

    <form onSubmit={onSubmitWord}> 
      <h1>Anagram Checker</h1> 
      <div className="input-box">  
        <input type="text" value={word1} id="wordInput1" onChange={onInputChange1} placeholder="First word"/>
      </div>  
      <div className="input-box">  
        <input type="text" value={word2} id="wordInput2" onChange={onInputChange2}placeholder="Second word"/>
      </div>  
      <div>  
        <button type="submit">Submit</button>
      </div>
    </form>

    <div>
    {showMessage ? <p className="empty-line">{(result) ? <p>Yes its an anagram</p> : <p>No its not an anagram</p>} </p> : null}
    </div>

    </>
  )
}

export default App

