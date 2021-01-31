import { motion } from 'framer-motion';
import React from 'react';

import db from '../../../../../db.json';
import Widget from '../../../../components/Widget';
import Link from '../../../../components/Link';

export default function QuizesDaGaleraWidget() {
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Content>
        <h1>Quizes da Galera</h1>

        <ul>
          { db.external.map(
            (linkExterno) => {
              const [projectName, githubUser] = linkExterno.replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');
              return (
                <li key={linkExterno}>
                  <Widget.Topic
                    as={Link}
                    href={`/quiz/${projectName}___${githubUser}`}
                  >
                    { `${githubUser}/${projectName} `}
                  </Widget.Topic>
                </li>
              );
            },
          )}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
