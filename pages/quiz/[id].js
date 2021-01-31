import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno, name }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        bg={dbExterno.bg}
        playerName={name}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const [projectName, githubUser] = context.query.id.split('___');
  const response = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`);
  const dbExterno = await response.json();

  return {
    props: {
      dbExterno,
      name: name || 'Jogador(a) padrão',
    },
  };
}
