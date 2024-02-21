import { useState } from "react";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
  {
    questionText: "Who is the CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
];

export default function App() {
  const [answered, setAnswered] = useState([]);
  const [idx, setIdx] = useState(0); // Use useState hook for idx

  const currentQuestion = questions[idx];

  const nextQuestion = () => {
    if (idx < questions.length - 1) {
      setIdx(idx + 1); // Update idx state
    }
  };

  const previousQuestion = () => {
    if (idx > 0) {
      setIdx(idx - 1); // Update idx state
    }
  };

  const handleChange = (e) => {
    // Handle change logic here
  };

  console.log(answered);

  return (
    <div className="App">
      <h1>{currentQuestion.questionText}</h1>
      <ul>
        {currentQuestion.answerOptions.map((e, index) => (
          <p>
            <input
              key={idx}
              value={e.answerText}
              type="radio"
              name="option"
              onChange={handleChange}
            />
            {e.answerText}
          </p>
        ))}
      </ul>
      <button onClick={previousQuestion} disabled={idx === 0}>
        Previous
      </button>
      <button onClick={nextQuestion} disabled={idx === questions.length - 1}>
        Next
      </button>
    </div>
  );
}
