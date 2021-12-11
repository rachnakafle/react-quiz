import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
    const questions = [
		{
			questionText: 'What is the capital of Nepal?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Kathmandu', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'DB computer abbreviation usually means ?',
			answerOptions: [
				{ answerText: 'Double Byte', isCorrect: false },
				{ answerText: 'Data Block', isCorrect: false },
				{ answerText: 'Driver Boot', isCorrect: false },
				{ answerText: 'Database', isCorrect: true },
			],
		},
        {
			questionText: 'Which of the following is not a programming language?',
			answerOptions: [
				{ answerText: 'TypeScript', isCorrect: false },
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Anaconda', isCorrect: true },
			],
		},
        {
			questionText: 'WhatsApp concurrent model is implemented using _____ programming language.',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Node.js', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'Erlang', isCorrect: true },
			],
		},
        {
			questionText: 'Which of the following is not a type of computer code related to Program Execution?',
			answerOptions: [
				{ answerText: 'Source code', isCorrect: false },
				{ answerText: 'Hex Code', isCorrect: true },
				{ answerText: 'Bytecode', isCorrect: false },
				{ answerText: 'Machine Code', isCorrect: false },
			],
		},
        {
			questionText: 'What is Babel?',
			answerOptions: [
				{ answerText: 'A JavaScript transpiler', isCorrect: false },
				{ answerText: 'A JavaScript interpreter', isCorrect: false },
				{ answerText: 'A JavaScript Compiler', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
        {
			questionText: 'OS computer abbreviation usually means ?',
			answerOptions: [
				{ answerText: 'Order of Significance', isCorrect: false },
				{ answerText: 'Open Software', isCorrect: false },
				{ answerText: 'Operating System', isCorrect: true },
				{ answerText: 'Optical Sensor', isCorrect: false },
			],
		},
        {
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		
	);
}
export default Quiz
