import styled from 'styled-components'

type SelectOptionProps = {
  selected: boolean
};

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  top: 100%;
  left: 0;
  z-index: 2;
  background-color: white;
  border: 4px solid #283840;
  border-radius: 8px;
  cursor: pointer;
`

export const ClearOption = styled.div`
  padding: 8px;
  background-color: white;

  :hover {
    background-color: '#ddf4ff';
  }
`

export const SelectOption = styled.div<SelectOptionProps>`
  padding: 8px;
  background-color: ${({ selected }) => selected
    ? '#b8ddff'
    : 'white'
  };

  :hover {
    background-color: ${({ selected }) => selected
      ? '#b8ddff'
      : '#ddf4ff'
    };
  }
`