import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import './Score.css';
import { useLoggedUser } from '../../App';
import React, { useState, useRef } from 'react';
import Confetti from 'react-dom-confetti';

function Score(props) {
  const { score, closeSummary, maxPoints, CURRENT_QUIZ_ID } = props;
  const { loggedUser } = useLoggedUser();
  const [confettiActive, setConfettiActive] = useState(false);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const confettiRef = useRef();

  const submitScore = async () => {
    setConfettiActive(true);
    const response = await fetch('http://localhost:8080/quizzes/history', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        score: score,
        maxPoints: maxPoints,
        CURRENT_QUIZ_ID: CURRENT_QUIZ_ID,
        loggedUser: loggedUser,
      }),
    });
    if (!response.ok) {
      throw Error('Response is not Ok!');
    }
    closeSummary(false);
  };

  return (
    <div className="container">
      <PureModal isOpen>
        <div className="modal-content">
          <div className="score-circle">
            <h2>Your score: {score} / {maxPoints}</h2>
            <button onClick={submitScore} ref={confettiRef}>
              Hurrah
            </button>
            <Confetti active={confettiActive} config={confettiConfig} />
          </div>
        </div>
      </PureModal>
    </div>
  );
}

export default Score;
