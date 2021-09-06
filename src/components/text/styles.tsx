import styled from 'styled-components'

type ContainerProps = {
  white?: boolean
};

export const Container = styled.p<ContainerProps>`
  margin: 0;
  color: ${({ color }) => color ? `#${color}` : 'black'};
  font-size: 40px;
  line-height: 40px;
  text-shadow: 4px 4px #00000040;
`
