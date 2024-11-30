import React, { useState } from 'react';
import QuestionButton from '../components/QuestionButton';

function About() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const aboutQuestions = [
    "What is the purpose of this app?",
    "Who created this app?",
    "How can this app help users?",
  ];

  const generateAboutQuestion = () => {
    // Randomly select a question from the list
    const randomIndex = Math.floor(Math.random() * aboutQuestions.length);
    setCurrentQuestion(aboutQuestions[randomIndex]);
  };

  return (
    <div>
      <h1>About Page</h1>
      <QuestionButton onClick={generateAboutQuestion} label="Generate Question" />
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

export default About;
