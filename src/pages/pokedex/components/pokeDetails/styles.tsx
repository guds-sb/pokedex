import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  padding: 24px 48px;
  background-color: white;
  border: 4px solid #283840;
  border-radius: 16px 16px 128px 16px;
  box-shadow:
    inset 16px 0 16px #00000080,
    inset -16px 0 16px #00000080
  ;
`

export const TopCard = styled.div`
  display: flex;
`

export const ArtworkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 256px;
  background-color: #d8d8d8;
  border-radius: 8px 0 8px 8px;
`

export const Artwork = styled.img`
  width: 100%;
  height: 100%;
`

export const TopInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TopBasicInfo = styled.div`
  display: flex;
  background-color: #d8d8d8;
  border-radius: 0 8px 8px 0;
  padding: 24px;
`

export const TopDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

export const TopDetailedInfoLine = styled.div`
  display: flex;
  border-bottom: 4px solid #b8b8b8;
`

export const TopDetailedInfoLineTitle = styled.div`
`

export const TopDetailedInfoLineText = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`