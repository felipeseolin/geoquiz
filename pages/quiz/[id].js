import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      Desafio da próxima aula junto com as animações
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const response = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`);
  const dbExterno = await response.json();

  return {
    props: {
      dbExterno,
    },
  };
}
