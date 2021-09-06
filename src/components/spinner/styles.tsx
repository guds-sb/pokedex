import styled from 'styled-components'

export const Container = styled.div`
  border: 16px solid #00000000;
  border-radius: 50%;
  border-top: 16px solid #283840;
  width: 120px;
  height: 120px;
  animation: spinning 0.8s linear infinite;

  @keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
