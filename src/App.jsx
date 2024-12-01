import { useRef } from 'react'

function App() {
  const textRef = useRef()
  const respRef = useRef()

  const handleSubmit = async (e) => {
    alert(`submitted ${textRef.current.value}`)

    // fetch("") will fill in once deployed
  }

  return (
    <>
      <h1>What is your name?</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type='text' ref={textRef}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <h1 ref={respRef}></h1>
    </>
  )
}

export default App
