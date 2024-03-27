import './index.css'

const GameOver = props => {
  const {score, startNewGame} = props
  const onClickPlayAgainBtn = () => {
    startNewGame()
  }
  return (
    <div className="game-over-container">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="title">YOUR SCORE</p>
      <h1 className="score">{score}</h1>
      <button className="play-again-btn" onClick={onClickPlayAgainBtn}>
        <img
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
