import React, { useState } from 'react';
import QuestionButton from '../components/QuestionButton';

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const homeQuestions = [
    "What is React?",
    "How does the virtual DOM work?",
    "What are React hooks?",
  ];

  const generateHomeQuestion = () => {
    // Randomly select a question from the list
    const randomIndex = Math.floor(Math.random() * homeQuestions.length);
    setCurrentQuestion(homeQuestions[randomIndex]);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <QuestionButton onClick={generateHomeQuestion} label="Generate Question" />
      {currentQuestion && <p style={styles.question}>{currentQuestion}</p>}
    </div>
  );
}

const styles = {
  question: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Home;
