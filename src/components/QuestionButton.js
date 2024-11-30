import React from 'react';

function QuestionButton({ onClick, label }) {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QuestionButton;
