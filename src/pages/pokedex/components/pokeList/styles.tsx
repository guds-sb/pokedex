import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const SortArea = styled.div`
  display: flex;
  margin-bottom: 24px;

  div:not(:last-child) {
    margin-right: 24px;
  }
`

export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #e8f038;
  overflow-y: scroll;
  border: 4px solid #283840;
  border-radius: 16px;
`