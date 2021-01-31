import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../../../../../db.json';

import Widget from '../../../../components/Widget';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

export default function JogarWidget() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  const jogar = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h1>{db.title}</h1>
      </Widget.Header>
      <Widget.Content>
        <p>{db.description}</p>
        {/* eslint-disable-next-line func-names */}
        <form onSubmit={jogar}>
          <Input
            name="nomeDoUsuario"
            onChange={(event) => setName(event.target.value)}
            placeholder="Diz ai seu nome para jogar"
            value={name}
          />
          <Button type="submit" disabled={name.length === 0}>
            {`Jogar ${name}`}
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}
