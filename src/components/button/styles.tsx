import styled from 'styled-components'

type ContainerProps = {
  active: boolean
}

const backgroundColor = ({ active }: any) => active
  ? `#b0c8f0`
  : `#4890b0`

export const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: 192px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border: 4px solid #000000B0;
  border-radius: 8px;
  background-color: ${backgroundColor};
  flex: 1;
`
