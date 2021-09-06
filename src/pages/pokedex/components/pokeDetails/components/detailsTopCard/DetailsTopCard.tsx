import Text from 'components/text/Text';
import Type from 'components/type/Type';
import { PokeDetailsContext } from 'contexts/pokeDetailsContext/PokeDetailsProvider';
import { zeroPad } from 'helpers';
import { useContext } from 'react';
import {
  Container,
  ArtworkWrapper,
  Artwork,
  TopInfoWrapper,
  TopBasicInfo,
  TopDetailedInfo,
  TopDetailedInfoLine,
  TopDetailedInfoLineTitle,
  TopDetailedInfoLineText,
  TopDetailedInfoTypes
} from './styles';

const DetailsTopCard = () => {
  const {
    pokemon
  } = useContext(PokeDetailsContext);

  return (
    <Container>
      <ArtworkWrapper>
        <Artwork src={pokemon.artUrl} />
      </ArtworkWrapper>
      <TopInfoWrapper>
        <TopBasicInfo>
          <Text>
            {`No${zeroPad({ number: pokemon.id, size: 3 })}\u00A0\u00A0\u00A0`}
            {pokemon.name.toUpperCase()}
          </Text>
        </TopBasicInfo>
        <TopDetailedInfo>
          <TopDetailedInfoLine>
            <TopDetailedInfoLineTitle>
              <Text>
                {`HT`}
              </Text>
            </TopDetailedInfoLineTitle>
            <TopDetailedInfoLineText>
              <Text>
                {`${pokemon.height / 10} m.`}
              </Text>
            </TopDetailedInfoLineText>
          </TopDetailedInfoLine>
          <TopDetailedInfoLine>
            <TopDetailedInfoLineTitle>
              <Text>
                {`WT`}
              </Text>
            </TopDetailedInfoLineTitle>
            <TopDetailedInfoLineText>
              <Text>
                {`${pokemon.weight / 10} kg.`}
              </Text>
            </TopDetailedInfoLineText>
          </TopDetailedInfoLine>
          <TopDetailedInfoTypes>
            {pokemon.types.map((type: any) => (
              <Type>{type}</Type>
            ))}
          </TopDetailedInfoTypes>
        </TopDetailedInfo>
      </TopInfoWrapper>
    </Container>
  );
}

export default DetailsTopCard;