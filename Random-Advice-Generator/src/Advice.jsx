import React, { useEffect, useState } from 'react'
import dice from './images/icon-dice.svg'
import patternDividerDesktop from './images/pattern-divider-desktop.svg'
import patternDividerMobile from './images/pattern-divider-mobile.svg'
import './Advice.css'

const Advice = () => {
  const [advice, setAdvice] = useState('A common regret in life is wishing one had the courage to be ones true self.')
  const [id, setId] = useState(118)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchAdvice = async (adviceId) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${adviceId}`, { cache: 'no-store' })
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`)
      const data = await res.json()
      if (data && data.slip) {
        setAdvice(data.slip.advice)
        setId(data.slip.id || adviceId)
      } else if (data && data.message) {
        throw new Error(data.message.text || 'No advice returned')
      }
    } catch (err) {
      console.error(err)
      setError('Could not load advice. Try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdvice(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    const newId = Math.floor(Math.random() * 224) + 1
    fetchAdvice(newId)
  }

  return (
    <div className="container">
      <p className="advice">ADVICE # <span id="num">{id}</span></p>
      <p className="content">"{loading ? 'Loading...' : advice}"</p>
      {error && <p className="error">{error}</p>}
      {/* responsive divider: mobile/desktop */}
      <picture className="divider">
        <source media="(max-width: 570px)" srcSet={patternDividerMobile} />
        <img src={patternDividerDesktop} alt="decorative divider" />
      </picture>
      <div className="badge">
        <button className="dice" onClick={handleClick} aria-label="Get random advice" title="New advice">
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  )
}

export default Advice
