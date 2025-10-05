import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing">
      <div className="overlay">
        <h1 className="company-name">GreenNest</h1>
        <p className="tagline">Bringing nature into your home with curated, easy-care houseplants.</p>
        <Link className="btn primary" to="/products">Get Started</Link>
      </div>
    </div>
  )
}


