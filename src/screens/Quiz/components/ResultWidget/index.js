import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Widget from '../../../../components/Widget';
import BackLinkArrow from '../../../../components/BackLinkArrow';
import Link from '../../../../components/Link';

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default function ResultWidget({ results, playerName }) {
  const [totalAcertos, setTotalAcertos] = useState(0);

  useEffect(() => {
    setTotalAcertos(results.filter((result) => result).length);
  }, results);

  const camelize = (str) => str.replace(/(\b[a-z](?!\s))/g, (x) => x.toUpperCase());

  const parabenizar = () => totalAcertos > 2;
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
              <li key={key}>
                {`#${resultIndex + 1} Resultado: ${result ? 'Acertou' : 'Errou'}`}
              </li>
            );
          })}
        </ul>

        <FlexCenter>
          <Link href="/">
            Voltar para a home
          </Link>
        </FlexCenter>
      </Widget.Content>
    </Widget>
  );
}
