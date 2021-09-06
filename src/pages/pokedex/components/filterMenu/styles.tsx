import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`

export const Category = styled.div`
  display: grid;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
`