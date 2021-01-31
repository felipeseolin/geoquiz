import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const BaseLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/jsx-props-no-spreading */}
      <BaseLink {...props}>
        { children }
      </BaseLink>
    </NextLink>
  );
}
