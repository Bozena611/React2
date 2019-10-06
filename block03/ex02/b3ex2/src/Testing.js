

const App = () => {

  const [text, setText] = useState('');
  const [done, setDone] = useState('false');
  /*const [noText, setNoText] = useState("no text provided!")*/

  const handleTextChange = (e) => setText(e.target.value)
  const handleOnSubmit = (e) => setDone('true')

  return (
    <div>
      <form className="form" onSubmit={event => {
        event.preventDefault();
        setText();
      }}>
        <input 
          onChange = {handleTextChange}
          type="text"
          name="text" 
          placeholder="Write something" 
          value={text}/>
        <button onSubmit={handleOnSubmit}>Submit</button>
      </form>
      <h1>{text}</h1>
     {/*{done ?<h1>{text}</h1> : <h1>{noText}</h1>}*/}
   </div>
    )
}

export default App;