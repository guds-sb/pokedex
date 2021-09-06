import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 24px;
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
  padding: 12px 24px;
`

export const TopDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
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

export const TopDetailedInfoTypes = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  padding-top: 12px;
`