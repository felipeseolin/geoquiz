import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import db from '../../../db.json';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import GitHubCorner from '../../components/GitHubCorner';
import JogarWidget from './components/JogarWidget';
import QuizesDaGaleraWidget from './components/QuizesDaGaleraWidget';
import AluraWidget from './components/AluraWidget';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function HomeScreen() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <JogarWidget />
        <QuizesDaGaleraWidget />
        <AluraWidget />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/felipeseolin" />
    </QuizBackground>
  );
}
