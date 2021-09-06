import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  box-sizing: border-box;
`

export const PokeballScroll = styled.img`
  position: fixed;
  z-index: -1;
  top: calc(50% - 220px);
  left: -220px;
`

export const ContentArea = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1200px;
`
