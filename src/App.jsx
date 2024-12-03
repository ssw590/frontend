import { useRef, useState } from 'react'

function SearchItem(props) {
  console.log(props)

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width:"100%"}}>
      <p>{props.result.name}</p>
      <p>{props.result.price}</p>
    </div>
  )
}

function App() {
  const searchRef = useRef()
  const displayRef = useRef()
  const [results, setResults] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const handleSearch = async (e) => {

    e.preventDefault()

    const queryString = new URLSearchParams({
      search: searchRef.current.value
    })

    const response = await fetch(backendUrl + '?' + queryString.toString())

    const items = await response.json()

    console.log(items)

    // XSS
    displayRef.current.innerHTML = "Search results for: " + searchRef.current.value
    
    setResults(items)
  }

  return (
    <>
      <h1>Online market place</h1>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='search for a product...' ref={searchRef}></input>
        <button type='submit'>Search</button>
      </form>
      <div>
        <h2 ref={displayRef}></h2>
        {results.map((result) => {
          return <SearchItem result={result}></SearchItem>
        })}
      </div>
    </>
  )
}

export default App
