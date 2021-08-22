import HelloWorld,{GoodMorning} from "./components/HelloWorld";
//named import in the curly brackets

import "./App.css";
function sayName() {
  return "Andrew";
}

function App() {
  const name="Andrew";
  return (
    <div className="sample-class" style={{fontSize:"40px",backgroundColor:"red"}}>
      
      <HelloWorld name="Andrew" lastName="Morales" role="student" />
      <GoodMorning/>
    </div>
  
  );
}







export default App;
