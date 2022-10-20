import React, { useState } from 'react'

export default function App() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false);


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
    {
      questionText: 'In the JavaScript, which one of the following is not considered as an error:',
      answerOptions: [
        { answerText: 'Syntax error', isCorrect: false },
        { answerText: 'Division by zero', isCorrect: true },
        { answerText: 'Missing of semicolons', isCorrect: false },
        { answerText: 'Missing of Bracket', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following number object function returns the value of the number?',
      answerOptions: [
        { answerText: 'toString()', isCorrect: false },
        { answerText: 'toLocaleString()', isCorrect: false },
        { answerText: 'valueOf()', isCorrect: true },
        { answerText: 'toPrecision()', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?',
      answerOptions: [
        { answerText: 'slice()', isCorrect: false },
        { answerText: 'split()', isCorrect: false },
        { answerText: 'search()', isCorrect: false },
        { answerText: 'substr()', isCorrect: true },
      ],
    },
    {
      questionText: ' In JavaScript the x===y statement implies that:',
      answerOptions: [
        { answerText: 'Both are equal in the value and data type', isCorrect: true },
        { answerText: 'Both x and y are equal in value, type and reference address as well', isCorrect: false },
        { answerText: 'Both are x and y are equal in value only', isCorrect: false },
        { answerText: 'Both are not same at all', isCorrect: false },
      ],
    },
    {
      questionText: 'What are the different alternatives of == and != in JavaScript?',
      answerOptions: [
        { answerText: 'It uses bitwise checking', isCorrect: false },
        { answerText: 'It uses equals() and notequals() instead', isCorrect: true },
        { answerText: 'It uses === and !== instead', isCorrect: false },
        { answerText: 'It uses equalto()', isCorrect: false },
      ],
    },
  ]

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setQuizFinished(true);
  };

  const restart = () => {

    setScore(0)
    setCurrentIndex(0)
    setQuizFinished(0)

  }

  const backQuestion = () => {

    if (
      questions[currentIndex].answer === handleAnswerClick.answerText
    ) {
      setScore(score - 1)
    } setCurrentIndex(currentIndex - 1)
  }


  const nextQuestion = () => {
    setQuizFinished(false)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
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
            <button onClick={() => restart()}>Restart</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentIndex + 1}</span>/{questions.length}
              </div>

              <div className="question-text">
                {questions[currentIndex].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentIndex].answerOptions.map((answer) => {

                return (
                  <button
                    className={`button ${quizFinished && handleAnswerClick.isCorrect ? "correct" : "next"}`}
                    disabled={quizFinished}
                    key={answer.answerText}
                    onClick={() => handleAnswerClick()}>
                    {answer.answerText}
                  </button>
                )
              })}
              <div className="controls">
                {(currentIndex === 0) ? (<div></div>) : (<div><button onClick={backQuestion}>Back</button></div>)}

                <button onClick={nextQuestion} disabled={!quizFinished}>Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}