import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export default function ResultIcon({ isCorrect }) {
  const getIcon = () => (isCorrect ? 'https://assets9.lottiefiles.com/packages/lf20_oaw8d1yt.json' : 'https://assets4.lottiefiles.com/packages/lf20_y8t1nosz.json');
  const getText = () => (isCorrect ? 'Alternativa correta!' : 'Alternativa incorreta');

  return (
    <ResultContainer>
      <Player
        autoplay
        loop
        speed={0.4}
        src={getIcon()}
        style={{ height: '50px', width: '50px', backgroundColor: 'transparent' }}
      />
      <p style={{ color: isCorrect ? '#2EC64F' : '#CC0000', fontSize: '18px' }}>
        { getText() }
      </p>
    </ResultContainer>
  );
}
