// https://jscomplete.com/p/star-match/embed?preview=1

// .game {
//   max-width: 500px;
//   margin: 0 auto;
// }

// .body {
//   display: flex;
// }

// .help {
//   color: #666;
//   margin: 10px;
//   text-align: center;
// }

// .left {
//   text-align: center;
//   width: 50%;
//   border: thin solid #ddd;
// }

// .right {
//   text-align: center;
//   padding: 10px;
//   width: 50%;
//   border: thin solid #ddd;
// }

// .star {
// 	display: inline-block;
//   margin: 0 15px;
// }

// .star:after {
//   content: "\2605";
//   font-size: 45px;
// }

// .number {
//   background-color: #eee;
//   border: thin solid #ddd;
//   width: 45px;
//   height: 45px;
//   margin: 10px;
//   font-size: 25px;
// }

// .number:focus, .number:active {
//   outline: none;
//   border: thin solid #ddd;
// }

// .timer {
// 	color: #666;
//   margin-top: 3px;
//   margin-left: 3px;
// }

// .game-done .message {
//   font-size: 250%;
//   font-weight: bold;
//   margin: 15px;
// }

const StarsDisplay = (props) => {
  return (<>
    {  utils.range(1, props.count).map(starId => <div className="star" key={starId} />)}
  </>);
}

const PlayNumber = (props) => {
  return (<button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}>{props.number}</button>);
}

const PlayAgain = props => (
  <div className="game-done">
    <div className="message"
      style={{ color: props.gameStatus === 'won' ? 'green' : 'red' }}
    >
      {props.gameStatus === 'won' ? 'Nice' : 'Game over'}
    </div>
    <button
      onClick={() => props.onClick()}>Play Again</button>
  </div>
);

const StarMatch = props => {
  const [gameId, setGameId] = useState(1);

  return (
    <Game key={gameId} newGame={() => setGameId(gameId + 1)} />
  )
};

const Game = (props) => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 ? 'won' : (secondsLeft === 0 ? 'lost' : 'active');

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timeoutId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  });

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  }

  const onNumberClick = (number, currentStatus) => {
    debugger;
    if (currentStatus === 'used' || secondsLeft === 0) {
      return;
    }

    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(num => !newCandidateNums.includes(num));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums, 9));
    }
  }

  // const resetGame = () => {
  //   setAvailableNums(utils.range(1, 9));
  //   setCandidateNums([]);
  //   setStars(utils.random(1, 9));
  //   setSecondsLeft(10);
  // }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ?
            (<PlayAgain onClick={props.newGame} gameStatus={gameStatus} />) :
            <StarsDisplay count={stars} />
          }
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => (
            <PlayNumber
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

ReactDOM.render(<StarMatch />, mountNode);
