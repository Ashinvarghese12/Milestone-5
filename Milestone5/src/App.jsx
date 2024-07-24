import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx"; 

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    anualInvestment: 300,
    expectedReturn: 8,
    duration: 12,
  });


  const inputIsValid = userInput.duration >= 1;


  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: + newValue,
      }
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
        {!inputIsValid &&<p className="center">Please enter a duration greater than zero</p>}
         {inputIsValid&&<Result input={userInput}/>}
    </>
  )
}

export default App
