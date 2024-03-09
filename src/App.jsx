import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

    <Counter></Counter>


      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click 1</button>

      <button onClick={handleClick2}>Click 2</button>
<br />
      <button onClick={() =>{alert('third click')}}>Click 3</button>

      <button onClick={() => addToFive(3)}>Click 4</button>
    </>
  )
}

export default App
