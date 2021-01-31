import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import Widget from '../../../../components/Widget';

import db from '../../../../../db.json';

export default function LoadingWidget({ loadingSrc }) {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Player
          autoplay
          loop
          speed="2"
          src={loadingSrc || db.defaultLoading}
          style={{ height: '150px', width: '150px', backgroundColor: 'transparent' }}
        />
      </Widget.Content>
    </Widget>
  );
}
