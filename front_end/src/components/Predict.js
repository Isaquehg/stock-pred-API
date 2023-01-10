import '../App.css';
import React, { useState } from "react";
import axios from 'axios';

function Predict () {
  const [open, setOpen] = useState('')
  const [high, setHigh] = useState('')
  const [low, setLow] = useState('')
  const [volume, setVolume] = useState('')

  //variables to export to results page
  const [result, setResult] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { open, high, low, volume }
    
    axios
      .post('/api', params)
      .then((res) => {
        const pred = res.data["close"]
        const parameters = JSON.stringify(params)
        const msg = `Prediction: ${ pred.toFixed(5) }\n Parameters: ${ parameters }`
        alert(msg)
        reset()
        setResult({ pred })
        console.log({ result })
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setOpen('')
    setHigh('')
    setLow('')
    setVolume('')
  }

  return (
    <div className="predict">
      <form onSubmit = { (e) => handleSubmit(e) } className="predict__form">
        <h2>Tesla Ticket</h2>
        <div className="predict__form__group">
          <input
            id="open"
            className="predict__form__input"
            placeholder="Open"
            required
            autoFocus
            min="0"
            max="100000"
            title="OPEN"
            type="number"
            step="0.01"
            value={open}
            onChange = {(e) => setOpen(e.target.value)}
          />
        </div>

        <div className="predict__form__group">
          <input
            id="high"
            className="predict__form__input"
            placeholder="High"
            required
            min="0"
            max="100000"
            step="0.01"
            type="number"
            title="HIGH"
            value={high}
            onChange={(e) => setHigh(e.target.value)}
          />
        </div>

        <div className="predict__form__group">
          <input
            id="low"
            className="predict__form__input"
            placeholder="Low"
            required
            min="0"
            max="100000"
            type="number"
            step="0.01"
            title="LOW"
            value={low}
            onChange={(e) => setLow(e.target.value)}
          />
        </div>

        <div className="predict__form__group">
          <input
            id="volume"
            className="predict__form__input"
            placeholder="Volume"
            required
            min="0"
            max="1000000000"
            type="number"
            step="0.01"
            title="VOLUME"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>

        <div className="predict__form__group">
          <button type="submit" className="predict__form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Predict;