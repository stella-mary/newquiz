import React, { useState } from 'react'

export default function App() {
	// Define a state variable here to track question status
	const [currentIndex, setCurrentIndex] = useState(0)
    

    const questions = [
      {
        questionText: 'Do you know the name of the largest cat in the world?',
        answerOptions: [
          { answerText: 'Siberian Tiger', isCorrect: true },
          { answerText: 'Momo', isCorrect: false },
          { answerText: 'KiKi', isCorrect: false },
          { answerText: 'Boo', isCorrect: false },
        ],
      },
      {
        questionText: 'Who gave the name ‘Computer Virus’?',
        answerOptions: [
          { answerText: 'David', isCorrect: false },
          { answerText: 'Fred Kohen', isCorrect: true },
          { answerText: 'Sanjeev', isCorrect: false },
          { answerText: 'John', isCorrect: false },
        ],
      },
      {
        questionText: 'Who is the youngest music composer joining the film industry at the age of 16?',
        answerOptions: [
          { answerText: 'Harris Jayaraj', isCorrect: false },
          { answerText: 'A.R.Rahman', isCorrect: false },
          { answerText: 'Yuvan Shankar Raja', isCorrect: true },
          { answerText: 'G.V. Prakash', isCorrect: false },
        ],
      },
      {
        questionText: 'What vitamin are leafy green vegetables rich in?',
        answerOptions: [
          { answerText: 'Vitamin B', isCorrect: false },
          { answerText: 'Vitamin E', isCorrect: false },
          { answerText: 'Vitamin C', isCorrect: false },
          { answerText: 'Vitamin K', isCorrect: true },
        ],
      },
      {
        questionText: 'Who is the current vice captain of India?',
        answerOptions: [
          { answerText: 'MS Dhoni', isCorrect: true },
          { answerText: 'Bhuvneshwar Kumar', isCorrect: false },
          { answerText: 'Rohit sharma', isCorrect: false },
          { answerText: 'Rahul', isCorrect: false },
        ],
      },
    ]

	function handleAnswerClick(isCorrect) {

    if(isCorrect) {
      setScore((score) => score + 1)
    }
    if(currentIndex  === questions.length - 1) {
setQuizFinished(true);
        } else {
		setCurrentIndex((value) => value + 1)
	}

    }

    const [quizFinished, setQuizFinished] = useState(false)
    const [score, setScore ] = useState(0)
    

    const restart = () => {
    
        setScore(0)
        setCurrentIndex(0)
        setQuizFinished(0)
    }

	return (
		<div className="app">
			{quizFinished ? (
				<div className="score-section">
          <h1>Final Results</h1>
					<h2>{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)
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
									onClick={() => handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}