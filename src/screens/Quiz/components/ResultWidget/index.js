import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Widget from '../../../../components/Widget';
import BackLinkArrow from '../../../../components/BackLinkArrow';
import Link from '../../../../components/Link';
import Button from "../../../../components/Button";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default function ResultWidget({ results, playerName, questions, answers }) {
  const [totalAcertos, setTotalAcertos] = useState(0);
  const [copiadoUrl, setCopiadoUrl] = useState(false);

  useEffect(() => {
    setTotalAcertos(results.filter((result) => result).length);
  }, results);

  const camelize = (str) => str.replace(/(\b[a-z](?!\s))/g, (x) => x.toUpperCase());

  const parabenizar = () => totalAcertos > results.length / 2;
  const getMensagem = () => (parabenizar() ? `Mandou bem, ${camelize(playerName)}!` : `Tente outra vez, ${camelize(playerName)}.`);

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>Resultado</h3>
      </Widget.Header>

      <Widget.Content>
        <p>{getMensagem()}</p>
        <h3 style={{ fontSize: '1.1rem' }}>
          {`Você acertou ${totalAcertos}${parabenizar() ? ', parabéns' : ''}!`}
        </h3>
        <ul>
          { results.map((result, resultIndex) => {
            const key = `resultado__${result}__${resultIndex}`;
            return (
              <Widget.Topic as="li" key={key} style={
                {
                  backgroundColor: 'transparent',
                  border: 'solid 1px white',
                  pointerEvents: 'none'
                }
              }>
                <h4>{ `Questão ${resultIndex + 1}` }</h4>
                <h4>{ questions[resultIndex].title }</h4>
                <ul>
                  {
                    questions[resultIndex].alternatives.map((alternative, alternativeIndex) => {
                      return (
                        <Widget.Topic
                            as="li"
                            data-question-correct={questions[resultIndex].answer === alternativeIndex}
                        >
                          {alternative}{' '}{ answers[resultIndex] === alternativeIndex && <i>(selecionada)</i> }
                        </Widget.Topic>
                      )
                     })
                  }
                </ul>
              </Widget.Topic>
            );
          })}
        </ul>

        <FlexCenter>
          <Button type={"button"} onClick={() => {
            setCopiadoUrl(true);
            navigator.clipboard.writeText('https://geoquiz.felipeseolin.vercel.app/');
            setInterval(() => setCopiadoUrl(false), 5 * 1000);
          }}>
            Adicionar ao meu projeto
          </Button>
          { copiadoUrl && <small>URL do projeto copiado para seu clipboard</small>}
          <Link href="/" style={{paddingTop: '8px'}}>
            Voltar para a home
          </Link>
        </FlexCenter>
      </Widget.Content>
    </Widget>
  );
}
