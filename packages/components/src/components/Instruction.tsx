import { FC } from 'react';
import {
  Container,
  UpperLine,
  SingleDot,
  Inner,
  Content,
} from './Instruction.styles';

export const Instruction: FC = ({ children }) => {
  return (
    <Container>
      <UpperLine />
      <Inner>
        <SingleDot />
        <Content>{children}</Content>
      </Inner>
    </Container>
  );
};
