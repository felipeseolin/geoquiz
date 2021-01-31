import React from 'react';
import { ThemeProvider } from 'styled-components';

import db from '../../db.json';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ name }) {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        bg={db.bg}
        loadingSrc={db.globeLoading}
        playerName={name}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;

  return {
    props: {
      name,
    },
  };
}
