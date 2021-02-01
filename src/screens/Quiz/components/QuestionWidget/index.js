import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Widget from '../../../../components/Widget';
import BackLinkArrow from '../../../../components/BackLinkArrow';
import AlternativesForm from '../../../../components/AlternativesForm';
import Button from '../../../../components/Button';
import ResultIcon from '../ResultIcon';

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  addAnswer,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <div
        style={{
          width: '100%',
          height: '150px',
          backgroundImage: `url('${question.image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0,0,0,0.4)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmitted(true);
            setTimeout(() => {
              addResult(isCorrect);
              addAnswer(selectedAlternative);
              setIsQuestionSubmitted(false);
              setSelectedAlternative(undefined);
              onSubmit();
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `question__${questionIndex}__alternative__${alternativeIndex}__${alternative}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as={motion.label}
                key={alternativeId}
                htmlFor={alternativeId}
                transition={{ delay: `0.${1 * alternativeIndex}`, duration: 0.5 }}
                variants={{
                  show: { opacity: 1, x: '0' },
                  hidden: { opacity: 0, x: '-100%' },
                }}
                initial="hidden"
                animate="show"
                data-selected={isSelected}
                data-submitted={isQuestionSubmitted}
                data-correct={alternativeIndex === question.answer}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  disabled={isQuestionSubmitted}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          { !isQuestionSubmitted && (
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          )}
          { isQuestionSubmitted
            && (
              <ResultIcon isCorrect={isCorrect} />
            )}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
