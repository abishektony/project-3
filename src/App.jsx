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

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleNextClick = () => {
    setFlipped(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * flashcards.length);
      setCurrentIndex(randomIndex);
    }, 600);
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
          className={`flashcard ${flipped ? "flipped" : ""}`} onClick={handleCardClick}
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
              {flashcards[currentIndex].answer}
            </p>
          </div>
        </div>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default App
