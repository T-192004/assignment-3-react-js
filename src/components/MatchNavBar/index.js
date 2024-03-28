import './index.css'

const Navbar = props => {
  const {score, timeLeft} = props
  return (
    <nav className="navbar-container">
      <img
        className="navbar-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="navbar-score-content">
        <li>
          <p className="navbar-score">
            Score: <span className="count">{score}</span>
          </p>
        </li>
        <div className="navbar-time-content">
          <img
            className="navbar-timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <li>
            <p className="count">{timeLeft} Sec</p>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
