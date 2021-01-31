/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import db from '../../../db.json';

import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuestionWidget from './components/QuestionWidget';
import LoadingWidget from './components/LoadingWidget';
import ResultWidget from './components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizScreen({
  externalQuestions, bg, loadingSrc, playerName,
}) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  const addResult = (result) => {
    setResults([
      ...results,
      result,
    ]);
  };

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={bg || db.bg}>
      <QuizContainer>
        <QuizLogo />
        {
            screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
            )
        }
        {screenState === screenStates.LOADING && <LoadingWidget loadingSrc={loadingSrc} />}
        {
          screenState === screenStates.RESULT
          && <ResultWidget results={results} playerName={playerName} />
        }
      </QuizContainer>
    </QuizBackground>
  );
}
