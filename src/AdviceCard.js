import React, { useState, useEffect } from 'react'
import axios from 'axios'
import divider from './images/pattern-divider.svg'
import dice from './images/icon-dice.svg'

const AdviceCard = () => {
  //this line uses the useState hook to create a state variable called advice with an initial value of an empty string, and a setAdvice function to update the advice state.
  const [advice, setAdvice] = useState("");

  //this is an asynchronous function that uses axios to make a GET request to an external API at "https://api.adviceslip.com/advice". It then extracts the advice from the response and updates the advice state using the setAdvice function.
  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  }

  //this useEffect hook calls the getAdvice function when the component mounts for the first time (since the dependency array is empty []). This ensures that the component displays a random advice on the initial render.
  useEffect(() => {
    getAdvice();
  }, []);

  //this is the JSX code that gets returned by the AdviceCard component. It renders a main element with a card class and contains the following child elements described below

  //A p element that displays the ID of the advice (which is extracted from the API response)
  //An h2 element that displays the actual advice (also extracted from the API response).
  //An img element that displays a divider image
  //A div element with a dice class that contains an img element with an icon of a dice, this element is clickable and calls the getAdvice function when clicked, which fetches and displays a new random advice.
  return (
    <main className='card'>
      <p>Advice #{advice.id}</p>
      <h2>{advice.advice}</h2>
      <img src={divider} className='divider' alt='divider' />
      <div className='dice' onClick={getAdvice}>
        <img src={dice} alt='dice' />
      </div>
    </main>
  )
}

export default AdviceCard