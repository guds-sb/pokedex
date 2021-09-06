import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 48px;
`

export const MovesList = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 100%;
`

export const MoveDisplay = styled.div`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
`
