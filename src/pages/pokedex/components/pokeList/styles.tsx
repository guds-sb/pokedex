import styled from 'styled-components'

type ListItemProps = {
  selected: boolean
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  align-items: stretch;
  padding: 24px;
  background-color: #e3e976;
  overflow-y: auto;
  border: 4px solid #283840;
  border-radius: 16px;
`

export const ListItem = styled.div<ListItemProps>`
  display: flex;
  height: 64px;
  padding: 12px;
  font-size: 40px;
  color: black;
  text-shadow: 4px 4px #00000040;
  background-color: ${({ selected }) => selected
    ? '#b8ddff'
    : 'white'
  };
  border-radius: 16px;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  :hover {
    background-color: ${({ selected }) => selected
      ? '#b8ddff'
      : '#ddf4ff'
    };
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ErrorMessage = styled.div`
  font-size: 40px;
  color: #550000;
  text-shadow: 4px 4px #00000040;
`

export const PokeIcon = styled.img`
  position: relative;
  width: 136px;
  height: 112px;
  top: -36px;
  left: -24px;
`