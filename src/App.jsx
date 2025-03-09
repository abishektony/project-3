import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
    category: "Easy"
  },
  {
    question: "Who developed the theory of relativity?",
    answer: "Albert Einstein",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    category: "Hard"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    category: "Medium"
  },
  {
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
    image: "https://biomedicalodyssey.blogs.hopkinsmedicine.org/files/2019/10/anatomical-structure-animal-cell-GettyImages-514218370.jpg",
    category: "Medium"
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    image: "https://cdn.britannica.com/51/173051-131-1ECD9C16/gold-metal-Stacks-bars-Blocks-money-mercantilism.jpg",
    category: "Medium"
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    category: "Hard"
  }
];

const colors = {
  Easy: "#4CAF50",
  Medium: "#FFA500",
  Hard: "#FF4500",
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answer, setAnswer] = useState("");

  const handleCardClick = () => {
    if (feedback === "") return;
    setFlipped(!flipped);
  };

  const handleAnswer = () => {
    if (userGuess.toLowerCase() === answer.toLowerCase()) {
      setFeedback("Correct! ✅");
    } else {
      setFeedback("Incorrect ❌");
    } 
    setFlipped(true);
  }

  const handleNextClick = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setFlipped(false);
    setUserGuess("");
    setFeedback("");
    setAnswer(flashcards[currentIndex+1].answer);
  };

  const handleBackClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcards.length - 1);
    }
    setFlipped(false);
    setUserGuess("");
    setFeedback("");
    setAnswer(flashcards[currentIndex+1].answer);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Easy: "#4CAF50",
      Medium: "#FFA500",
      Hard: "#FF4500",
    };
    return colors[category] || "#333";
  };

  return (
    <div className="flashcard-container">
      <div>
        <h1 style={{fontSize: 80}}>Flashcard Quiz</h1>
        <p>Total Cards: {flashcards.length}</p>
        <p><u>Click</u> the card to flip, <u>click</u> next to see a new card!</p>
      </div>
      <div className="card-wrapper">
        <div
          className={`flashcard ${flipped ? "flipped" : ""}`} onClick={handleCardClick} disabled={feedback===""}
          style={{ borderColor: getCategoryColor(flashcards[currentIndex].category) }}
        >
          <div className="card-front">
            <img src={flashcards[currentIndex].image} alt="Flashcard Visual" className="card-image" />
            <p className="card-question" style={{ color: getCategoryColor(flashcards[currentIndex].category) }}>
              {flashcards[currentIndex].question}
            </p>
          </div>
          <div className="card-back">
            <img src={flashcards[currentIndex].image} alt="Flashcard Visual" className="card-image-reverse" />
            <p className="card-answer" style={{ backgroundColor: getCategoryColor(flashcards[currentIndex].category) }}>
             {answer}
            </p>
          </div>
        </div>
        <div className="user-input">
          <input
            className='text-box' 
            type="text"
            placeholder="Enter your guess..."
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            disabled={feedback!==""}
            style={{
              border: feedback!=="" ? (userGuess.toLowerCase() === flashcards[currentIndex].answer.toLowerCase() ? "3px solid green" : "3px solid red") : "1px solid #ccc",
              backgroundColor: feedback!=="" ? (userGuess.toLowerCase() === flashcards[currentIndex].answer.toLowerCase() ? "#0b2712" : "#2a0c0f") : "black"
            }}
          />
          <p className='text'>{feedback}</p>
          <button className='submit-button' onClick={handleAnswer} disabled={feedback!==""}>Submit</button>
        </div>
        <button className="move-button" onClick={handleBackClick}>⬅ Back</button>
        <button className="move-button" onClick={handleNextClick}>Next ➡</button>
      </div>
    </div>
  );
};

export default App
