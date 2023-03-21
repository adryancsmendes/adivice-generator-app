import React, {useState, useEffect} from 'react'
import axios from 'axios'
import divider from './images/pattern-divider.svg'
import dice from './images/icon-dice.svg'

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <main className='card'>
        <p>Advice #{advice.id}</p>
        <h2>{advice.advice}</h2>
        <img src={divider} className='divider' alt='divider'/>
        <div className='dice' onClick={getAdvice}>
            <img src={dice} alt='dice' />
        </div>
    </main>
  )
}

export default AdviceCard