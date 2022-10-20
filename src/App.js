import React, { useState } from 'react'


export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);


  // const [currentIndex, setCurrentIndex] = useState(0)
  // const [quizFinished, setQuizFinished] = useState(false)
  // const [score, setScore] = useState(0)
  // const [showScore, setShowScore] = useState(false);


  const questions = [
    {
      questionText: 'Which type of JavaScript language is',
      answerOptions: [
        { answerText: 'Object-Based', isCorrect: true },
        { answerText: 'Object-Oriented', isCorrect: false },
        { answerText: 'Assembly-language', isCorrect: false },
        { answerText: 'High-level', isCorrect: false },
      ],
    },
    {
      questionText: 'Which one of the following also known as Conditional Expression:',
      answerOptions: [
        { answerText: 'Alternative to if-else', isCorrect: false },
        { answerText: 'immediate if', isCorrect: true },
        { answerText: 'Switch statement', isCorrect: false },
        { answerText: 'If-then-else statement', isCorrect: false },
      ],
    },
    {
      questionText: 'What are the different types of errors in JavaScript?',
      answerOptions: [
        { answerText: 'Load time errors', isCorrect: false },
        { answerText: 'Logical Errors', isCorrect: false },
        { answerText: 'Run time errors', isCorrect: true },
        { answerText: 'All of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'The "function" and "var" are known as:',
      answerOptions: [
        { answerText: 'Keywords', isCorrect: false },
        { answerText: 'Data types', isCorrect: false },
        { answerText: 'Prototypes', isCorrect: false },
        { answerText: 'Declaration statements', isCorrect: true },
      ],
    },
    {
      questionText: 'Which one of the following is the correct way for calling the JavaScript code?',
      answerOptions: [
        { answerText: 'Function/Method', isCorrect: true },
        { answerText: 'Preprocessor', isCorrect: false },
        { answerText: 'Triggering Event', isCorrect: false },
        { answerText: 'RMI', isCorrect: false },
      ],
    },
  ]

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const restart = () => {

    setScore(0)
    setCurrentQuestion(0)
    setClicked(0)
    setShowScore(0)

  }

  const backQuestion = () => {

    if (
      questions[currentQuestion].answer === handleAnswerClick.answerText
    ) {
      setScore(score - 1)
    } setCurrentQuestion(currentQuestion - 1)
  }


  const nextQuestion = () => {
    setClicked(false)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true);
    }
  }

  return (
    <div>
      <span className='header'>JavaScript Quiz Game</span>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <h1>Final Results</h1>
            <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
            </h2>
            <button onClick={(restart)}>Restart</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>

              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answer) => {

                return (

                  <button
                    className={`answer ${clicked && handleAnswerClick.isCorrect ? 'correct' : ''}`}
                    disabled={clicked}
                    key={answer.answerText}
                    onClick={() => handleAnswerClick(answer.isCorrect)}>
                    {answer.answerText}
                  </button>

                )
              })}
              <div className="controls">
                {(currentQuestion === 0) ? (<div></div>) : (<div><button onClick={backQuestion}>Back</button></div>)}
                {(currentQuestion === questions.length - 1) ? (<button onClick={nextQuestion} disabled={!clicked}>Finish</button>) : (<button onClick={nextQuestion}>Next</button>)}
                {/* <button onClick={nextQuestion} disabled={!quizFinished}>Next</button> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}