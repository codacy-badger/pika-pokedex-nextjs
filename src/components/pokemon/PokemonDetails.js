import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import { Link, withTranslation } from '../../i18n';
import PokemonTypes from './PokemonTypes';
import PokemonCaptureButton from './PokemonCaptureButton';

const PokemonDetails = ({ t, pokemon }) => {
  return (
    <>
      <Row className="pt-5 pb-5">
        <Col sm={5} xs={12}>
          <Row className="pokemon-image justify-content-center">
            <Link href={`/pokemon/${pokemon.id}`}>
              <Image src={pokemon.image} label={pokemon.slug} alt={pokemon.slug} thumbnail fluid />
            </Link>
            <PokemonCaptureButton pokemon={pokemon} size="large" />
          </Row>
          <Row className="justify-content-center">
            <h5 className="pr-1">{`${pokemon.code} - ${pokemon.name}`}</h5>
            <PokemonTypes types={pokemon.types} t={t} />
          </Row>
        </Col>
        <Col sm={3} xs={6} className="ml-3">
          <PokemonStats stats={pokemon.stats} t={t} />
        </Col>
        <Col sm={3} xs={6} className="ml-3">
          <PokemonAbilities stats={pokemon.abilities} t={t} />
        </Col>
      </Row>
    </>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const PokemonStats = ({ t, stats }) => {
  return (
    <>
      <Row className="justify-content-left">
        <h5>{t('pokemon-stats')}</h5>
      </Row>
      <Row className="justify-content-left">
        <div className="pokemon-stats">
          {stats?.map((stat) => (
            <p key={stat.name}>{`${stat.name}: ${stat.value}`}</p>
          ))}
        </div>
      </Row>
    </>
  );
};

const PokemonAbilities = ({ t, abilities }) => {
  return (
    <>
      <Row className="justify-content-left">
        <h5>{t('pokemon-abilities')}</h5>
      </Row>
      <Row className="justify-content-left">
        <div className="pokemon-abilities">
          {abilities?.map((ability) => (
            <p key={ability.name}>{ability.name}</p>
          ))}
        </div>
      </Row>
    </>
  );
};

export default withTranslation('pokemon')(PokemonDetails);
