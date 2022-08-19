import styled from 'styled-components';

interface IContainerProps {
  width: number;
}

const Container = styled.div<IContainerProps>`
  display: flex;

  width: ${({ width }) => width}px;
  height: 360px;
`;

export default Container;
